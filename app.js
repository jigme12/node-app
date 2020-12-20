const EventEmitter= require('events');

const log=require('./logger');
const logger =new Logger();

//Register a Listener
logger .on('messageLogged', (arg)=>{
    console.log('Listener called', arg);
});
logger.log('message'); 