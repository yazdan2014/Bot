let Discord = require('discord.js');
let client = new Discord.Client();
const config = require('./config.json');

let M111r = 0
let M112r = 0
let M111t = 0
let M112t = 0

client.once('ready', () => {
    console.log('Ready!');
});

client.on("messageDelete", async (message) => {
    if(message.channel.id === config.onlClassStuff.tc111r){M111r--}
    if(message.channel.id === config.onlClassStuff.tc112r){M112r--}
    if(message.channel.id === config.onlClassStuff.tc111t){M111t--}
    if(message.channel.id === config.onlClassStuff.tc112t){M112t--}
})

client.on('message' , (message) => {
    if(message.channel.id === config.homeworkStuff.ersalTakalif){
        if(message.attachments.first()){
            if(message.attachments.first().name.toLowerCase().endsWith("pdf") ){

                function sendToChannel (channelID , subject){
                    client.channels.cache.get(channelID).send(message.attachments)
                    .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + " تکلیف " + "**"+subject+"**"+ " شما ثبت شد " + "\n <@" + message.author.id + ">")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })
                }
                
                function changeName (){
                    if(message.member.nickname){
                        message.attachments.first().name = message.member.nickname.toString() + ".pdf" ;
                    }else{
                        message.attachments.first().name = message.author.username.toString() + ".pdf" ;
                    }
                }
                if(message.attachments.first().name.includes("فیزیک")){
                    sendToChannel(config.homeworkStuff.physicsC , config.homeworkStuff.physics)
                }

                message.react('1️⃣')
			.then(() => message.react('2️⃣'))
            .then(() => message.react('3️⃣'))
            .then(() => message.react('4️⃣'))
            .then(() => message.react('5️⃣'))
            .then(() => message.react('6️⃣'))
            .then(() => message.react('7️⃣'))
            .then(() => message.react('8️⃣'))
            .then(() => message.react('9️⃣'))
            .then(() => message.react('🔟'))
            .catch()
                    
                const filter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'].includes(reaction.emoji.name) && user.id === message.author.id || user.id === config.userIDs.yazdan 
                };

                
            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {

                    const reaction = collected.first();

                    if (reaction.emoji.name === '1️⃣') { sendToChannel(config.homeworkStuff.hesabanC , config.homeworkStuff.hesaban) }
                    if (reaction.emoji.name === '2️⃣') { sendToChannel(config.homeworkStuff.physicsC , config.homeworkStuff.physics) }
                    if (reaction.emoji.name === '3️⃣') { sendToChannel(config.homeworkStuff.hendeseC , config.homeworkStuff.hendese) }
                    if (reaction.emoji.name === '4️⃣') { sendToChannel(config.homeworkStuff.shimiC ,   config.homeworkStuff.shimi)   }
                    if (reaction.emoji.name === '5️⃣') { sendToChannel(config.homeworkStuff.zistC  ,   config.homeworkStuff.zist)    }
                    if (reaction.emoji.name === '6️⃣') { sendToChannel(config.homeworkStuff.amarC  ,   config.homeworkStuff.amar)    } 
                    if (reaction.emoji.name === '7️⃣') { sendToChannel(config.homeworkStuff.arabiC ,   config.homeworkStuff.arabi)   }
                    if (reaction.emoji.name === '8️⃣') { sendToChannel(config.homeworkStuff.zabanC ,   config.homeworkStuff.zaban)   }
                    if (reaction.emoji.name === '9️⃣') { sendToChannel(config.homeworkStuff.diniC  ,   config.homeworkStuff.dini)    }
                    if (reaction.emoji.name === '🔟') { sendToChannel(config.homeworkStuff.adabiatC , config.homeworkStuff.adabiat) }
                    
                }).catch( () => {
                    if(message.deletable){
                        message.delete()
                    }
                })

            }else{
                message.delete();
                message.channel.send( " فایل شما فرمت pdf ندارد" + "\n <@" + message.author.id + ">")
               .then( msg => {
                msg.delete({timeout : 10000});
              })
              .catch(console.error);
            }
        }else if(message.content){
            if(message.author.id !== config.userIDs.bot ){
                message.delete();
            }

        }

    } else if (message.channel.id === config.gapogoftStuff.gapogoftTC){
            if(message.attachments.first()){
                message.delete();
            }

    } else if (message.channel.id === config.onlClassStuff.tc111r || message.channel.id === config.onlClassStuff.tc112r || message.channel.id === config.onlClassStuff.tc111t || message.channel.id === config.onlClassStuff.tc112t ){
            if(message.content === "دست" ){
                message.react('✅').then(() => message.react('❌'));

                const filter = (reaction, user) => {
	            return ['✅', '❌'].includes(reaction.emoji.name) && user.id === config.userIDs.yazdan || user.id === "732608571866349659" || user.id === "734853927744438353"
                };
                
                message.delete({timeout:60000})

                message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();

                        if (reaction.emoji.name === '✅') {
                            message.member.voice.setMute(false)
                            message.channel.send( "<@" + message.author.id + '>' +'** اجازه ی حرف زدن گرفت **')
                            .then( message => {
                                message.delete({timeout : 6000})
                            } )
                            
                        } else if(reaction.emoji.name === '❌'){ 
                            message.member.voice.setMute(true);
                            message.channel.send("<@" + message.author.id + '>' +'** اجازه ی حرف زدن را از دست داد **')
                            .then( message => {
                                message.delete({timeout : 6000})
                            } )
                        }
                    })
                    .then(() =>{
                     if(message.deletable){
                        message.delete();
                     }
                    })
                    
                    
            }

            if(message.channel.id === config.onlClassStuff.tc111r){M111r++}
            if(message.channel.id === config.onlClassStuff.tc112r){M112r++}
            if(message.channel.id === config.onlClassStuff.tc111t){M111t++}
            if(message.channel.id === config.onlClassStuff.tc112t){M112t++}

            if (message.content === "delete" && message.member.roles.cache.has(config.rolesStuff.dotRole)){
                 
                async function clear(Num) {
                    message.channel.bulkDelete(Num).then(() => message.delete() )
                }
                
                if(message.channel.id === config.onlClassStuff.tc111r){if(M111r > 1){clear(M111r) .then( () => M111r = 0)} else{message.delete()}}
                if(message.channel.id === config.onlClassStuff.tc112r){if(M112r > 1){clear(M112r) .then( () => M112r = 0)} else{message.delete()}}
                if(message.channel.id === config.onlClassStuff.tc111t){if(M111t > 1){clear(M111t) .then( () => M111t = 0)} else{message.delete()}}
                if(message.channel.id === config.onlClassStuff.tc112t){if(M112t > 1){clear(M112t) .then( () => M112t = 0)} else{message.delete()}}
            }

            if((message.content === "غایب ها" || message.content === "غایب" ) && message.member.roles.cache.has(config.rolesStuff.dotRole) ){
                let roles = message.guild.roles.cache.get(config.rolesStuff.ghayebRole);
                message.channel.send(roles.members.sort())
            }
                            
    } 

})


