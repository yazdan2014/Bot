let Discord = require('discord.js');
let client = new Discord.Client();



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
                const zamin   = client.channels.cache.get('735059673883082794');
                const amar    = client.channels.cache.get('735060608579403779');
                const arabi   = client.channels.cache.get('735060723218251836');
                const zaban   = client.channels.cache.get('735060758941139005');
                const dini    = client.channels.cache.get('735060810031693845');
                const adabiat = client.channels.cache.get('735060837173297174');


                Promise.all([
                    message.react('1️⃣'),
                    message.react('2️⃣'),
                    message.react('3️⃣'),
                    message.react('4️⃣'),
                    message.react('5️⃣'),
                    message.react('6️⃣'),
                    message.react('7️⃣'),
                    message.react('8️⃣'),
                    message.react('9️⃣'),
                    message.react('🔟'),
                ])
                    .catch(() => console.error(' either emojies couldn not be loaded or they voted before all the emojies were sent'));
            

                const filter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'].includes(reaction.emoji.name) && user.id === message.author.id;
                };

            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === '1️⃣') {
                        
                        hesaban.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف حسابان شما ثبت شد ")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })
                    
                    }else if(reaction.emoji.name === '2️⃣'){ 
                        
                        physics.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف فیزیک شما ثبت شد ")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })
                    
                    }else if(reaction.emoji.name === '3️⃣'){ 

                        hendese.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف هندسه شما ثبت شد ")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '4️⃣'){ 

                        shimi.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف شیمی شما ثبت شد ")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '5️⃣'){ 

                        zamin.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف زمین شناسی شما ثبت شد ")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '6️⃣'){ 

                        amar.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف آمار و احتمال شما ثبت شد ")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '7️⃣'){ 

                        arabi.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف عربی شما ثبت شد ")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '8️⃣'){ 

                        zaban.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف زبان شما ثبت شد ")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '9️⃣'){ 

                        dini.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف دینی شما ثبت شد ")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }else if(reaction.emoji.name === '🔟'){ 

                        adabiat.send(message.attachments.first())
                        .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + "تکلیف ادبیات شما ثبت شد ")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })

                    }
                })
                .catch(collected => {
                    message.reply('بعد از 60 ثانیه ، انتخابی انجام نشد!!').then(() => message.delete({timeout : 10000}));
                });




                    
                
            }else{
                message.delete();
                message.channel.send("You've **NOT** sent a pdf file ! \n Please send a valid PDF file " + " <@" + message.author.id + ">")
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




    } else if(message.channel.id === '735059815193247794'){
            if(message.content === "!per"){
                message.react('👍').then(() => message.react('👎'));

            const filter = (reaction, user) => {
	            return ['👍', '👎'].includes(reaction.emoji.name) && user.id !== "733375548553953373";
                };

                message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();

                        if (reaction.emoji.name === '👍') {
                            message.reply('دانش آموز اجازه ی حرف زدن گرفت ');
                            message.member.roles.add('735205221608718386');
                        } else if(reaction.emoji.name === '👎'){ 
                            message.reply('دانش آموز اجازه ی حرف زدن را از دست داد ');
                            message.member.roles.remove('735205221608718386');
                        }
                    })
                    .catch(collected => {
                        message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                    });
            }
            
    } 

    


    });


    

client.login(process.env.token);

