import { Aws, Fn } from 'aws-cdk-lib';
import { IVpc, Vpc } from 'aws-cdk-lib/aws-ec2';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

export interface GemeenteNijmegenVpcProps {
  isSandbox?: boolean;
}

export class GemeenteNijmegenVpc extends Construct {

  readonly vpc: IVpc;
  private readonly props?: GemeenteNijmegenVpcProps;

  /**
   * Construct to import a VPC using Gemeente Nijmegen
   * specific landingzone parameters.
   * @param scope
   * @param id
   */
  constructor(scope: Construct, id: string, props?: GemeenteNijmegenVpcProps) {
    super(scope, id);
    this.props = props;
    this.vpc = this.setupVpc();
  }


  private setupVpc() {
    // Somehow our landingzone uses the platform unitex prefix in sandboxes...
    const prefix = this.props?.isSandbox ? 'platformunited' : 'landingzone';
    const param = `/${prefix}/landing-zone/vpc/route-table-public-subnets-id`;
    const publicSubnetRouteTableIds = Array(3).fill(StringParameter.valueForStringParameter(this, param));

    //VPC setup for ECS cluster
    const vpc = Vpc.fromVpcAttributes(this, 'vpc', {
      vpcId: StringParameter.valueForStringParameter(this, '/landingzone/vpc/vpc-id'),
      availabilityZones: [0, 1, 2].map(i => Fn.select(i, Fn.getAzs(Aws.REGION))),
      // Private subnets
      privateSubnetRouteTableIds: [1, 2, 3].map(i => StringParameter.valueForStringParameter(this, `/landingzone/vpc/route-table-private-subnet-${i}-id`)),
      privateSubnetIds: [1, 2, 3].map(i => StringParameter.valueForStringParameter(this, `/landingzone/vpc/private-subnet-${i}-id`)),
      // Public subnets
      publicSubnetRouteTableIds: publicSubnetRouteTableIds,
      publicSubnetIds: [1, 2, 3].map(i => StringParameter.valueForStringParameter(this, `/landingzone/vpc/public-subnet-${i}-id`)),
      // Data subnets
      isolatedSubnetRouteTableIds: [1, 2, 3].map(i => StringParameter.valueForStringParameter(this, `/landingzone/vpc/route-table-data-subnet-${i}-id`)),
      isolatedSubnetIds: [1, 2, 3].map(i => StringParameter.valueForStringParameter(this, `/landingzone/vpc/data-subnet-${i}-id`)),
    });

    return vpc;
  }

}