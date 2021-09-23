const matter = require('gray-matter');
const lineReader = require('line-reader');
const fs = require('fs');
const management = require('@kentico/kontent-management');
const Promise = require('bluebird');


const GAP_BETWEEN_UPLOADS = 1000;
const client = new management.ManagementClient({
  projectId: '4f67b96c-d078-0081-e1c3-7a8478c0bfb9', // id of your Kentico Kontent project
  apiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjBjOWRiYjA0OGRjMTQ0NjRiMmMzYzg3NmU3ZDAxZTFmIiwNCiAgImlhdCI6ICIxNjMyMjQxOTEzIiwNCiAgImV4cCI6ICIxOTc3ODQxOTEzIiwNCiAgInByb2plY3RfaWQiOiAiNGY2N2I5NmNkMDc4MDA4MWUxYzM3YTg0NzhjMGJmYjkiLA0KICAidmVyIjogIjIuMS4wIiwNCiAgInVpZCI6ICI1ZmQ4ZTliMzViZGRkMjAwNmU3OTcyOWUiLA0KICAiYXVkIjogIm1hbmFnZS5rZW50aWNvY2xvdWQuY29tIg0KfQ.RvTolI-S9kUz5ixSfEbsYUJFkbaIDtQSQpa5NX6VxC8' // Content management API token
});

// ** this is an exampe for using overrides for node module called marked
// // Override function
// const renderer = {
//   listitem(text) {
//     return `<li> ${text}</li>
//   `
//   },
//   paragraph(text) {
//     return text
//   }
// };



// const marked = require('marked');
// marked.use({
//   breaks: true,
//   renderer
// })

var MarkdownIt = require('markdown-it'),
md = new MarkdownIt({
  breaks: true,
});

