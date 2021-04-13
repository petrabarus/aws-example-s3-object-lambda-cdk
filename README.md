# aws-example-s3-object-lambda-cdk
CDK example of using AWS S3 Object Lambda

This repo demonstrate how to use AWS S3 Object Lambda using CDK. 
This utilizes the AWS CDK ![S3 Object Lambda CfnAccessPoint construct](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-s3objectlambda.CfnAccessPoint.html).

## Requirements

- AWS CLI
- AWS CDK

## How to use

- To build the lambda, execute the command below in the `lambda` directory.

```bash
npm install
npm run build
```

- To deploy the resource, execute the command below in the `cdk` directory.

```bash
npm install
cdk deploy
```

This will display the ARN for S3 Object Lambda Access Point.

- To test the S3 Object Lambda Access point.

```bash
aws s3api get-object \
    --bucket arn:aws:s3-object-lambda:ap-southeast-1:12345678:accesspoint/accesspointname \
    --key data.txt data.txt
```