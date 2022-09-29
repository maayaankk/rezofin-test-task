import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_AX5HIdxm2",
    ClientId: "35hrid97ep9ntqp15r3im3vj7s"
}

export default new CognitoUserPool(poolData);