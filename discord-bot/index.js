let Discord = require('discord.js');
let client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
    
});

client.on('message' , (message) => {
    if(message.channel.id === '734346827616354355'){
        if(message.attachments.first()){
            if(message.attachments.first().name.endsWith("pdf")){
                
                    const channel1 = client.channels.cache.get('734366645488713748');
                    if(message.member.nickname){
                        message.attachments.first().name = message.member.nickname.toString() + ".pdf" ;
                    }else{
                        message.attachments.first().name = message.author.username.toString() + ".pdf" ;
                    }
                    channel1.send( message.attachments.first())
                    .then(msg => {
                    message.delete({timeout : 2000});
                    }).catch(console.error);   
                    message.channel.send("Thanks !!" + " <@" + message.author.id + ">" + " \n Your homework is sent")
                    .then( msg => {
                        msg.delete({timeout : 13000});
                    }).catch(console.error);
                
            }else{
                message.delete();
                message.channel.send("You've **NOT** sent a pdf file ! \n Please send a valid PDF file " + " <@" + message.author.id + ">")
               .then( msg => {
                msg.delete({timeout : 15000});
              })
              .catch(console.error);
            }
        }
    }      
});


client.login("NzMzMzc1NTQ4NTUzOTUzMzcz.XxF1ZQ.sO4iXhrJs1d6pOnNmRwHBR2y2X8");