client.login(process.env.token);

client.on('voiceStateUpdate', async (oldState, newState) => {
    let newUserChannel = newState.channelID
    let oldUserChannel = oldState.channelID
    
        if(oldUserChannel === null || oldUserChannel === undefined || oldUserChannel === config.gapogoftStuff.gapogoftTC ){
            //State changes on User joinning a voice channel

            function setMuteOnJoin(VC , TC){
                if(newUserChannel === VC){
                    //User Joins the class voice channel
                    client.channels.cache.get(TC).send(newState.member.nickname + " وارد کلاس شد ")
                    newState.member.voice.setMute(true)
                    newState.member.roles.add(config.rolesStuff.hazerRole)
                    newState.member.roles.remove(config.rolesStuff.ghayebRole)
                   }
                }

            setMuteOnJoin(config.onlClassStuff.vc111r , config.onlClassStuff.tc111r);
            setMuteOnJoin(config.onlClassStuff.vc112r , config.onlClassStuff.tc112r);
            setMuteOnJoin(config.onlClassStuff.vc111t , config.onlClassStuff.tc111t);
            setMuteOnJoin(config.onlClassStuff.vc112t , config.onlClassStuff.tc112t);
            
            if(newUserChannel === config.gapogoftStuff.gapogoftTC){
                //User Joins gapogoft
                newState.member.voice.setMute(false);
                
            }
            
        }
        if(oldState.selfMute === false && newState.selfMute ===  true && (newUserChannel == config.onlClassStuff.vc111r || newUserChannel === config.onlClassStuff.vc112r || newUserChannel === config.onlClassStuff.vc111t || newUserChannel === config.onlClassStuff.vc112t)){
                newState.member.voice.setMute(true)
        }
        if((newUserChannel === null || newUserChannel === undefined || newUserChannel === config.gapogoftStuff.gapogoftTC)){
            if(oldUserChannel === config.onlClassStuff.vc111r){client.channels.cache.get(config.onlClassStuff.tc111r).send(newState.member.nickname + " از کلاس خارج شد ")}
            if(oldUserChannel === config.onlClassStuff.vc112r){client.channels.cache.get(config.onlClassStuff.tc112r).send(newState.member.nickname + " از کلاس خارج شد ")}
            if(oldUserChannel === config.onlClassStuff.vc111t){client.channels.cache.get(config.onlClassStuff.tc111t).send(newState.member.nickname + " از کلاس خارج شد ")}
            if(oldUserChannel === config.onlClassStuff.vc112t){client.channels.cache.get(config.onlClassStuff.tc112t).send(newState.member.nickname + " از کلاس خارج شد ")}
            oldState.member.roles.remove(config.rolesStuff.hazerRole)
            oldState.member.roles.add(config.rolesStuff.ghayebRole)
        }

  })