const aTagConverter = (content) => {
  let newContent = content.replace(/<a/g, '<object')
  newContent = newContent.replace(/a>/g, 'object>')
  newContent = newContent.replace(/href/g, 'data-external-id')
  return newContent
}
const imgTagConverter = (content) => {
  let newContent = content.replace(/<img/g, '<figure')
  newContent = newContent.replace(/(<figure src=\"[^\"]*\" )([^>])*(>)/g, '$1$3</figure>')
  newContent = newContent.replace(/src/g, 'data-asset-external-id')
  return newContent
}
const replace = (match, p1, p2, p3, offset, string) => {
  return `
${p1}${encodeURI(p2)}${p3}
` 
}
const filesArray = []
let errors = [];
var eachLine = Promise.promisify(lineReader.eachLine);
//change to new file on prod build
eachLine('./_scripts/failingFiles.txt', function (line) {
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


const upload =(file)=>{
  console.log(file);
  fs.readFile(`${file}`, 'utf8', function (err, data) {
    let res = matter(data)
    //removes extra spaces
    let body = res.content.replace(/(^[ \t]*\n)/gm, "")

    // remove all folder names and slashes to get only {name}.png
    body = body.replace(/(?<=\().*\/(.*)(jpg|jpeg|gif|png)(?=\))/g, '$1$2')

    // Add a blank space after list, otherwise some items after are added to the last li 
    const lines = body.split(/\n/g)
    let length =lines.length
    for(let i=0; length>i;i++){
      if (i > 0 && lines[i - 1].substr(0, 1) === '*' && lines[i].substr(0, 1) !== '*') {
        lines.splice(i, 0, '')
        length = length+1;
      }
      // replacing spaces in images and links with %20 so they will actuall render
      if (lines[i].includes('](')) {
        lines[i] = lines[i].replace(/(!\[\]\()(.+?)(\))/g, replace)
      }
    };


    body = lines.join("\r\n")


    fs.writeFile('testmd.html', body, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })

    //** this is when we translate from md to html **

    body = md.render(body);

    //removing breaks
    body = body.replace(/&lt;br&gt;/g, '')

    //moving images out of p and li tags so the api will accept it
    body = body.replace(/(<img[^>]src=\"([^\"]*)\"[^>]*>)(<\/p>)/g, '$3$1')
    body = body.replace(/(<img[^>]src=\"([^\"]*)\"[^>]*>)(<\/li>)/g, '$3$1')

    // th is not allowed in table
    body = body.replace(/<th>/g, '<td>')
    body = body.replace(/<\/th>/g, '</td>')
    
    //removing thead as they are not allowed
    body = body.replace(/<tbody>/g, '')
    body = body.replace(/<\/thead>/g, '')
    body = body.replace(/<thead>/g,'<tbody>')

    // fix for notice and imprortant
    body = body.replace(/{: \.important}/g, '<strong>Important:</strong>')
    body = body.replace(/{: \.notice}/g, '<strong>Note:</strong>')
    
    body = body = imgTagConverter(body);
    // removing p tags so there isn;t issues with uploading
    
    body = body.replace(/(li>\n)(<p>)(.*)(<\/p>)/g, '$1$3')
    body = body.replace(/(<p>)(.*)(<\/p>)(\n<\/li)/g, '$2$4')
    
 
    
    fs.writeFile('test.html', body, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })
    // body = aTagConverter(body)
    // const regex = /[\"\(].+\.(jpg|png|gif|jpeg)[\"\)]/g; 
    // client
    //   .addContentItem()
    //   .withData(
    //     {
    //       name: res.data.pagename,
    //       type: { codename: 'knowledge_center_markdown_page' },
    //       external_id: res.data.permalink
    //     }
    //   )
    //    .toPromise()
    //    .then(response => {

    //   //byItemExternalId(res.data.permalink)
    //   //byItemId(response.data.id)
      
      //upsert start
    client.upsertLanguageVariant()
          .byItemExternalId(res.data.permalink)
          .byLanguageCodename('en-US')
          .withData((builder) => [
            builder.textElement({
              element: {
                codename: 'pagename'
              },
              value: res.data.pagename
            }),
            builder.textElement({
              element: {
                codename: 'categoryname'
              },
              value: res.data.categoryName || ''
            }),
            builder.textElement({
              element: {
                codename: 'subcategoryname'
              },
              value: res.data.subCategoryName ? res.data.subCategoryName.toString() : ''
            }),
            builder.textElement({
              element: {
                codename: 'subtitle'
              },
              value: res.data.subtitle || ''
            }),

            builder.taxonomyElement({
              element: {
                codename: 'channels_supported'
              },
              value: res.data.indicator === 'both' ? [{ codename: 'messaging' }, { codename: 'chat_3566c51' }] : [{ codename: (res.data.indicator === 'chat') ? 'chat_3566c51' :res.data.indicator }]
            }),

            builder.textElement({
              element: {
                codename: 'level3'
              },
              value: res.data.level3 || ''
            }),
            builder.urlSlugElement({
              element: {
                codename: 'permalink',

              },
              mode: 'custom',
              value: res.data.permalink || ''
            }),
            builder.multipleChoiceElement({
              element: {
                codename: 'istutorial'
              },
              value: (res.data.isTutorial) ? [{ codename: `${res.data.isTutorial}` }] : [{ codename: 'false' }]
            }),
            builder.multipleChoiceElement({
              element: {
                codename: 'isnew'
              },
              value: (res.data.isnew) ? [{ codename: `${res.data.isNew}` }] : [{ codename: 'false'}]
            }),
            builder.richTextElement({
              element: {
                codename: 'redirect_from'
              },
              value: res.data.redirect_from ? res.data.redirect_from.join() : ''
            })
          ])
          .toPromise()
          .catch(error => {
            console.log("had an error")
            console.log(error.originalError.response.data)
            errors.push(file)
          });
    //   //upsert end
    //   })
     
    
    // .catch(error => {
    //     console.log("had an error")
    //     console.log(error.originalError.response.data)
    //     errors.push(file)
    //   });

    })
  console.log(errors)
  }
