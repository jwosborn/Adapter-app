module.exports = {
  "parserOptions": {
      "ecmaVersion": 2017,
      "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
	},
	"rules" : {
    "no-unused-vars" : 1,
    "no-undef" : 1
   },
	 "plugins": ["eslint-plugin-react"],
}