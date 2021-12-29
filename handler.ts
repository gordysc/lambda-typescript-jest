import { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Handler } from "aws-lambda";

type ProxyHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;

export const hello: ProxyHandler = async (event, _context) => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event
    },
    null,
    2
  )
});
