import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { OrgS3Bucket } from 'org_s3_bucket';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class Teams3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new OrgS3Bucket(this, 'createdforteam')

  }
}
