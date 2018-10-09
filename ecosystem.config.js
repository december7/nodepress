module.exports = {
  apps : [{
    name: 'server',
    script: 'index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '--harmony',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '47.52.148.116',
      ref  : 'origin/master',
      repo : 'https://github.com/december7/surmon.me.git',
      path : '/keven_blog/www',
      'post-deploy' : 'yarn install && pm2 start ecosystem.config.js --env production'
    }
  }
};
