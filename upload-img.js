const management = require('@kentico/kontent-management');
const lineReader = require('line-reader');
const Promise = require('bluebird');
const fs = require('fs');

const client = new management.ManagementClient({
  projectId: '353757ed-c4a0-0065-a9d9-aee97ae1d9b0', // id of your Kentico Kontent project
  apiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjlkMGUxMWY5MzU2YTQzNWFhYzQxOTU5MTdmNmVjZDBkIiwNCiAgImlhdCI6ICIxNjI5MzE2NjY3IiwNCiAgImV4cCI6ICIxOTc0OTE2NjY3IiwNCiAgInByb2plY3RfaWQiOiAiMzUzNzU3ZWRjNGEwMDA2NWE5ZDlhZWU5N2FlMWQ5YjAiLA0KICAidmVyIjogIjIuMS4wIiwNCiAgInVpZCI6ICI1ZmQ4ZTliMzViZGRkMjAwNmU3OTcyOWUiLA0KICAiYXVkIjogIm1hbmFnZS5rZW50aWNvY2xvdWQuY29tIg0KfQ.xFWNh6-HrMdP-kTF5cf9GQewOINWt9hHvea1ndgztsI' // Content management API token
});

const GAP_BETWEEN_UPLOADS = 500;

function upload(file) {
  const type = file.substr(file.length - 3)
  const data = fs.readFileSync(file);
  const parts = file.split('/')


  client.uploadBinaryFile()
    .withData({
      binaryData: data,
      contentLength: data.byteLength,
      contentType: `image/${type}`,
      filename: parts[parts.length - 1]
    })
    .toPromise()
    .then((res) => {
      console.log("uploaded: ", file)
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
}

const filesArray = []

var eachLine = Promise.promisify(lineReader.eachLine);
eachLine('./_scripts/images.txt', function (line) {
  filesArray.push(line)
}).then(function () {
  for (let index = 0; index < filesArray.length; index++) {
    setTimeout(() => {
      upload(filesArray[index])
    }, index * GAP_BETWEEN_UPLOADS)
  }
}).catch(function (err) {
  console.error(err);
});



