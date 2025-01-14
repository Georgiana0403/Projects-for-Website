const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, ScanCommand } = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {
    console.log('Event:', JSON.stringify(event));
    
    const params = {
        TableName: 'items',
    };

    try {
        console.log('Scanning DynamoDB with params:', params);
        const data = await docClient.send(new ScanCommand(params));
        console.log('DynamoDB response:', data);
        
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data.Items)
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ 
                message: 'Could not fetch items',
                error: error.message 
            })
        };
    }
};