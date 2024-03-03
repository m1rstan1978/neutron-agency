module.exports = {
  apps: [
    {
      name: 'neutron-agency',
      instances: '1',
      script: 'npm',
      args: 'run start',
      env: {
        HOST: "0.0.0.0"
      },
      env_production: {
        NODE_ENV: "production",
        HOST: "0.0.0.0"
      },
    }
  ]
};
