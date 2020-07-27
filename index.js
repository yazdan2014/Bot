let Discord = require('discord.js');
let client = new Discord.Client();
const cron = require('cron');


client.once('ready', () => {
    console.log('Ready!');
});

client.on('message' , (message) => {
    if(message.channel.id === '734346827616354355'){
        if(message.attachments.first()){
            if(message.attachments.first().name.endsWith("pdf")){
                
                if(message.member.nickname){
                    message.attachments.first().name = message.member.nickname.toString() + ".pdf" ;
                }else{
                    message.attachments.first().name = message.author.username.toString() + ".pdf" ;
                }
            
                const hesaban = client.channels.cache.get('735059857710907533');
                const physics = client.channels.cache.get('735059090119852062');
                const hendese = client.channels.cache.get('735059500981157929');
                const shimi   = client.channels.cache.get('735058434998665267');
                const zist   =  client.channels.cache.get('735059673883082794');
                const amar    = client.channels.cache.get('735060608579403779');
                const arabi   = client.channels.cache.get('735060723218251836');
                const zaban   = client.channels.cache.get('735060758941139005');
                const dini    = client.channels.cache.get('735060810031693845');
                const adabiat = client.channels.cache.get('735060837173297174');


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
                    

                const filter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'].includes(reaction.emoji.name) && user.id === message.author.id || user.id === "464128895684182016";
                };

                
            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === '1️⃣') {
                        
                        hesaban.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف حسابان شما ثبت شد " + "\n <@" + message.author.id + ">")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })
                    
                    }else if(reaction.emoji.name === '2️⃣'){ 
                        
                        physics.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف فیزیک شما ثبت شد " + "\n <@" + message.author.id + ">")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })
                    
                    }else if(reaction.emoji.name === '3️⃣'){ 

                        hendese.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف هندسه شما ثبت شد " + "\n <@" + message.author.id + ">")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '4️⃣'){ 

                        shimi.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف شیمی شما ثبت شد " + "\n <@" + message.author.id + ">")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '5️⃣'){ 

                        zist.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف زیست شما ثبت شد " + "\n <@" + message.author.id + ">")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '6️⃣'){ 

                        amar.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف آمار و احتمال شما ثبت شد " + "\n <@" + message.author.id + ">") 
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '7️⃣'){ 

                        arabi.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف عربی شما ثبت شد " + "\n <@" + message.author.id + ">")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '8️⃣'){ 

                        zaban.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف زبان شما ثبت شد " + "\n <@" + message.author.id + ">")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '9️⃣'){ 

                        dini.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف دینی شما ثبت شد " + "\n <@" + message.author.id + ">")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '🔟'){ 

                        adabiat.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف ادبیات شما ثبت شد " + "\n <@" + message.author.id + ">")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

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
            if(message.author.id !== '733375548553953373'){
                message.delete();
            }

        }




    }else if (message.channel.id === '733258474569465856'){
            if(message.attachments.first()){
                message.delete();
            }




    } else if(message.channel.id === '735535208090042469'){
            if(message.content === "دست"){
                message.react('✅').then(() => message.react('⭕'));

            const filter = (reaction, user) => {
	            return ['✅', '⭕'].includes(reaction.emoji.name) && user.id === "464128895684182016";
                };
                
                message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();

                        if (reaction.emoji.name === '✅') {
                            message.member.voice.setMute(false);
                            message.channel.send( "<@" + message.author.id + '>' +'** اجازه ی حرف زدن گرفت **');
                            
                        } else if(reaction.emoji.name === '⭕'){ 
                            message.channel.send("<@" + message.author.id + '>' +'** اجازه ی حرف زدن را از دست داد **');
                            message.member.voice.setMute(true);

                        }
                    })
                    
            }
            
    } let scheduledMessage = new cron.CronJob('00 30 10 * * *', () => {
        // This runs every day at 10:30:00, you can do anything you want
        
      });
      
      // When you want to start it, use:
      scheduledMessage.start()
      // You could also make a command to pause and resume the job

    });


    

client.login(process.env.token);

client.on('voiceStateUpdate', async (oldState, newState) => {
    let newUserChannel = newState.channelID
    let oldUserChannel = oldState.channelID
    let vc111 = '733247185331945504' ;
    let vc112 = '';

    

        if(oldUserChannel === null || oldUserChannel === undefined || newUserChannel !== oldUserChannel ){
            //State changes on User joinning a voice channel

            if(newUserChannel === vc111){
                //User Joins the class voice channel
                client.channels.cache.get('735535208090042469').send(newState.member.nickname + " وارد کلاس شد ")
                newState.member.voice.setMute(true)
            }
            
            if(newUserChannel === "735540944635691129"){
                //User Joins gapogoft
                newState.member.voice.setMute(false);
            }
            
               
        }


  })