# AWS CDK Constructs for Gemeente Nijmegen
This package contains CDK constructs used by Gemeente Nijmegen in different projects.

## PermissionBoundaryAspect
A CDK aspect to add a permission boundary to each role/user defined in IaC.

Use in a CDK stack or CDK pipeline stage:
```
Aspects.of(this).add(new PermissionBoundaryAspect());
```