# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadLetterQueue <a name="DeadLetterQueue" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue"></a>

#### Initializers <a name="Initializers" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.Initializer"></a>

```typescript
import { DeadLetterQueue } from '@gemeentenijmegen/aws-constructs'

new DeadLetterQueue(scope: Construct, id: string, props: DeadLetterQueueProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueue.Initializer.parameter.props">props</a></code> | <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps">DeadLetterQueueProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.Initializer.parameter.props"></a>

- *Type:* <a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps">DeadLetterQueueProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueue.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.isConstruct"></a>

```typescript
import { DeadLetterQueue } from '@gemeentenijmegen/aws-constructs'

DeadLetterQueue.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueue.property.dlq">dlq</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dlq`<sup>Required</sup> <a name="dlq" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.property.dlq"></a>

```typescript
public readonly dlq: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

---


### ErrorMonitoringAlarm <a name="ErrorMonitoringAlarm" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm"></a>

#### Initializers <a name="Initializers" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.Initializer"></a>

```typescript
import { ErrorMonitoringAlarm } from '@gemeentenijmegen/aws-constructs'

new ErrorMonitoringAlarm(scope: Construct, id: string, props: ErrorMonitoringAlarmProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.Initializer.parameter.props">props</a></code> | <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps">ErrorMonitoringAlarmProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.Initializer.parameter.props"></a>

- *Type:* <a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps">ErrorMonitoringAlarmProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.isConstruct"></a>

```typescript
import { ErrorMonitoringAlarm } from '@gemeentenijmegen/aws-constructs'

ErrorMonitoringAlarm.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### GemeenteNijmegenVpc <a name="GemeenteNijmegenVpc" id="@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc"></a>

#### Initializers <a name="Initializers" id="@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.Initializer"></a>

```typescript
import { GemeenteNijmegenVpc } from '@gemeentenijmegen/aws-constructs'

new GemeenteNijmegenVpc(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.isConstruct"></a>

```typescript
import { GemeenteNijmegenVpc } from '@gemeentenijmegen/aws-constructs'

GemeenteNijmegenVpc.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@gemeentenijmegen/aws-constructs.GemeenteNijmegenVpc.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


### QueueWithDlq <a name="QueueWithDlq" id="@gemeentenijmegen/aws-constructs.QueueWithDlq"></a>

A reusable SQS queue with an associated dead-letter queue (DLQ).

Required props: `identifier` and `key`. Optional props customize FIFO, retention, maxReceiveCount, IAM grants, and SSM exports.

```ts

  const myQueueWithDlq = new QueueWithDlq(this, 'MyQueue', {
    identifier: 'my-process',
    key: myKey,
    role: myRole,
  });
  const mainQueue = myQueueWithDlq.queue;
  const deadLetterQueue = myQueueWithDlq.dlq;
  mainQueue.grantSendMessages(somelambda)
```

#### Initializers <a name="Initializers" id="@gemeentenijmegen/aws-constructs.QueueWithDlq.Initializer"></a>

```typescript
import { QueueWithDlq } from '@gemeentenijmegen/aws-constructs'

new QueueWithDlq(scope: Construct, id: string, props: QueueWithDlqProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlq.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlq.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlq.Initializer.parameter.props">props</a></code> | <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps">QueueWithDlqProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gemeentenijmegen/aws-constructs.QueueWithDlq.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gemeentenijmegen/aws-constructs.QueueWithDlq.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gemeentenijmegen/aws-constructs.QueueWithDlq.Initializer.parameter.props"></a>

- *Type:* <a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps">QueueWithDlqProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlq.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@gemeentenijmegen/aws-constructs.QueueWithDlq.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlq.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gemeentenijmegen/aws-constructs.QueueWithDlq.isConstruct"></a>

```typescript
import { QueueWithDlq } from '@gemeentenijmegen/aws-constructs'

QueueWithDlq.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gemeentenijmegen/aws-constructs.QueueWithDlq.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlq.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlq.property.dlq">dlq</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | *No description.* |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlq.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@gemeentenijmegen/aws-constructs.QueueWithDlq.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dlq`<sup>Required</sup> <a name="dlq" id="@gemeentenijmegen/aws-constructs.QueueWithDlq.property.dlq"></a>

```typescript
public readonly dlq: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

---

##### `queue`<sup>Required</sup> <a name="queue" id="@gemeentenijmegen/aws-constructs.QueueWithDlq.property.queue"></a>

```typescript
public readonly queue: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

---


## Structs <a name="Structs" id="Structs"></a>

### DeadLetterQueueProps <a name="DeadLetterQueueProps" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps"></a>

#### Initializer <a name="Initializer" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.Initializer"></a>

```typescript
import { DeadLetterQueueProps } from '@gemeentenijmegen/aws-constructs'

const deadLetterQueueProps: DeadLetterQueueProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarm">alarm</a></code> | <code>boolean</code> | Setup alarm. |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarmCriticality">alarmCriticality</a></code> | <code><a href="#@gemeentenijmegen/aws-constructs.Criticality">Criticality</a></code> | Alarm criticality. |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | Alarm Description. |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarmName">alarmName</a></code> | <code>string</code> | Name to descibe the alarm (alarm level suffic is determined by the alarmCriticality property). |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.dlq">dlq</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | Bring your own dead letter queue. |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Key to encrypt the queue. |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.queueOptions">queueOptions</a></code> | <code>aws-cdk-lib.aws_sqs.QueueProps</code> | Queue props. |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.retentionPeriod">retentionPeriod</a></code> | <code>aws-cdk-lib.Duration</code> | Retention period. |

---

##### `alarm`<sup>Optional</sup> <a name="alarm" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarm"></a>

```typescript
public readonly alarm: boolean;
```

- *Type:* boolean
- *Default:* true

Setup alarm.

---

##### `alarmCriticality`<sup>Optional</sup> <a name="alarmCriticality" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarmCriticality"></a>

```typescript
public readonly alarmCriticality: Criticality;
```

- *Type:* <a href="#@gemeentenijmegen/aws-constructs.Criticality">Criticality</a>
- *Default:* critical

Alarm criticality.

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string
- *Default:* 

Alarm Description.

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

Name to descibe the alarm (alarm level suffic is determined by the alarmCriticality property).

---

##### `dlq`<sup>Optional</sup> <a name="dlq" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.dlq"></a>

```typescript
public readonly dlq: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

Bring your own dead letter queue.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Key to encrypt the queue.

---

##### `queueOptions`<sup>Optional</sup> <a name="queueOptions" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.queueOptions"></a>

```typescript
public readonly queueOptions: QueueProps;
```

- *Type:* aws-cdk-lib.aws_sqs.QueueProps

Queue props.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 14 days

Retention period.

---

### ErrorMonitoringAlarmProps <a name="ErrorMonitoringAlarmProps" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps"></a>

#### Initializer <a name="Initializer" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps.Initializer"></a>

```typescript
import { ErrorMonitoringAlarmProps } from '@gemeentenijmegen/aws-constructs'

const errorMonitoringAlarmProps: ErrorMonitoringAlarmProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps.property.criticality">criticality</a></code> | <code>string \| <a href="#@gemeentenijmegen/aws-constructs.Criticality">Criticality</a></code> | Criticality level. |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps.property.errorRateProps">errorRateProps</a></code> | <code><a href="#@gemeentenijmegen/aws-constructs.ErrorRateProps">ErrorRateProps</a></code> | All the optional properties for the errorRateMetric and Alarm. |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps.property.lambda">lambda</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | The lambda the metrics are added to. |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group the metrics are added to. |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps.property.metricNameSpace">metricNameSpace</a></code> | <code>string</code> | Left empty, the id will be used to set the metricNameSpace base. |

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps.property.criticality"></a>

```typescript
public readonly criticality: string | Criticality;
```

- *Type:* string | <a href="#@gemeentenijmegen/aws-constructs.Criticality">Criticality</a>
- *Default:* 'low'

Criticality level.

---

*Example*

```typescript
'low' | 'medium' | 'high' | 'critical'
```


##### `errorRateProps`<sup>Optional</sup> <a name="errorRateProps" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps.property.errorRateProps"></a>

```typescript
public readonly errorRateProps: ErrorRateProps;
```

- *Type:* <a href="#@gemeentenijmegen/aws-constructs.ErrorRateProps">ErrorRateProps</a>

All the optional properties for the errorRateMetric and Alarm.

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps.property.lambda"></a>

```typescript
public readonly lambda: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

The lambda the metrics are added to.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The log group the metrics are added to.

---

##### `metricNameSpace`<sup>Optional</sup> <a name="metricNameSpace" id="@gemeentenijmegen/aws-constructs.ErrorMonitoringAlarmProps.property.metricNameSpace"></a>

```typescript
public readonly metricNameSpace: string;
```

- *Type:* string
- *Default:* id

Left empty, the id will be used to set the metricNameSpace base.

---

### ErrorRateProps <a name="ErrorRateProps" id="@gemeentenijmegen/aws-constructs.ErrorRateProps"></a>

Construct that easily adds basic error monitoring with an alarm to lambda's Only a lambda needed as property, all others are optional.

The plan is to add other basic alarms in the future and add the criticality type when it is added to a library

#### Initializer <a name="Initializer" id="@gemeentenijmegen/aws-constructs.ErrorRateProps.Initializer"></a>

```typescript
import { ErrorRateProps } from '@gemeentenijmegen/aws-constructs'

const errorRateProps: ErrorRateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorRateProps.property.alarmEvaluationPeriod">alarmEvaluationPeriod</a></code> | <code>aws-cdk-lib.Duration</code> | Evaluation period size. |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorRateProps.property.alarmEvaluationPeriods">alarmEvaluationPeriods</a></code> | <code>number</code> | Evaluation periods (how many periods should be evaluated before an alarm is raised). |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorRateProps.property.alarmThreshold">alarmThreshold</a></code> | <code>number</code> | Alarm Threshold. |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorRateProps.property.filterPattern">filterPattern</a></code> | <code>aws-cdk-lib.aws_logs.IFilterPattern</code> | The filterpattern used. |

---

##### `alarmEvaluationPeriod`<sup>Optional</sup> <a name="alarmEvaluationPeriod" id="@gemeentenijmegen/aws-constructs.ErrorRateProps.property.alarmEvaluationPeriod"></a>

```typescript
public readonly alarmEvaluationPeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 5 min

Evaluation period size.

---

##### `alarmEvaluationPeriods`<sup>Optional</sup> <a name="alarmEvaluationPeriods" id="@gemeentenijmegen/aws-constructs.ErrorRateProps.property.alarmEvaluationPeriods"></a>

```typescript
public readonly alarmEvaluationPeriods: number;
```

- *Type:* number
- *Default:* 3

Evaluation periods (how many periods should be evaluated before an alarm is raised).

---

##### `alarmThreshold`<sup>Optional</sup> <a name="alarmThreshold" id="@gemeentenijmegen/aws-constructs.ErrorRateProps.property.alarmThreshold"></a>

```typescript
public readonly alarmThreshold: number;
```

- *Type:* number
- *Default:* 5

Alarm Threshold.

---

##### `filterPattern`<sup>Optional</sup> <a name="filterPattern" id="@gemeentenijmegen/aws-constructs.ErrorRateProps.property.filterPattern"></a>

```typescript
public readonly filterPattern: IFilterPattern;
```

- *Type:* aws-cdk-lib.aws_logs.IFilterPattern
- *Default:* FilterPattern.anyTerm('ERROR')

The filterpattern used.

---

### QueueWithDlqProps <a name="QueueWithDlqProps" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps"></a>

#### Initializer <a name="Initializer" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.Initializer"></a>

```typescript
import { QueueWithDlqProps } from '@gemeentenijmegen/aws-constructs'

const queueWithDlqProps: QueueWithDlqProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.identifier">identifier</a></code> | <code>string</code> | Base identifier for constructs (prefer lowercase, alphanumeric and hyphens) used to name child resources e.g. 'esb-delivery'. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Encryption key for both primary queue and DLQ. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.criticality">criticality</a></code> | <code><a href="#@gemeentenijmegen/aws-constructs.Criticality">Criticality</a></code> | Optional: priority of the DLQ alarm. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.dlq">dlq</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | Optional: existing DLQ queue to reuse; |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.dlqQueueProps">dlqQueueProps</a></code> | <code>aws-cdk-lib.aws_sqs.QueueProps</code> | Customize the dlq queue properties. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.fifo">fifo</a></code> | <code>boolean</code> | Use FIFO queue? |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.grantDlqSend">grantDlqSend</a></code> | <code>boolean</code> | Optional: grant send permissions to the provided role on the DLQ. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.maxReceiveCount">maxReceiveCount</a></code> | <code>number</code> | Optional max receive count for DLQ redrive policy. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.queueProps">queueProps</a></code> | <code>aws-cdk-lib.aws_sqs.QueueProps</code> | Customize the main queue properties. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.retentionPeriod">retentionPeriod</a></code> | <code>aws-cdk-lib.Duration</code> | Optional retention period for the main queue. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | Optional: IAM Role which consumes from the queue; |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.ssmDlqArnParamDescription">ssmDlqArnParamDescription</a></code> | <code>string</code> | Optional: description for the DLQ ARN SSM parameter. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.ssmDlqArnParamName">ssmDlqArnParamName</a></code> | <code>string</code> | Optional: SSM parameter name to store the DLQ ARN. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.ssmQueueArnParamDescription">ssmQueueArnParamDescription</a></code> | <code>string</code> | Optional: description for the main queue ARN SSM parameter. |
| <code><a href="#@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.ssmQueueArnParamName">ssmQueueArnParamName</a></code> | <code>string</code> | Optional: SSM parameter name to store the main queue ARN. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Base identifier for constructs (prefer lowercase, alphanumeric and hyphens) used to name child resources e.g. 'esb-delivery'.

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Encryption key for both primary queue and DLQ.

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.criticality"></a>

```typescript
public readonly criticality: Criticality;
```

- *Type:* <a href="#@gemeentenijmegen/aws-constructs.Criticality">Criticality</a>

Optional: priority of the DLQ alarm.

---

##### `dlq`<sup>Optional</sup> <a name="dlq" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.dlq"></a>

```typescript
public readonly dlq: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

Optional: existing DLQ queue to reuse;

if provided, no new DLQ is created

---

##### `dlqQueueProps`<sup>Optional</sup> <a name="dlqQueueProps" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.dlqQueueProps"></a>

```typescript
public readonly dlqQueueProps: QueueProps;
```

- *Type:* aws-cdk-lib.aws_sqs.QueueProps

Customize the dlq queue properties.

Certain props (fifo, encryption, deadLetterQueue, retentionPeriod) are overridden.

---

##### `fifo`<sup>Optional</sup> <a name="fifo" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.fifo"></a>

```typescript
public readonly fifo: boolean;
```

- *Type:* boolean

Use FIFO queue?

Defaults to true

---

##### `grantDlqSend`<sup>Optional</sup> <a name="grantDlqSend" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.grantDlqSend"></a>

```typescript
public readonly grantDlqSend: boolean;
```

- *Type:* boolean

Optional: grant send permissions to the provided role on the DLQ.

Defaults to false.

---

##### `maxReceiveCount`<sup>Optional</sup> <a name="maxReceiveCount" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.maxReceiveCount"></a>

```typescript
public readonly maxReceiveCount: number;
```

- *Type:* number

Optional max receive count for DLQ redrive policy.

Defaults to 3.

---

##### `queueProps`<sup>Optional</sup> <a name="queueProps" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.queueProps"></a>

```typescript
public readonly queueProps: QueueProps;
```

- *Type:* aws-cdk-lib.aws_sqs.QueueProps

Customize the main queue properties.

Certain props (fifo, encryption, deadLetterQueue, retentionPeriod) are overridden.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration

Optional retention period for the main queue.

Defaults to 14 days.

---

##### `role`<sup>Optional</sup> <a name="role" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.role"></a>

```typescript
public readonly role: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

Optional: IAM Role which consumes from the queue;

if provided, consume grant will be applied
Another option is to get the queue or dlq from the construct and grant resources/roles on them

---

##### `ssmDlqArnParamDescription`<sup>Optional</sup> <a name="ssmDlqArnParamDescription" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.ssmDlqArnParamDescription"></a>

```typescript
public readonly ssmDlqArnParamDescription: string;
```

- *Type:* string

Optional: description for the DLQ ARN SSM parameter.

---

##### `ssmDlqArnParamName`<sup>Optional</sup> <a name="ssmDlqArnParamName" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.ssmDlqArnParamName"></a>

```typescript
public readonly ssmDlqArnParamName: string;
```

- *Type:* string

Optional: SSM parameter name to store the DLQ ARN.

---

##### `ssmQueueArnParamDescription`<sup>Optional</sup> <a name="ssmQueueArnParamDescription" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.ssmQueueArnParamDescription"></a>

```typescript
public readonly ssmQueueArnParamDescription: string;
```

- *Type:* string

Optional: description for the main queue ARN SSM parameter.

---

##### `ssmQueueArnParamName`<sup>Optional</sup> <a name="ssmQueueArnParamName" id="@gemeentenijmegen/aws-constructs.QueueWithDlqProps.property.ssmQueueArnParamName"></a>

```typescript
public readonly ssmQueueArnParamName: string;
```

- *Type:* string

Optional: SSM parameter name to store the main queue ARN.

---

## Classes <a name="Classes" id="Classes"></a>

### Criticality <a name="Criticality" id="@gemeentenijmegen/aws-constructs.Criticality"></a>

#### Initializers <a name="Initializers" id="@gemeentenijmegen/aws-constructs.Criticality.Initializer"></a>

```typescript
import { Criticality } from '@gemeentenijmegen/aws-constructs'

new Criticality(lvl: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.Criticality.Initializer.parameter.lvl">lvl</a></code> | <code>string</code> | *No description.* |

---

##### `lvl`<sup>Required</sup> <a name="lvl" id="@gemeentenijmegen/aws-constructs.Criticality.Initializer.parameter.lvl"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.Criticality.alarmSuffix">alarmSuffix</a></code> | Creates the appropriate suffix for alarms to be picked up by the landingzone monitoring. |
| <code><a href="#@gemeentenijmegen/aws-constructs.Criticality.decrease">decrease</a></code> | Decreases the criticality by one. |
| <code><a href="#@gemeentenijmegen/aws-constructs.Criticality.increase">increase</a></code> | Increases the criticality by one. |
| <code><a href="#@gemeentenijmegen/aws-constructs.Criticality.toString">toString</a></code> | Convert the level to a string. |

---

##### `alarmSuffix` <a name="alarmSuffix" id="@gemeentenijmegen/aws-constructs.Criticality.alarmSuffix"></a>

```typescript
public alarmSuffix(): string
```

Creates the appropriate suffix for alarms to be picked up by the landingzone monitoring.

##### `decrease` <a name="decrease" id="@gemeentenijmegen/aws-constructs.Criticality.decrease"></a>

```typescript
public decrease(): Criticality
```

Decreases the criticality by one.

Can be used as: `criticality.decrease().alarmSuffix()`

##### `increase` <a name="increase" id="@gemeentenijmegen/aws-constructs.Criticality.increase"></a>

```typescript
public increase(): Criticality
```

Increases the criticality by one.

Can be used as: `criticality.increase().alarmSuffix()`

##### `toString` <a name="toString" id="@gemeentenijmegen/aws-constructs.Criticality.toString"></a>

```typescript
public toString(): string
```

Convert the level to a string.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.Criticality.fromString">fromString</a></code> | *No description.* |

---

##### `fromString` <a name="fromString" id="@gemeentenijmegen/aws-constructs.Criticality.fromString"></a>

```typescript
import { Criticality } from '@gemeentenijmegen/aws-constructs'

Criticality.fromString(criticality: string)
```

###### `criticality`<sup>Required</sup> <a name="criticality" id="@gemeentenijmegen/aws-constructs.Criticality.fromString.parameter.criticality"></a>

- *Type:* string

---



### PermissionsBoundaryAspect <a name="PermissionsBoundaryAspect" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

As a best practice organizations enforce policies which require all custom IAM Roles created to be defined under a specific path and permission boundary.

Well, this allows better governance and also prevents unintended privilege escalation.
AWS CDK high level constructs and patterns encapsulates the role creation from end users.
So it is a laborious and at times impossible to get a handle of newly created roles within a stack.
This aspect will scan all roles within the given scope and will attach the right permission boundary and path to them.

#### Initializers <a name="Initializers" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.Initializer"></a>

```typescript
import { PermissionsBoundaryAspect } from '@gemeentenijmegen/aws-constructs'

new PermissionsBoundaryAspect(rolePath?: string, rolePermissionBoundary?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.Initializer.parameter.rolePath">rolePath</a></code> | <code>string</code> | - the role path to attach to newly created roles. |
| <code><a href="#@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.Initializer.parameter.rolePermissionBoundary">rolePermissionBoundary</a></code> | <code>string</code> | - the permission boundary to attach to newly created roles. |

---

##### `rolePath`<sup>Optional</sup> <a name="rolePath" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.Initializer.parameter.rolePath"></a>

- *Type:* string

the role path to attach to newly created roles.

---

##### `rolePermissionBoundary`<sup>Optional</sup> <a name="rolePermissionBoundary" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.Initializer.parameter.rolePermissionBoundary"></a>

- *Type:* string

the permission boundary to attach to newly created roles.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.addPermissionBoundary">addPermissionBoundary</a></code> | *No description.* |
| <code><a href="#@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `addPermissionBoundary` <a name="addPermissionBoundary" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.addPermissionBoundary"></a>

```typescript
public addPermissionBoundary(cfnResource: CfnResource, stack: Stack): void
```

###### `cfnResource`<sup>Required</sup> <a name="cfnResource" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.addPermissionBoundary.parameter.cfnResource"></a>

- *Type:* aws-cdk-lib.CfnResource

---

###### `stack`<sup>Required</sup> <a name="stack" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.addPermissionBoundary.parameter.stack"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `visit` <a name="visit" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.property.rolePermissionBoundary">rolePermissionBoundary</a></code> | <code>string</code> | The permission boundary to attach to newly created roles. |
| <code><a href="#@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.property.rolePath">rolePath</a></code> | <code>string</code> | The role path to attach to newly created roles. |

---

##### `rolePermissionBoundary`<sup>Required</sup> <a name="rolePermissionBoundary" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.property.rolePermissionBoundary"></a>

```typescript
public readonly rolePermissionBoundary: string;
```

- *Type:* string

The permission boundary to attach to newly created roles.

---

##### `rolePath`<sup>Optional</sup> <a name="rolePath" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.property.rolePath"></a>

```typescript
public readonly rolePath: string;
```

- *Type:* string

The role path to attach to newly created roles.

---



