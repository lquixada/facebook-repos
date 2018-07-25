module.exports = {
  apps: [{
    name: 'web',
    interpreter: 'babel-node',
    script: './src/server/dev.js',
    watch: ['./src/server']
  }, {
    name: 'api',
    interpreter: 'babel-node',
    interpreter_args: '--require node_modules/dotenv/config',
    script: './src/api/dev.js',
    watch: ['./src/api']
  }]
}
