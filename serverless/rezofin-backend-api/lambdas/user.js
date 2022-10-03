const db = require("../dynamodbConfig/db");
const {
    GetItemCommand,
    PutItemCommand,
    DeleteItemCommand,
    ScanCommand,
    UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");

const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

const getUser = async (event) => {
  const response = { statusCode: 200 };
  try {
    const params = {
      TableName: process.env.DYNAMODB_USER_TABLE
    };
    const { Items } = await db.send(new ScanCommand(params));
    console.log({ Items });
    response.body = JSON.stringify({
      message: "Successfully retrived user data",
      data: { dataReceived: Items.map((item) => unmarshall(item)) }
    })
  }
  catch (e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "Failed to get user data.",
      errorMsg: e.message,
      errorStack: e.stack,
    });
  }

  response.headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  };

  return response;
};

const createUser = async (event) => {
  const response = { statusCode: 200 };

  try {
    const body = JSON.parse(event.body);
    const params = {
      TableName: process.env.DYNAMODB_USER_TABLE,
      Item: marshall(body || {}),
    };
    const createResult = await db.send(new PutItemCommand(params));
    response.body = JSON.stringify({
      message: "Successfully created user data.",
      createResult
    });
  } catch (e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "Failed to create user data.",
      errorMsg: e.message,
      errorStack: e.stack,
    });
  }

  return response;
};

const getUserById = async (event) => {
  const response = { statusCode: 200 };
  try {
    const params = {
      TableName: process.env.DYNAMODB_USER_TABLE,
      Key: marshall({ ID: event.pathParameters.ID })
    };
    const { Item } = await db.send(new GetItemCommand(params));
    console.log({ Item });
    response.body = JSON.stringify({
      message: "Successfully retrieved user data by ID",
      data:  { Item } ? unmarshall(Item) : {}
    });
  } catch (e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "Failed to get user data by ID",
      errorMsg: e.message,
      errorStack: e.stack,
    });
  }

  response.headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true, 
  };

  return response;
};

const updateUserById = async (event) => {
  const response = { statusCode: 200 };

  try {
    const body = JSON.parse(event.body);
    const objKeys = Object.keys(body);
    const params = {
      TableName: process.env.DYNAMODB_USER_TABLE,
      Key: marshall({ ID: event.pathParameters.ID }),
      UpdateExpression: `SET ${objKeys.map((_, index) => `#key${index} = :value${index}`).join(", ")}`,
      ExpressionAttributeNames: objKeys.reduce((acc, key, index) => ({
        ...acc,
        [`#key${index}`]: key,
      }), {}),
      ExpressionAttributeValues: marshall(objKeys.reduce((acc, key, index) => ({
        ...acc,
        [`:value${index}`]: body[key],
      }), {})),
    };
    const updateResult = await db.send(new UpdateItemCommand(params));

    response.body = JSON.stringify({
      message: "Successfully updated user data.",
      updateResult,
    });
  } catch (e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "Failed to update user data.",
      errorMsg: e.message,
      errorStack: e.stack,
    });
  }

  return response;
};

const deleteUserById = async (event) => {
  const response = { statusCode: 200 };

  try {
    const params = {
      TableName: process.env.DYNAMODB_USER_TABLE,
      Key: marshall({ ID: event.pathParameters.ID}),
    };
    const deleteResult = await db.send(new DeleteItemCommand(params));

    response.body = JSON.stringify({
      message: "Successfully deleted user data.",
      deleteResult,
    });
  } catch (e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "Failed to delete user data .",
      errorMsg: e.message,
      errorStack: e.stack,
    });
  }

  response.headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  };

  return response;
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
}
