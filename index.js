let Discord = require('discord.js');
let client = new Discord.Client();
const config = require('./config.json');
const embed = new Discord.MessageEmbed()
let cron = require('node-cron');
let date = new Date()
 
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

cron.schedule('5 12 * * *' , () => {
    let anjamDade = "" 
    client.guilds.cache.get(config.allameGuild).members.cache.forEach(r => {if(r.roles.cache.some(r => r.name != "H")){ anjamNadade += `🔴${r.nickname}\n`}})
    if(anjamDade != ""){
        client.channels.cache.get(config.homeworkStuff.vazitaTakalif).send( ": اسامی کسانی که تکلیف خود را ثبت نکردند "+ `\n ${anjamNadade}`)
    }else{
        client.channels.cache.get(config.homeworkStuff.vazitaTakalif).send("!! همه تکالیف خود را انجام داده بودند")
    }
    client.guilds.cache.get(config.allameGuild).roles.cache.find(r => r.name == "H").delete()
    client.guilds.cache.get(config.allameGuild).roles.create({
        data: {
          name: "H",
          color: '#20ee51',
        }
      })
} , {
    timezone: 'Asia/Tehran'
})

client.on('message' , (message) => {
    if(message.channel.type === "dm"){
        if(message.attachments.first()){
            if(message.attachments.first().name.toLowerCase().endsWith("pdf") ){
                let guild = client.guilds.cache.get('733245860825006171');
                let member = guild.member(message.author);
                let nickname = member ? member.displayName : null;
                if(nickname){
                    message.attachments.first().name = nickname.toString() +".pdf" ;
                }else{
                    message.attachments.first().name = message.author.username.toString() + ".pdf" ;
                }
                
                function sendToChannel (channelID , subject){
                    let HRole = client.guilds.cache.get(config.allameGuild).roles.cache.find(r => r.name = "H")
                    if(!client.guilds.cache.get(config.allameGuild).members.cache.get(message.author.id).roles.cache.some(r => r.name = "H")){
                        client.guilds.cache.get(config.allameGuild).members.cache.get(message.author.id).roles.add(HRole)
                    }
                    client.channels.cache.get(channelID).send(message.attachments.first());
                        message.channel.send(  " تکلیف " + "**"+subject+"**"+ " شما ثبت شد " + "\n " + nickname )
                }
                    async function moz(){ 
                     try{
                        await message.react("1️⃣")
                        await message.react("2️⃣")
                        await message.react("3️⃣")
                        await message.react("4️⃣")
                        await message.react("5️⃣")
                        await message.react("6️⃣")
                        await message.react("7️⃣")
                        await message.react("8️⃣")
                        await message.react("9️⃣")
                        await message.react("🔟")
                    } catch(error){
                        
                    }
                }
                moz();
                const filter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'].includes(reaction.emoji.name) && user.id === message.author.id || user.id === config.userIDs.yazdan 
                };
                
            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
        
                    const reaction = collected.first();
                    message.reactions.cache.forEach( reaction => { if(reaction.users.cache.filter(user => user.id).has(config.userIDs.bot) ){reaction.remove()} })
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
                    
                }).catch(collected => {
                });
            }else{
                message.delete();
                message.channel.send( " فایل شما فرمت pdf ندارد" + "\n <@" + message.author.id + ">")
            }
        }else if(message.content){
            if(message.author.id !== config.userIDs.bot ){
                message.reply("لطفا در این بخش پبام نفرستید")
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
                
                if(message.channel.id === config.onlClassStuff.tc111r){if(M111r > 1){clear(M111r) .then( () => M111r = 0)}}
                if(message.channel.id === config.onlClassStuff.tc112r){if(M112r > 1){clear(M112r) .then( () => M112r = 0)}}
                if(message.channel.id === config.onlClassStuff.tc111t){if(M111t > 1){clear(M111t) .then( () => M111t = 0)}}
                if(message.channel.id === config.onlClassStuff.tc112t){if(M112t > 1){clear(M112t) .then( () => M112t = 0)}}
            }

            if((message.content === "غایب ها" || message.content === "غایب" ) && message.member.roles.cache.has(config.rolesStuff.dotRole) ){
                let Groles = message.guild.roles.cache.get(config.rolesStuff.ghayebRole);
                if(message.channel.id === config.onlClassStuff.tc111r){
                    message.channel.send(Groles.members.map(r => r.nickname))
                }else if(message.channel.id === config.onlClassStuff.tc112r){
                    message.channel.send(Groles.members.map(r => r.nickname))
                }else if(message.channel.id === config.onlClassStuff.tc111t){
                    message.channel.send(Groles.members.map(r => r.nickname))
                }else if(message.channel.id === config.onlClassStuff.tc112t){
                    message.channel.send(Groles.members.map(r => r.nickname))
                }
            }
                            
    }if(message.channel.id === config.onlClassStuff.tc111r){
       if(message.content.includes("خوش آمدید")){
            message.react("✅").then(()=> message.react("❌"))
            const filter = (reaction, user) => {
                return ["✅", "❌"].includes(reaction.emoji.name) && user.id === config.userIDs.yazdan      
                };
                
            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {        
                    const reaction = collected.first();
                    if(reaction.emoji.name === "✅"){
                        message.delete().then(()=>message.channel.send(" کلاس شروع شد و دانش آموزان میتوانند وارد کلاس شوند "))
                        client.channels.cache.get(config.onlClassStuff.tc111r).updateOverwrite( config.rolesStuff.R111 ,{
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                        })
                        client.channels.cache.get(config.onlClassStuff.vc111r).updateOverwrite( config.rolesStuff.R111 ,{
                            VIEW_CHANNEL : true,
                            CONNECT : true ,
                            SPEAK : true ,
                            VIDEO : true ,
                        })
                        
                    }else{
                        message.delete();
                        message.channel.send("با تشکر شروع کلاس لغو شد (شما هنوز میتوانید داخل کلاس بمانید و با ورود دوباره شما، اجازه شروع دوباره کلاس از شما پرسیده خواهد شد)")
                        .then(message => message.delete({timeout : 10000}))
                        
                    }
                    
                })
       }
       if(message.content.includes("دبیر از کلاس خارج شد")){
        message.react("✅")
        const filter = (reaction, user) => {
            return ["✅"].includes(reaction.emoji.name) && user.id === config.userIDs.yazdan 
            };
            
        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {        
                const reaction = collected.first();
                if(reaction.emoji.name === "✅"){
                    message.delete()
                    message.channel.send("کلاس به اتمام رسید").then(msg => msg.delete({timeout : 10000}) )
                    client.channels.cache.get(config.onlClassStuff.tc111r).updateOverwrite( config.rolesStuff.R111 ,{
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false,
                    })
                    client.channels.cache.get(config.onlClassStuff.vc111r).updateOverwrite( config.rolesStuff.R111 ,{
                        VIEW_CHANNEL : false,
                        CONNECT : false ,
                        SPEAK : false ,
                        VIDEO : false ,
                    })

                    client.channels.cache.get(config.onlClassStuff.vc111r).members.forEach(m => m.voice.setChannel(null));
                    
                }
                
            })
       }
    } 
})


