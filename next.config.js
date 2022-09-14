const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongo_cluster: 'cluster0',
        mongo_db: 'michael-blog-dev',
      },
    };
  }

  return {
    env: {
      mongo_cluster: 'cluster0',
      mongo_db: 'michael-blog',
    },
  };
};
