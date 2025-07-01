import { Duration } from 'aws-cdk-lib';
import { Role } from 'aws-cdk-lib/aws-iam';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { Queue, QueueEncryption, QueueProps } from 'aws-cdk-lib/aws-sqs';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { Criticality } from './Criticality/Criticality';
import { DeadLetterQueue } from './DeadLetterQueue';

export interface QueueWithDlqProps {
  /**
   * Base identifier for constructs (prefer lowercase, alphanumeric and hyphens) used to name child resources
   * e.g. 'esb-delivery'
   */
  readonly identifier: string;
  /**
   * Encryption key for both primary queue and DLQ
   */
  readonly kmsKey: IKey;
  /**
   * Optional: existing DLQ queue to reuse; if provided, no new DLQ is created
   */
  readonly dlq?: Queue;
  /**
   * Optional: priority of the DLQ alarm
   */
  readonly criticality?: Criticality;
  /**
   * Use FIFO queue? Defaults to true
   */
  readonly fifo?: boolean;
  /**
   * Optional retention period for the main queue. Defaults to 14 days.
   */
  readonly retentionPeriod?: Duration;
  /**
   * Optional max receive count for DLQ redrive policy. Defaults to 3.
   */
  readonly maxReceiveCount?: number;
  /**
   * Customize the main queue properties. Certain props (fifo, encryption, deadLetterQueue, retentionPeriod) are overridden.
   */
  readonly queueProps?: Omit<
    QueueProps,
    | 'fifo'
    | 'encryption'
    | 'encryptionMasterKey'
    | 'deadLetterQueue'
    | 'encryptionScope'
    | 'retentionPeriod'
  >;
  /**
   * Optional: IAM Role which consumes from the queue; if provided, consume grant will be applied
   */
  readonly role?: Role;
  /**
   * Optional: grant send permissions to the provided role on the DLQ. Defaults to false.
   */
  readonly grantDlqSend?: boolean;
  /**
   * Optional: SSM parameter name to store the main queue ARN
   */
  readonly ssmQueueArnParamName?: string;
  /**
   * Optional: description for the main queue ARN SSM parameter
   */
  readonly ssmQueueArnParamDescription?: string;
  /**
   * Optional: SSM parameter name to store the DLQ ARN
   */
  readonly ssmDlqArnParamName?: string;
  /**
   * Optional: description for the DLQ ARN SSM parameter
   */
  readonly ssmDlqArnParamDescription?: string;
}

/**
 * A reusable SQS queue with an associated dead-letter queue (DLQ).
 *
 * Required props: `identifier` and `key`. Optional props customize FIFO, retention, maxReceiveCount, IAM grants, and SSM exports.
 *
 * @example
 * ```ts
 *
 *   const myQueueWithDlq = new QueueWithDlq(this, 'MyQueue', {
 *     identifier: 'my-process',
 *     key: myKey,
 *     role: myRole,
 *   });
 *   const mainQueue = myQueueWithDlq.queue;
 *   const deadLetterQueue = myQueueWithDlq.dlq;
 * ```
 */
export class QueueWithDlq extends Construct {
  public readonly queue: Queue;
  public readonly dlq: Queue;

  constructor(scope: Construct, id: string, props: QueueWithDlqProps) {
    super(scope, id);

    const isFifo = props.fifo ?? true;
    const retention = props.retentionPeriod ?? Duration.days(14);
    const maxReceive = props.maxReceiveCount ?? 3;

    // DLQ optional or make a new one from own construct
    if (props.dlq) {
      this.dlq = props.dlq;
    } else {
      const dlqId = `${props.identifier}-dlq`;
      const deadLetter = new DeadLetterQueue(this, dlqId, {
        alarmCriticality: props.criticality,
        queueOptions: { fifo: isFifo },
        kmsKey: props.kmsKey,
      });
      this.dlq = deadLetter.dlq;
    }

    // No queue names
    this.queue = new Queue(this, `${props.identifier}-queue`, {
      ...props.queueProps,
      fifo: isFifo,
      encryption: QueueEncryption.KMS,
      encryptionMasterKey: props.kmsKey,
      retentionPeriod: retention,
      deadLetterQueue: {
        queue: this.dlq,
        maxReceiveCount: maxReceive,
      },
    });


    if (props.role) {
      this.queue.grantConsumeMessages(props.role);
      if (props.grantDlqSend) {
        this.dlq.grantSendMessages(props.role);
      }
    }


    if (props.ssmQueueArnParamName) {
      new StringParameter(this, `${props.identifier}-queue-arn-param`, {
        parameterName: props.ssmQueueArnParamName,
        stringValue: this.queue.queueArn,
        description:
          props.ssmQueueArnParamDescription ?? `ARN of SQS queue ${props.identifier}`,
      });
    }
    if (props.ssmDlqArnParamName) {
      new StringParameter(this, `${props.identifier}-dlq-arn-param`, {
        parameterName: props.ssmDlqArnParamName,
        stringValue: this.dlq.queueArn,
        description:
          props.ssmDlqArnParamDescription ?? `ARN of DLQ ${props.identifier}-dlq`,
      });
    }
  }
}