client.login(process.env.token);

client.on('voiceStateUpdate', async (oldState, newState) => {
    let newUserChannel = newState.channelID
    let oldUserChannel = oldState.channelID
    
        if(oldUserChannel === null || oldUserChannel === undefined || oldUserChannel === config.gapogoftStuff.gapogoftVC ){
            //State changes on User joinning a voice channel

            function setMuteOnJoin(VC , TC){
                if(newUserChannel === VC && !newState.member.roles.cache.has(config.rolesStuff.dabirRole)){
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

            if(newUserChannel === config.onlClassStuff.vc111r && (oldUserChannel === null || oldUserChannel === undefined ) && newState.member.roles.cache.has(config.rolesStuff.dabirRole)){
                client.channels.cache.get(config.onlClassStuff.tc111r).send(`  ${newState.member.nickname} دبیر متحرم آقای \n  به کلاس خوش آمدید ، درصورت تمایل به شروع کلاس ✅ رنگ را فشار دهید و در غیر این صورت علامت ❌ رافشار دهید`)
            }
            
            if(newUserChannel === config.gapogoftStuff.gapogoftVC){
                //User Joins gapogoft
                newState.member.voice.setMute(false);
            }
            
        }
        if(oldState.selfMute === false && newState.selfMute ===  true && (newUserChannel == config.onlClassStuff.vc111r || newUserChannel === config.onlClassStuff.vc112r || newUserChannel === config.onlClassStuff.vc111t || newUserChannel === config.onlClassStuff.vc112t)){
                newState.member.voice.setMute(true)
        }
        if((newUserChannel === null || newUserChannel === undefined || newUserChannel === config.gapogoftStuff.gapogoftTC ) && !newState.member.roles.cache.has(config.rolesStuff.dabirRole)){
            if(oldUserChannel === config.onlClassStuff.vc111r){client.channels.cache.get(config.onlClassStuff.tc111r).send(newState.member.nickname + " از کلاس خارج شد ")}
            if(oldUserChannel === config.onlClassStuff.vc112r){client.channels.cache.get(config.onlClassStuff.tc112r).send(newState.member.nickname + " از کلاس خارج شد ")}
            if(oldUserChannel === config.onlClassStuff.vc111t){client.channels.cache.get(config.onlClassStuff.tc111t).send(newState.member.nickname + " از کلاس خارج شد ")}
            if(oldUserChannel === config.onlClassStuff.vc112t){client.channels.cache.get(config.onlClassStuff.tc112t).send(newState.member.nickname + " از کلاس خارج شد ")}
            oldState.member.roles.remove(config.rolesStuff.hazerRole)
            oldState.member.roles.add(config.rolesStuff.ghayebRole)
        }
        if((newUserChannel === null || newUserChannel === undefined || newUserChannel === config.gapogoftStuff.gapogoftTC ) && newState.member.roles.cache.has(config.rolesStuff.dabirRole)){
            if(oldUserChannel === config.onlClassStuff.vc111r){client.channels.cache.get(config.onlClassStuff.tc111r).send(`دبیر از کلاس خارج شد ، در صورت اتمام کلاس دبیر گزینه ی ✅ را انتخاب کنید در غیر این صورت لطفا دوباره داخل کلاس وارد شوید`)}
            if(oldUserChannel === config.onlClassStuff.vc112r){client.channels.cache.get(config.onlClassStuff.tc112r).send(`دبیر از کلاس خارج شد ، در صورت اتمام کلاس دبیر گزینه ی ✅ را انتخاب کنید در غیر این صورت لطفا دوباره داخل کلاس وارد شوید`)}
            if(oldUserChannel === config.onlClassStuff.vc111t){client.channels.cache.get(config.onlClassStuff.tc111t).send(`دبیر از کلاس خارج شد ، در صورت اتمام کلاس دبیر گزینه ی ✅ را انتخاب کنید در غیر این صورت لطفا دوباره داخل کلاس وارد شوید`)}
            if(oldUserChannel === config.onlClassStuff.vc112t){client.channels.cache.get(config.onlClassStuff.tc112t).send(`دبیر از کلاس خارج شد ، در صورت اتمام کلاس دبیر گزینه ی ✅ را انتخاب کنید در غیر این صورت لطفا دوباره داخل کلاس وارد شوید`)}
        }

  })