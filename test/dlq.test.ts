import { App, Duration, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Key } from 'aws-cdk-lib/aws-kms';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { DeadLetterQueue } from '../src/DeadLetterQueue';


test('Constrcution of dlq with alarm', () => {
  class DummyStack extends Stack {
    constructor(scope: Construct, id: string) {
      super(scope, id);
      const key = new Key(this, 'key');
      new DeadLetterQueue(this, 'dlq', {
        kmsKey: key,
        alarm: true,
        alarmDescription: 'test-alarm',
        retentionPeriod: Duration.days(10),
      });
    }
  }
  const app = new App();
  const stack = new DummyStack(app, 'dummy-stack');
  const template = Template.fromStack(stack);

  const queues = template.findResources('AWS::SQS::Queue');
  const alarms = template.findResources('AWS::CloudWatch::Alarm');
  expect(Object.keys(queues)).toHaveLength(1);
  expect(Object.keys(alarms)).toHaveLength(1);
});


test('Constrcution of dlq with default alarm', () => {
  class DummyStack extends Stack {
    constructor(scope: Construct, id: string) {
      super(scope, id);
      const key = new Key(this, 'key');
      new DeadLetterQueue(this, 'dlq', {
        kmsKey: key,
      });
    }
  }
  const app = new App();
  const stack = new DummyStack(app, 'dummy-stack');
  const template = Template.fromStack(stack);

  const queues = template.findResources('AWS::SQS::Queue');
  const alarms = template.findResources('AWS::CloudWatch::Alarm');
  expect(Object.keys(queues)).toHaveLength(1);
  expect(Object.keys(alarms)).toHaveLength(1);
});


test('Constrcution of dlq without alarm', () => {
  class DummyStack extends Stack {
    constructor(scope: Construct, id: string) {
      super(scope, id);
      const key = new Key(this, 'key');
      new DeadLetterQueue(this, 'dlq', {
        kmsKey: key,
        alarm: false,
      });
    }
  }
  const app = new App();
  const stack = new DummyStack(app, 'dummy-stack');
  const template = Template.fromStack(stack);

  const queues = template.findResources('AWS::SQS::Queue');
  const alarms = template.findResources('AWS::CloudWatch::Alarm');
  expect(Object.keys(queues)).toHaveLength(1);
  expect(Object.keys(alarms)).toHaveLength(0);
});


test('Construct with bring your own dlq', () => {
  class DummyStack extends Stack {
    constructor(scope: Construct, id: string) {
      super(scope, id);
      const key = new Key(this, 'key');
      const mydlq = new Queue(this, 'queue');
      new DeadLetterQueue(this, 'dlq', {
        dlq: mydlq,
        kmsKey: key,
        alarm: true,
      });
    }
  }
  const app = new App();
  const stack = new DummyStack(app, 'dummy-stack');
  const template = Template.fromStack(stack);

  const queues = template.findResources('AWS::SQS::Queue');
  const alarms = template.findResources('AWS::CloudWatch::Alarm');
  expect(Object.keys(queues)).toHaveLength(1);
  expect(Object.keys(alarms)).toHaveLength(1);
});
