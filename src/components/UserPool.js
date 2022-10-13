import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_24fntNvCV",
    ClientId: "4vs4hk0vdln7jum20sfab1gcea"
}
 
export default new CognitoUserPool(poolData);