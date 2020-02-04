module.exports = {
  require: '@babel/register',
  globals: 'document,addEventListener,removeEventListener',
  recursive: true,
  ui: 'bdd',
  reporter: 'nyan',
  timeout: 2000,
};
