import {
  App,
  Stack,
  aws_s3 as s3,
  aws_iam as iam,
} from 'aws-cdk-lib';
import { Bucket } from '../src/bucket';

/**
 * Tests if the custom bucket with nijmegen specific defaults
 * has the same cloudformation template as the default s3 bucket
 */
test('bucket differences', () => {
  const app = new App();
  const stackA = new Stack(app, 'test-stack-a');
  const stackB = new Stack(app, 'test-stack-b');

  // Nijmegen specific bucket
  new Bucket(stackA, 'bucket', {});

  /**
     * AWS S3 Bucket, with desired default properties and configuration:
     *  - event bridge enabled
     *  - all public access blocked
     *  - only secure transport policy added
     */
  const awsBucket = new s3.Bucket(stackB, 'bucket', {
    eventBridgeEnabled: true,
    blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
  });
  awsBucket.addToResourcePolicy(new iam.PolicyStatement({
    principals: [new iam.AnyPrincipal],
    effect: iam.Effect.DENY,
    actions: ['s3:*'],
    conditions: {
      Bool: {
        'aws:SecureTransport': false,
      },
    },
    resources: [awsBucket.bucketArn], // TODO: Fix this due to bug in cdk https://github.com/aws/aws-cdk/issues/6708
  }));

  const templates = app.synth();
  const tempA = templates.getStackArtifact(stackA.artifactId).template;
  const tempB = templates.getStackArtifact(stackB.artifactId).template;

  expect(tempA).toMatchObject(tempB);

});