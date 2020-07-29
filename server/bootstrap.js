require('ignore-styles');
require('@babel/register')({
  ignore: [
    /(node_modules)/,
  ],
  presets: [
    '@babel/preset-env',
  ],
});

/**
 * If just a regular server boot
 */
if (process.argv.length < 3) {
  return require('./index');
}

const executionType = process.argv[2];

if ('command' === executionType) {
  // We don't want to run commands in test environment
  // Heroku post-build triggers in test env as well
  if (process.env.NODE_ENV === 'test') {
    return process.exit(0);
  }
  // return require('./commands');
}

console.error('Unknown', process.argv[2]);
process.exit(1);
