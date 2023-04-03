import { App, Aspects, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AnyPrincipal, Role } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { PermissionsBoundaryAspect } from '../src/PermissionsBoundaryAspect';

class DummyStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new Role(this, 'test-role', {
      roleName: 'test-role',
      assumedBy: new AnyPrincipal(),
    });
  }
}


test('Constrcution of permission boundary', () => {
  const app = new App();
  const stack = new DummyStack(app, 'dummy-stack');
  Aspects.of(stack).add(new PermissionsBoundaryAspect('/', 'landingzone-workload-permissions-boundary'));

  const template = Template.fromStack(stack);

  const roles = template.findResources('AWS::IAM::Role');
  Object.keys(roles).forEach(roleKey => {
    const role = roles[roleKey];
    const boundaryObject = role.Properties.PermissionsBoundary;
    const str = JSON.stringify(boundaryObject);
    expect(str).toContain('landingzone-workload-permissions-boundary');
  });

});