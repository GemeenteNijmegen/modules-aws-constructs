import { App, Stack, Duration } from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Key } from 'aws-cdk-lib/aws-kms';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { QueueWithDlq } from '../src/QueueWithDlq';

/**
 * Helper: creates a Stack with QueueWithDlq and an internal KMS Key.
 */
function renderTemplate(
  props: any,
) {
  const app = new App();
  const stack = new Stack(app, 'TestStack');
  const key = new Key(stack, 'TestKey');
  new QueueWithDlq(stack, 'TestQueue', { ...props, kmsKey: key });
  return Template.fromStack(stack);
}

test('should create default fifo queue and dlq with alarm', () => {
  const template = renderTemplate({ identifier: 'uniek-01-herkenbaar' });
  const queues = template.findResources('AWS::SQS::Queue');
  expect(Object.keys(queues)).toHaveLength(2);
  template.hasResourceProperties('AWS::SQS::Queue', { FifoQueue: true });
  const alarms = template.findResources('AWS::CloudWatch::Alarm');
  expect(Object.keys(alarms)).toHaveLength(1);
});

test('should reuse provided dlq without creating new one', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const key = new Key(stack, 'Key');
  const externalDlq = new Queue(stack, 'ExternalDlq', {});
  new QueueWithDlq(stack, 'TestQueue', { identifier: 'uniek-02-herkenbaar', kmsKey: key, dlq: externalDlq });
  const template = Template.fromStack(stack);
  const queues = template.findResources('AWS::SQS::Queue');
  expect(Object.keys(queues)).toHaveLength(2);
});

test('should create non-fifo queue without fifo suffix', () => {
  const template = renderTemplate({ identifier: 'uniek-03-herkenbaar', fifo: false });
  template.hasResourceProperties('AWS::SQS::Queue', { FifoQueue: false });
});

test('should apply custom retention and redrive policy', () => {
  const template = renderTemplate({ identifier: 'uniek-04-herkenbaar', retentionPeriod: Duration.days(1), maxReceiveCount: 5 });
  template.hasResourceProperties('AWS::SQS::Queue', { MessageRetentionPeriod: 24 * 3600 });
  template.hasResourceProperties('AWS::SQS::Queue', { RedrivePolicy: Match.objectLike({ maxReceiveCount: 5 }) });
});

test('should create ssm parameters for queue and dlq arns', () => {
  const template = renderTemplate({
    identifier: 'ssm-uniek-test',
    ssmQueueArnParamName: '/param/testQueueArn',
    ssmDlqArnParamName: '/param/testDlqArn',
  });
  const ssmParams = template.findResources('AWS::SSM::Parameter');
  expect(Object.keys(ssmParams)).toHaveLength(2);
});

test('should apply grants on queue and dlq when role provided', () => {
  const app = new App();
  const stack = new Stack(app, 'GrantStack');
  const key = new Key(stack, 'Key');
  // create role in the same stack so grants can attach
  const role = new Role(stack, 'Role', { assumedBy: new ServicePrincipal('lambda.amazonaws.com') });

  new QueueWithDlq(stack, 'TestQueue', {
    identifier: 'rol-uniek-test',
    kmsKey: key,
    role,
    grantDlqSend: true,
  });

  const template = Template.fromStack(stack);
  const policies = template.findResources('AWS::IAM::Policy');
  expect(Object.keys(policies).length).toBeGreaterThanOrEqual(1);
});


test('should create minimal queue and dlq with only required props', () => {
  const template = renderTemplate({ identifier: 'uniek-default-minimaal-herkenbaar' });
  const queues = template.findResources('AWS::SQS::Queue');
  const alarms = template.findResources('AWS::CloudWatch::Alarm');
  expect(Object.keys(queues)).toHaveLength(2);
  expect(Object.keys(alarms)).toHaveLength(1);
});
