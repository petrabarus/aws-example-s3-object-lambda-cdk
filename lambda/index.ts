import * as AWS from 'aws-sdk';
import axios from 'axios';

export const handler = async (event: any = {}): Promise<any> => {
    const region = process.env.AWS_REGION;
    
    const endpoint = `s3-object-lambda.${region}.amazonaws.com`;
    const s3 = new AWS.S3({
        region: region,
        endpoint: endpoint,
    });
    const objectContent = event['getObjectContext'];
    
    const uri = objectContent['inputS3Url'];
    const s3Response = await axios.get(uri);
    const newBody = s3Response.data.toUpperCase();
    
    const data = await s3.writeGetObjectResponse({
        Body: newBody,
        RequestRoute: objectContent['outputRoute'],
        RequestToken: objectContent['outputToken']
    }).promise();
    
    console.log(data);
    
    const response = {
        statusCode: 200
    };
    return response;
}
