const _ = require('lodash')

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name of the component (use kebab-case-component-name)',
    required: true,
    validate: (text) => {
      if (_.kebabCase(text) !== text) {
        return 'Name must be kebab-case'
      }
      return true
    },
  },
]
