// export const getSwimmer = (SASANumber) => {
//
//     const table = "Swimmers";
//
//     const params = {
//         TableName: table,
//         Key: {
//             "SASANumber": SASANumber
//         }
//     };
//     docClient.get(params, function (err, data) {
//         if (err) {
//             document.getElementById('textarea').innerHTML = "Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2);
//         } else {
//             document.getElementById('textarea').innerHTML = "GetItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
//         }
//     });
// };