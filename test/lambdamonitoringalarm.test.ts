import { Stack, App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { LambdaMonitoringAlarm } from '../src/LambdaMonitoringAlarm';

test('Add defaultalarm to lambda', () => {

  class DummyStack extends Stack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      // Create a mocked Lambda function instance
      const mockLambdaFunction = {
        get logGroup() {
          return {
            arn: 'arn:aws:logs:region:account-id:/aws/loggrouparn',
            logGroupName: 'mockLogGroupName',
          };
        },
      } as any as lambda.Function;
      new LambdaMonitoringAlarm(this, 'MonitoredLambda', {
        lambda: mockLambdaFunction,
      });
    }
  }
  const app = new App();
  const stack = new DummyStack(app, 'dummy-stack');
  const template = Template.fromStack(stack);

  const alarms = template.findResources('AWS::CloudWatch::Alarm');
  const metric = template.findResources('AWS::Logs::MetricFilter');
  expect(Object.keys(alarms)).toHaveLength(1);
  expect(Object.keys(metric)).toHaveLength(1);
  // Find Default Namespace
  const findNameSpace = Object.values(alarms).find(
    (alarm) => alarm.Properties.Namespace === 'MonitoredLambda/MonitoredLambda',
  );
  expect(findNameSpace).toBeTruthy();
  //Find default threshold
  const findThreshold = Object.values(alarms).find(
    (alarm) => alarm.Properties.Threshold === 5,
  );
  expect(findThreshold).toBeTruthy();
  //Find default criticality in alarmName
  const findAlarmName = Object.values(alarms).find(
    (alarm) => alarm.Properties.AlarmName === 'increased-error-rate-MonitoredLambda-low-lvl',
  );
  expect(findAlarmName).toBeTruthy();

});

test('Add alarm with custom properties to lambda', () => {

  class DummyStack extends Stack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      // Create a mocked Lambda function instance
      const mockLambdaFunction = {
        get logGroup() {
          return {
            arn: 'arn:aws:logs:region:account-id:/aws/loggrouparn',
            logGroupName: 'mockLogGroupName',
          };
        },
      } as any as lambda.Function;
      new LambdaMonitoringAlarm(this, 'MonitoredLambdaCustom', {
        lambda: mockLambdaFunction,
        criticality: 'high',
        metricNameSpace: 'CustomNameSpaceProjectName',
        errorRateProps: {
          alarmThreshold: 18,
        },
      });
    }
  }
  const app = new App();
  const stack = new DummyStack(app, 'dummy-stack');
  const template = Template.fromStack(stack);

  const alarms = template.findResources('AWS::CloudWatch::Alarm');
  const metric = template.findResources('AWS::Logs::MetricFilter');
  expect(Object.keys(alarms)).toHaveLength(1);
  expect(Object.keys(metric)).toHaveLength(1);
  // Find custom Namespace based on property
  const findNameSpace = Object.values(alarms).find(
    (alarm) => alarm.Properties.Namespace === 'CustomNameSpaceProjectName/MonitoredLambdaCustom',
  );
  expect(findNameSpace).toBeTruthy();
  //Find custom threshold based on property
  const findThreshold = Object.values(alarms).find(
    (alarm) => alarm.Properties.Threshold === 18,
  );
  expect(findThreshold).toBeTruthy();
  //Find criticality in alarmName based on property
  const findAlarmName = Object.values(alarms).find(
    (alarm) => alarm.Properties.AlarmName === 'increased-error-rate-MonitoredLambdaCustom-high-lvl',
  );
  expect(findAlarmName).toBeTruthy();

});


