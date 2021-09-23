const management = require('@kentico/kontent-management');
const lineReader = require('line-reader');
const Promise = require('bluebird');
const fs = require('fs');

const client = new management.ManagementClient({
  projectId: '4f67b96c-d078-0081-e1c3-7a8478c0bfb9', // id of your Kentico Kontent project
  apiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjBjOWRiYjA0OGRjMTQ0NjRiMmMzYzg3NmU3ZDAxZTFmIiwNCiAgImlhdCI6ICIxNjMyMjQxOTEzIiwNCiAgImV4cCI6ICIxOTc3ODQxOTEzIiwNCiAgInByb2plY3RfaWQiOiAiNGY2N2I5NmNkMDc4MDA4MWUxYzM3YTg0NzhjMGJmYjkiLA0KICAidmVyIjogIjIuMS4wIiwNCiAgInVpZCI6ICI1ZmQ4ZTliMzViZGRkMjAwNmU3OTcyOWUiLA0KICAiYXVkIjogIm1hbmFnZS5rZW50aWNvY2xvdWQuY29tIg0KfQ.RvTolI-S9kUz5ixSfEbsYUJFkbaIDtQSQpa5NX6VxC8',
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



