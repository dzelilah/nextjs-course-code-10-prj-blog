const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {

    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
            mongodb_username: 'miaa11salman47',
            mongodb_password: 'Engleskijezik12345!',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site-dev'
            }
        }
    }
    return {
        env: {
            mongodb_username: 'miaa11salman47',
            mongodb_password: 'Engleskijezik12345!',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site'
            }
    };
}