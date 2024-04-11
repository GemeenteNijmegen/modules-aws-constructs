import { Duration } from 'aws-cdk-lib';
import { Alarm, ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { Key } from 'aws-cdk-lib/aws-kms';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export interface DeadLetterQueueProps {
  /**
   * Key to encrypt the queue
   */
  readonly kmsKey: Key;
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
   * Alarm Description
   * @default -
   */
  readonly alarmDescription?: string;
}

export class DeadLetterQueue extends Construct {

  private readonly dlq: Queue;

  constructor(scope: Construct, id: string, props: DeadLetterQueueProps) {
    super(scope, id);

    this.dlq = new Queue(this, 'dlq', {
      encryptionMasterKey: props.kmsKey,
      retentionPeriod: props.retentionPeriod ?? Duration.days(14),
    });

    if (props.alarm) {
      this.setupDlqAlarm(id, props);
    }

  }

  queue() {
    return this.dlq;
  }

  private setupDlqAlarm(id: string, props: DeadLetterQueueProps) {
    new Alarm(this, 'dlq-alarm', {
      metric: this.dlq.metricNumberOfMessagesReceived(),
      threshold: 0,
      evaluationPeriods: 1,
      comparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      alarmDescription: props.alarmDescription ?? `Alarm on DLQ for ${id}`,
    });
  }

}