# API Reference <a name="API Reference" id="api-reference"></a>



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

new PermissionsBoundaryAspect(rolePath: string, rolePermissionBoundary: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.Initializer.parameter.rolePath">rolePath</a></code> | <code>string</code> | - the role path to attach to newly created roles. |
| <code><a href="#@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.Initializer.parameter.rolePermissionBoundary">rolePermissionBoundary</a></code> | <code>string</code> | - the permission boundary to attach to newly created roles. |

---

##### `rolePath`<sup>Required</sup> <a name="rolePath" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.Initializer.parameter.rolePath"></a>

- *Type:* string

the role path to attach to newly created roles.

---

##### `rolePermissionBoundary`<sup>Required</sup> <a name="rolePermissionBoundary" id="@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.Initializer.parameter.rolePermissionBoundary"></a>

- *Type:* string

the permission boundary to attach to newly created roles.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gemeentenijmegen/aws-constructs.PermissionsBoundaryAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

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



