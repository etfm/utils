const inquirer = require('./dist')

inquirer.pormpt({
  type: 'input',
  message: '你的职业是',
  name: 'occupation',
  default: '养猪',
})
