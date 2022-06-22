import {
  aws_iam as iam,
  aws_s3 as s3,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class Bucket extends s3.Bucket {
  constructor(scope: Construct, id: string, props: s3.BucketProps) {

    /**
     * Set block public access (not clear how disallowPublicAccess
     * propertie works, therefore picked this solution)
     */
    props = {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      ...props,
    };

    super(scope, id, props);

    // Enable event bridge notifications if nothing is set
    if (props.eventBridgeEnabled == undefined) {
      this.enableEventBridgeNotification();
    }

    // Only allow secure transport to the s3 buckets
    this.addToResourcePolicy(new iam.PolicyStatement({
      principals: [new iam.AnyPrincipal],
      effect: iam.Effect.DENY,
      actions: ['s3:*'],
      conditions: {
        Bool: {
          'aws:SecureTransport': false,
        },
      },
      resources: [this.bucketArn], // TODO: Fix this due to bug in cdk https://github.com/aws/aws-cdk/issues/6708
    }));

  }

}