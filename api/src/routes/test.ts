/* eslint-disable import/prefer-default-export */
import { Request, Response } from '@scloud/lambda-api/dist/types';
// import { DynamoDBClient } from '@aws-sdk/client-dynamodb'; // cc
// import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';// cc

export async function test(request: Request): Promise<Response> {
  console.log('test', request.query);
  return {
    statusCode: 200,
    body: { message: 'test function from STA_4 Chenxi Chen' },
  };
}
