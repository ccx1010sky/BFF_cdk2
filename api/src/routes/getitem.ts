/* eslint-disable import/prefer-default-export */
import { Request, Response } from '@scloud/lambda-api/dist/types';
import { DynamoDBClient , GetItemCommand} from '@aws-sdk/client-dynamodb'; // cc
// import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';// cc

// Create a DynamoDB client
const ddbClient = new DynamoDBClient({});


export async function getitem(request: Request): Promise<Response> {
  console.log('getitem', request.query);

    //Define parameters for the GetItemCommand
    const params = {
      TableName: 'cc1Table', // Name of your DynamoDB table
      Key: {Id: {S:'1'}, // Specify the partition key
        date: {S:'01/01'} // Specify the sort key
      }
    };


    // Create a GetItemCommand with the defined parameters
    const command = new GetItemCommand(params);
    try {
    // Send the GetCommand to DynamoDB and await the result
    const { Item } = await ddbClient.send(command);

    // Return response based on whether the item was found or not
    if (Item) {
      return {
        statusCode: 200,
        body: { message: 'Item retrieved successfully', item: Item },
      };
    }
    return {
      statusCode: 404,
      body: { message: 'Item not found' },
    };
  } catch (error) {
    console.error('Error retrieving item:', error);
    return {
      statusCode: 500,
      body: { message: 'Internal server error' },
    };
  }
}
