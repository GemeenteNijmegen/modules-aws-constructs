# AWS CDK Constructs for Gemeente Nijmegen
This package contains CDK constructs used by Gemeente Nijmegen in different projects.

## PermissionBoundaryAspect
A CDK aspect to add a permission boundary to each role/user defined in IaC.

Use in a CDK stack or CDK pipeline stage:
```
Aspects.of(this).add(new PermissionBoundaryAspect());
```
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
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueue.queue">queue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `queue` <a name="queue" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.queue"></a>

```typescript
public queue(): Queue
```

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

---

##### `node`<sup>Required</sup> <a name="node" id="@gemeentenijmegen/aws-constructs.DeadLetterQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LamdaMonitoringAlarm <a name="LamdaMonitoringAlarm" id="@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm"></a>

#### Initializers <a name="Initializers" id="@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.Initializer"></a>

```typescript
import { LamdaMonitoringAlarm } from '@gemeentenijmegen/aws-constructs'

new LamdaMonitoringAlarm(scope: Construct, id: string, props: LamdbaMonitoringAlarmProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.Initializer.parameter.props">props</a></code> | <code><a href="#@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps">LamdbaMonitoringAlarmProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.Initializer.parameter.props"></a>

- *Type:* <a href="#@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps">LamdbaMonitoringAlarmProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.isConstruct"></a>

```typescript
import { LamdaMonitoringAlarm } from '@gemeentenijmegen/aws-constructs'

LamdaMonitoringAlarm.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gemeentenijmegen/aws-constructs.LamdaMonitoringAlarm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

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
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | Key to encrypt the queue. |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarm">alarm</a></code> | <code>boolean</code> | Setup alarm. |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | Alarm Description. |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.dlq">dlq</a></code> | <code>aws-cdk-lib.aws_sqs.Queue</code> | Bring your own dead letter queue. |
| <code><a href="#@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.retentionPeriod">retentionPeriod</a></code> | <code>aws-cdk-lib.Duration</code> | Retention period. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

Key to encrypt the queue.

---

##### `alarm`<sup>Optional</sup> <a name="alarm" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarm"></a>

```typescript
public readonly alarm: boolean;
```

- *Type:* boolean
- *Default:* true

Setup alarm.

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string
- *Default:* 

Alarm Description.

---

##### `dlq`<sup>Optional</sup> <a name="dlq" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.dlq"></a>

```typescript
public readonly dlq: Queue;
```

- *Type:* aws-cdk-lib.aws_sqs.Queue

Bring your own dead letter queue.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@gemeentenijmegen/aws-constructs.DeadLetterQueueProps.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 14 days

Retention period.

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
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorRateProps.property.alarmThreshold">alarmThreshold</a></code> | <code>number</code> | Alarm Threshold. |
| <code><a href="#@gemeentenijmegen/aws-constructs.ErrorRateProps.property.filterPattern">filterPattern</a></code> | <code>aws-cdk-lib.aws_logs.IFilterPattern</code> | The filterpattern used. |

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

### LamdbaMonitoringAlarmProps <a name="LamdbaMonitoringAlarmProps" id="@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps"></a>

#### Initializer <a name="Initializer" id="@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps.Initializer"></a>

```typescript
import { LamdbaMonitoringAlarmProps } from '@gemeentenijmegen/aws-constructs'

const lamdbaMonitoringAlarmProps: LamdbaMonitoringAlarmProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps.property.lambda">lambda</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | The lambda the metrics are added to. |
| <code><a href="#@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps.property.criticality">criticality</a></code> | <code>string</code> | Criticality level. |
| <code><a href="#@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps.property.errorRateProps">errorRateProps</a></code> | <code><a href="#@gemeentenijmegen/aws-constructs.ErrorRateProps">ErrorRateProps</a></code> | All the optional properties for the errorRateMetric and Alarm. |
| <code><a href="#@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps.property.metricNameSpace">metricNameSpace</a></code> | <code>string</code> | Left empty, the id will be used to set the metricNameSpace base. |

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps.property.lambda"></a>

```typescript
public readonly lambda: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

The lambda the metrics are added to.

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps.property.criticality"></a>

```typescript
public readonly criticality: string;
```

- *Type:* string
- *Default:* 'low'

Criticality level.

---

*Example*

```typescript
'low' | 'medium' | 'high' | 'critical'
```


##### `errorRateProps`<sup>Optional</sup> <a name="errorRateProps" id="@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps.property.errorRateProps"></a>

```typescript
public readonly errorRateProps: ErrorRateProps;
```

- *Type:* <a href="#@gemeentenijmegen/aws-constructs.ErrorRateProps">ErrorRateProps</a>

All the optional properties for the errorRateMetric and Alarm.

---

##### `metricNameSpace`<sup>Optional</sup> <a name="metricNameSpace" id="@gemeentenijmegen/aws-constructs.LamdbaMonitoringAlarmProps.property.metricNameSpace"></a>

```typescript
public readonly metricNameSpace: string;
```

- *Type:* string
- *Default:* id

Left empty, the id will be used to set the metricNameSpace base.

---

## Classes <a name="Classes" id="Classes"></a>

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



