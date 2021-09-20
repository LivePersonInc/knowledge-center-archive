const management = require('@kentico/kontent-management');
const lineReader = require('line-reader');
const Promise = require('bluebird');
const fs = require('fs');

const client = new management.ManagementClient({
  projectId: 'b85565b7-451d-0010-ff99-752ce381ad09', // id of your Kentico Kontent project
  apiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjNhMjdlNjU4YzkzYzQxYjk4Y2NkYzM5ZTI1NTUyZTJlIiwNCiAgImlhdCI6ICIxNjMwNTE5ODU4IiwNCiAgImV4cCI6ICIxOTc2MTE5ODU4IiwNCiAgInByb2plY3RfaWQiOiAiYjg1NTY1Yjc0NTFkMDAxMGZmOTk3NTJjZTM4MWFkMDkiLA0KICAidmVyIjogIjIuMS4wIiwNCiAgInVpZCI6ICI1ZmQ4ZTliMzViZGRkMjAwNmU3OTcyOWUiLA0KICAiYXVkIjogIm1hbmFnZS5rZW50aWNvY2xvdWQuY29tIg0KfQ.xfRNkSjJEQxjXoDnJycFE9HQtw18sASJLldjTHyR7EE',
});

const GAP_BETWEEN_UPLOADS = 500;

function upload(file) {
  const type = file.substr(file.length - 3)
  const data = fs.readFileSync(file);
  const parts = file.split('/')
  const filename = parts[parts.length - 1]

  client.uploadBinaryFile()
    .withData({
      binaryData: data,
      contentLength: data.byteLength,
      contentType: `image/${type}`,
      filename: filename,
      external_id: filename
    })
    .toPromise()
    .then((res) => {

      client.upsertAsset()
        .byAssetExternalId(filename)
        .withData(
          {
            file_reference: { id: res.data.id, type: res.data.type },
            title: filename,
            descriptions: [
              {
                language: {
                  codename: 'en-US'
                },
                description: filename
              }
            ]
          }
        )
        .toPromise()
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('Error')
          console.log(error)
        })
      console.log(res.data)
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



