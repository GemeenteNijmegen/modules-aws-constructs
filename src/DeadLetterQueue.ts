import { Duration } from 'aws-cdk-lib';
import { Alarm, ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { Key } from 'aws-cdk-lib/aws-kms';
import { Queue, QueueEncryption, QueueProps } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { Criticality } from './Criticality/Criticality';

export interface DeadLetterQueueProps {
  /**
   * Bring your own dead letter queue
   */
  readonly dlq?: Queue;
  /**
   * Key to encrypt the queue
   */
  readonly kmsKey?: Key;
  /**
   * Retention period
   * @default - 14 days
   */
  readonly retentionPeriod?: Duration;
  /**
   * Setup alarm
   * @default true
   */
  readonly alarm?: boolean;
  /**
   * Name to descibe the alarm (alarm level suffic is determined by the alarmCriticality property)
   */
  readonly alarmName?: string;
  /**
   * Alarm Description
   * @default -
   */
  readonly alarmDescription?: string;
  /**
   * Alarm criticality
   * @default critical
   */
  readonly alarmCriticality?: Criticality;
  /**
   * Queue props
   */
  readonly queueOptions?: QueueProps;
}

export class DeadLetterQueue extends Construct {

  readonly dlq: Queue;

  constructor(scope: Construct, id: string, props: DeadLetterQueueProps) {
    super(scope, id);

    if (props.dlq) {
      this.dlq = props.dlq;
    } else {
      this.dlq = new Queue(this, 'dlq', {
        encryption: props.kmsKey ? QueueEncryption.KMS : QueueEncryption.KMS_MANAGED,
        encryptionMasterKey: props.kmsKey,
        retentionPeriod: props.retentionPeriod ?? Duration.days(14),
        ...props.queueOptions,
      });
    }

    if (props.alarm) {
      this.setupDlqAlarm(props);
    }

  }

  private setupDlqAlarm(props: DeadLetterQueueProps) {
    const level = props.alarmCriticality ? props.alarmCriticality.alarmSuffix() : new Criticality('critical').alarmSuffix();
    new Alarm(this, 'dlq-alarm', {
      metric: this.dlq.metricNumberOfMessagesReceived(),
      alarmName: `dlq-${props.alarmName}${level}`,
      threshold: 0,
      evaluationPeriods: 1,
      comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      alarmDescription: props.alarmDescription ?? `Alarm on DLQ for ${props.alarmName}`,
    });
  }

}