const matter = require('gray-matter');
const lineReader = require('line-reader');
const fs = require('fs');
const management = require('@kentico/kontent-management');


const client = new management.ManagementClient({
  projectId: '353757ed-c4a0-0065-a9d9-aee97ae1d9b0', // id of your Kentico Kontent project
  apiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjlkMGUxMWY5MzU2YTQzNWFhYzQxOTU5MTdmNmVjZDBkIiwNCiAgImlhdCI6ICIxNjI5MzE2NjY3IiwNCiAgImV4cCI6ICIxOTc0OTE2NjY3IiwNCiAgInByb2plY3RfaWQiOiAiMzUzNzU3ZWRjNGEwMDA2NWE5ZDlhZWU5N2FlMWQ5YjAiLA0KICAidmVyIjogIjIuMS4wIiwNCiAgInVpZCI6ICI1ZmQ4ZTliMzViZGRkMjAwNmU3OTcyOWUiLA0KICAiYXVkIjogIm1hbmFnZS5rZW50aWNvY2xvdWQuY29tIg0KfQ.xFWNh6-HrMdP-kTF5cf9GQewOINWt9hHvea1ndgztsI' // Content management API token
});

var MarkdownIt = require('markdown-it'),
  md = new MarkdownIt({
    breaks: true
  });

const aTagConverter = (content) => {
  console.log(typeof content)
  let newContent = content.replace(/<a/g, '<object')
  newContent = newContent.replace(/a>/g, 'object>')
  newContent = newContent.replace(/href/g, 'data-asset-external-id')
  return newContent
}
const imgTagConverter = (content) => {
  let newContent = content.replace(/<img/g, '<figure')
  newContent = newContent.replace(/(<figure src=\"[^\"]*\" )([^>])*(>)/g, '$1$3</figure>')
  newContent = newContent.replace(/src/g, 'data-asset-external-id')
  return newContent
}



lineReader.eachLine('./_scripts/newFile.txt', function (file) {
  // do whatever you want with line...
  fs.readFile(file, 'utf8', function (err, data) {
    let res = matter(data)
    //removes extra spaces
    let body = res.content.replace(/(^[ \t]*\n)/gm, "")
    // remove all folder names and slashes to get only {name}.png
    body = body.replace(/(?<=\().*\/(.*)(jpg|jpeg|gif|png)(?=\))/g, '$1$2')

    // Add a blank space after list, otherwise some items after are added to the last li 
    const lines = body.split(/\n/g)
    lines.forEach((line, i) => {
      if (i > 0 && lines[i - 1].substr(0, 1) === '*' && lines[i].substr(0, 1) !== '*') {
        lines.splice(i, 0, '')
      }
    })
    body = lines.join("\r\n")
    body = md.render(body);
    body = body.replace(/&lt;br&gt;/g, '')
    body = body.replace(/(<img[^>]src=\"([^\"]*)\"[^>]*>)(<\/p>)/g, '$3$1')

    body = imgTagConverter(body);

    fs.writeFile('test.html', body, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })


    // body = aTagConverter(body)

    // console.log(body)
    // const regex = /[\"\(].+\.(jpg|png|gif|jpeg)[\"\)]/g; 

    // if the src is not http then change it 
    //makes sure videos still like right

    // href= data-asset-external-id
    // src = data-asset-external-id
    // ???? remove thead ????
    // remove <p> and </p> within <li></li>

    // client
    //   .addContentItem()
    //   .withData(
    //     {
    //       name: res.data.pagename,
    //       type: { codename: 'knowledge_center_markdown_page' },
    //     }
    //   )
    //   .toPromise()
    //   .then(response => {
    //     console.log(response);






    client.upsertLanguageVariant()
      .byItemId('902f402e-cd8e-43c5-a88e-92feba38d5ac')
      .byLanguageCodename('en-US')

      .withData((builder) => [
        builder.richTextElement({
          element: {
            codename: 'body'
          },
          value: body
        }),






        // builder.textElement({
        //   element: {
        //     codename: 'pagename'
        //   },
        //   value: res.data.pagename
        // }),
        // builder.textElement({
        //   element: {
        //     codename: 'categoryname'
        //   },
        //   value: res.data.categoryName || ''
        // }),
        // builder.textElement({
        //   element: {
        //     codename: 'subcategoryname'
        //   },
        //   value: res.data.subCategoryName || ''
        // }),
        // builder.textElement({
        //   element: {
        //     codename: 'subtitle'
        //   },
        //   value: res.data.subtitle || ''
        // }),

        // builder.multipleChoiceElement({
        //   element: {
        //     codename: 'indicator'
        //   },
        //   value: res.data.indicator === 'both' ? [{ codename: 'messaging' }, { codename: 'chat' }] : { codename: res.data.indicator }
        // }),

        // builder.textElement({
        //   element: {
        //     codename: 'level3'
        //   },
        //   value: res.data.level3 || ''
        // }),
        // builder.urlSlugElement({
        //   element: {
        //     codename: 'permalink',

        //   },
        //   mode: 'custom',
        //   value: res.data.permalink || ''
        // }),
        // builder.multipleChoiceElement({
        //   element: {
        //     codename: 'istutorial'
        //   },
        //   value: [{ codename: `${res.data.isTutorial}` || 'false' }]
        // }),
        // builder.multipleChoiceElement({
        //   element: {
        //     codename: 'isnew'
        //   },
        //   value: [{ codename: `${res.data.isNew}` || 'false' }]
        // }),
        // builder.richTextElement({
        //   element: {
        //     codename: 'redirect_from'
        //   },
        //   value: res.data?.redirect_from.join() || ''
        // })





      ])
      .toPromise()
      .then(res => {
        console.log('uploaded data')
        console.log(res)
      }
      )
      .catch(error => {
        console.log("had an error")
        console.log(error.originalError.response.data)
      });






    // })
    // .catch(error => {
    //   console.log("had an error")
    //   console.log(error.response.data)
    // });

  })
});