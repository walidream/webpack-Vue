module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'google',
    'plugin:vue/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },  
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'max-len': 0
  }
};
