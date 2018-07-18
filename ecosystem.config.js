module.exports = {
  apps: [{
    name: 'web',
    interpreter: 'babel-node',
    script: './src/server/local.js',
    watch: ['./src/server'],
    env: {
      NODE_ENV: 'development'
    }
  }, {
    name: 'api',
    interpreter: 'babel-node',
    interpreter_args: '--require node_modules/dotenv/config',
    script: './src/api/local.js',
    watch: ['./src/api']
  }]
}
