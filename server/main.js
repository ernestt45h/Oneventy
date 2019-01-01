const cloudServer = require('./bin/cloud')

cloudServer.listen(80, ()=>{
    console.log('api running successfully');
})