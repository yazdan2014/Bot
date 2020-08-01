let Discord = require('discord.js');
let client = new Discord.Client();

const hesabanC = '735059857710907533'; let hesaban = 'حسابان'
const physicsC = '735059090119852062'; let physics = "فیزیک"
const hendeseC = '735059500981157929'; let hendese = 'هندسه'
const shimiC   = '735058434998665267'; let shimi = "شیمی"
const zistC    = '735059673883082794'; let zist = "زیست"
const amarC    = '735060608579403779'; let amar = 'آمار و احتمال'
const arabiC   = '735060723218251836'; let arabi = "عربی"
const zabanC   = '735060758941139005'; let zaban = 'زبان'
const diniC    = '735060810031693845'; let dini = "دینی"
const adabiatC = '735060837173297174'; let adabiat = "ادبیات"

const ersalTakalif = '734346827616354355'
const gapogoft = '733258474569465856'
const gapogoftVC = "735540944635691129"

let M111r = 0
let M112r = 0
let M111t = 0
let M112t = 0

const bot = '733375548553953373'
const yazdan ='464128895684182016'

let vc111r = '733247185331945504'; let tc111r = '735535208090042469'
let vc112r = '735099884939771914'; let tc112r = '739179035107786803'
let vc111t = '735103843045736479'; let tc111t = '739219598703853678'
let vc112t = '735107551879757895'; let tc112t = '739218438286868554'

client.once('ready', () => {
    console.log('Ready!');
});

client.on("messageDelete", async (message) => {
    if(message.channel.id === tc111r){M111r--}
    if(message.channel.id === tc112r){M112r--}
    if(message.channel.id === tc111t){M111t--}
    if(message.channel.id === tc112t){M112t--}
})

client.on('message' , (message) => {
    if(message.channel.id === ersalTakalif){
        if(message.attachments.first()){
            if(message.attachments.first().name.toLowerCase().endsWith("pdf") ){
                
                if(message.member.nickname){
                    message.attachments.first().name = message.member.nickname.toString() + ".pdf" ;
                }else{
                    message.attachments.first().name = message.author.username.toString() + ".pdf" ;
                }

                function sendToChannel (channelID , subject){
                    client.channels.cache.get(channelID).send(message.attachments.first())
                    .then( () => {
                            message.delete({timeout : 1000});
                          })
                        message.channel.send( "!!" + " تکلیف " + "**"+subject+"**"+ " شما ثبت شد " + "\n <@" + message.author.id + ">")
                        .then( message => {
                            message.delete({timeout : 10000});
                          })
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
                    
                const filter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'].includes(reaction.emoji.name) && user.id === message.author.id || user.id === yazdan 
                };

                message.delete({timeout:60000})
                
            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {

                    const reaction = collected.first();

                    if (reaction.emoji.name === '1️⃣') { sendToChannel(hesabanC , hesaban) }
                    if (reaction.emoji.name === '2️⃣') { sendToChannel(physicsC , physics) }
                    if (reaction.emoji.name === '3️⃣') { sendToChannel(hendeseC , hendese) }
                    if (reaction.emoji.name === '4️⃣') { sendToChannel(shimiC , shimi)     }
                    if (reaction.emoji.name === '5️⃣') { sendToChannel(zistC , zist)       }
                    if (reaction.emoji.name === '6️⃣') { sendToChannel(amarC, amar)        } 
                    if (reaction.emoji.name === '7️⃣') { sendToChannel(arabiC, arabi)      }
                    if (reaction.emoji.name === '8️⃣') { sendToChannel(zabanC , zaban)     }
                    if (reaction.emoji.name === '9️⃣') { sendToChannel(diniC ,dini)        }
                    if (reaction.emoji.name === '🔟') { sendToChannel(adabiatC , adabiat) }
                    
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
            if(message.author.id !== bot ){
                message.delete();
            }

        }

    }else if (message.channel.id === gapogoft){
            if(message.attachments.first()){
                message.delete();
            }

    } else if(message.channel.id === tc111r || message.channel.id === tc112r || message.channel.id === tc111t || message.channel.id === tc112t ){
            if(message.content === "دست" ){
                message.react('✅').then(() => message.react('❌'));

                const filter = (reaction, user) => {
	            return ['✅', '❌'].includes(reaction.emoji.name) && user.id === yazdan || user.id === "732608571866349659" || user.id === "734853927744438353"
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

            if(message.channel.id === tc111r){M111r++}
            if(message.channel.id === tc112r){M112r++}
            if(message.channel.id === tc111t){M111t++}
            if(message.channel.id === tc112t){M112t++}

             if (message.content === "delete" ){
                async function clear(Num) {
                    message.channel.bulkDelete(Num).then(() => message.delete() )
                }
                if(message.channel.id === tc111r){clear(M111r) .then( () => M111r = 0)}
                if(message.channel.id === tc112r){clear(M112r) .then( () => M112r = 0)}
                if(message.channel.id === tc111t){clear(M111t) .then( () => M111t = 0)}
                if(message.channel.id === tc112t){clear(M112t) .then( () => M112t = 0)} 
            }
                            
        }

})
    

client.login(process.env.token);

client.on('voiceStateUpdate', async (oldState, newState) => {
    let newUserChannel = newState.channelID
    let oldUserChannel = oldState.channelID
    
        if(oldUserChannel === null || oldUserChannel === undefined || newUserChannel !== oldUserChannel ){
            //State changes on User joinning a voice channel

            function setMuteOnJoin(VC , TC){
                if(newUserChannel === VC){
                    //User Joins the class voice channel
                    client.channels.cache.get(TC).send(newState.member.nickname + " وارد کلاس شد ")
                    newState.member.voice.setMute(true)
                   }
                }

            setMuteOnJoin(vc111r , tc111r);
            setMuteOnJoin(vc112r , tc112r);
            setMuteOnJoin(vc111t , tc111t);
            setMuteOnJoin(vc112t , tc112t);
            
            if(newUserChannel === gapogoftVC){
                //User Joins gapogoft
                newState.member.voice.setMute(false);
            }
            
        }
        if(oldState.selfMute === false && newState.selfMute ===  true && (newUserChannel == vc111r || newUserChannel === vc112r || newUserChannel === vc111t || newUserChannel === vc112t)){
                newState.member.voice.setMute(true)
        }

  })