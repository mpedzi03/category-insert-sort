const sortFunc = require('./CategorySortAlgo')
const jsonData = require('./TestData.json')

console.log(sortFunc(JSON.stringify(jsonData)))
