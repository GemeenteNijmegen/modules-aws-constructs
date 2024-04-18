import { RemovalPolicy, Duration } from 'aws-cdk-lib';
import { Alarm } from 'aws-cdk-lib/aws-cloudwatch';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { MetricFilter, FilterPattern, IFilterPattern } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';


/**
 * Construct that easily adds basic error monitoring with an alarm to lambda's
 * Only a lambda needed as property, all others are optional.
 *
 * The plan is to add other basic alarms in the future and add the criticality type when it is added to a library
 */
export interface LamdbaMonitoringAlarmProps {
  /**
   * The lambda the metrics are added to
   */
  lambda: lambda.Function;

  /**
 * Criticality level
 * @example 'low' | 'medium' | 'high' | 'critical'
 * @default 'low'
 */
  criticality?: 'low' | 'medium' | 'high' | 'critical';

  /**
 * Left empty, the id will be used to set the metricNameSpace base
 * @default id
 */
  metricNameSpace?: string;
  /**
   *  All the optional properties for the errorRateMetric and Alarm
   */
  errorRateProps?: {
    /**
     * The filterpattern used
     * @default FilterPattern.anyTerm('ERROR')
     */
    filterPattern?: IFilterPattern;
    /**
     * Alarm Threshold
     * @default 5
     */
    alarmThreshold?: number;
  };

}
export class LamdaMonitoringAlarm extends Construct {

  constructor(scope: Construct, id: string, props: LamdbaMonitoringAlarmProps ) {
    super(scope, id);
    this.addErrorRateMetric(id, props);

  }

  /**
   * Monitor the logs generated by this function for a filter pattern, generate metric
   * and alarm on increased error rate.
   *
   * @param filterPattern Pattern to filter by (default: containing ERROR)
   */
  private addErrorRateMetric(id: string, props: LamdbaMonitoringAlarmProps) {
    const metricNameBase = props.metricNameSpace ?? id;
    const errorMetricFilter = new MetricFilter(this, 'MetricFilter', {
      logGroup: props.lambda.logGroup,
      metricNamespace: `${metricNameBase}/${this.node.id}`,
      metricName: 'Errors',
      filterPattern: props.errorRateProps?.filterPattern ?? FilterPattern.anyTerm('ERROR'),
      metricValue: '1',
    });
    errorMetricFilter.applyRemovalPolicy(RemovalPolicy.DESTROY);

    const alarm = new Alarm(this, `${metricNameBase}-${this.node.id}-alarm`, {
      metric: errorMetricFilter.metric({
        statistic: 'sum',
        period: Duration.minutes(5),
      }),
      evaluationPeriods: 3,
      threshold: props.errorRateProps?.alarmThreshold ?? 5,
      alarmName: `increased-error-rate-${this.node.id}-${props.criticality ?? 'low'}-lvl`,
      alarmDescription: `This alarm triggers if the function ${metricNameBase} - ${this.node.id} is logging more than 5 errors over n minutes.`,
    });
    alarm.applyRemovalPolicy(RemovalPolicy.DESTROY);
  }
}