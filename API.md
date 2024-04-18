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



## Lambda Monitoring Alarm

AWS Construct meant to quickly add basic default alarms and metrics to lambda's. 
Default error rate alarm added when the construct is used.
Example Usage:

```
     new LamdaMonitoringAlarm(this, 'MonitoredLambdaIdName', {
        lambda: mockLambdaFunction,
        criticality: 'high',
        metricNameSpace: 'CustomNameSpaceProjectName',
        errorRateProps: {
          alarmThreshold: 18,
        },
      });
```
