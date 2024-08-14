// // import * as AWS from 'aws-sdk';
// const AWS;

// AWS.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION,
// })
// export default AWS;

// export function getDownloadableLink(bucketName: string, key: string): string {
//     const s3 = new AWS.S3();
//     return s3.getSignedUrl('getObject', { Bucket: bucketName, Key: key });
// }

// export const saveCsvFileToAWS = (data, bucketName: string, key: string) => {
//     const s3 = new AWS.S3();
//     const params: AWS.S3.PutObjectRequest = {
//         Bucket: bucketName,
//         Key: key,
//         Body: data,
//         ContentType: 'text/csv',
//     }
//     return s3.upload(params).promise();
// }

// export const savePdfFileToAWS = (data, bucketName: string, key: string) => {
//     const s3 = new AWS.S3();
//     const params: AWS.S3.PutObjectRequest = {
//         Bucket: bucketName,
//         Key: key,
//         Body: data,
//         ContentType: 'application/pdf',
//     }
//     return s3.upload(params).promise()
// }