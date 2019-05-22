import * as docClient from "aws-sdk";

export const getSwimmer = (SASANumber) => {

    const table = "Swimmers";

    const params = {
        TableName: table,
        Key: {
            "SASANumber": SASANumber
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
        } else {
            console.log("GetItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
        }
    });
};