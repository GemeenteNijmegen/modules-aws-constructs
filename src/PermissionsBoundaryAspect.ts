import { CfnResource, IAspect, Stack } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';

/**
 * As a best practice organizations enforce policies which require all custom IAM Roles created to be defined under
 * a specific path and permission boundary. Well, this allows better governance and also prevents unintended privilege escalation.
 * AWS CDK high level constructs and patterns encapsulates the role creation from end users.
 * So it is a laborious and at times impossible to get a handle of newly created roles within a stack.
 * This aspect will scan all roles within the given scope and will attach the right permission boundary and path to them.
 */
export class PermissionsBoundaryAspect implements IAspect {
  /**
   * The role path to attach to newly created roles.
   */
  rolePath?: string;

  /**
   * The permission boundary to attach to newly created roles.
   */
  rolePermissionBoundary: string;

  /**
   * Constructs a new PermissionsBoundaryAspect.
   * @param rolePath - the role path to attach to newly created roles.
   * @param rolePermissionBoundary - the permission boundary to attach to newly created roles.
   */
  public constructor(rolePath?: string, rolePermissionBoundary?: string) {
    this.rolePath = rolePath ?? '/';
    this.rolePermissionBoundary = rolePermissionBoundary ?? 'landingzone-workload-permissions-boundary';
  }

  public visit(node: IConstruct): void {

    if (node instanceof CfnResource && (node.cfnResourceType == 'AWS::IAM::Role' || node.cfnResourceType == 'AWS::IAM::User')) {
      const stack = Stack.of(node);
      this.addPermissionBoundary(node, stack);
    }
  }

  addPermissionBoundary(cfnResource: CfnResource, stack: Stack) {
    // set the path if it is provided
    if (this.rolePath) {
      cfnResource.addPropertyOverride('Path', this.rolePath);
    }
    // set the permission boundary if it is provided
    if (this.rolePermissionBoundary && !this.rolePermissionBoundary.startsWith('arn:aws:iam')) {
      cfnResource.addPropertyOverride('PermissionsBoundary', `arn:aws:iam::${stack.account}:policy/${this.rolePermissionBoundary}`);
    }
  }
}

