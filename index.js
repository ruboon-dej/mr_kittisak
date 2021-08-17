const ms = require('ms');
const discord = require ("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
client.login(token);
client.once('ready', () => {
    console.log(`Ready to go! \n Log in as ${client.user.tag}`);
})

const Multipleprefix = ["$","/","-","*"];

function DoesPrefixExist(str, Prefix) {
    let FirstChar = str.charAt(0)
    for (let i = 0 ; i < Prefix.length; i++) { 
        if (FirstChar == Prefix[i]) {
            return Prefix[i]
        }
    }
    return false
}

client.on('ready', () =>{
    console.log("The bot is active and ready to go.");
});

client.on('message', message =>{
    const PREFIX = DoesPrefixExist(message.content,Multipleprefix)
    if (PREFIX === "$" || PREFIX === "/" || PREFIX === "-") {
        let args = message.content.substring(PREFIX.length).split(" ");
        switch(args[0]){

            case "poll":
                var Embed = new MessageEmbed()
                .setColor(0x00C3FF)
                .setTitle("อยากเตะใคร")
                .setDescription("เตะบอสสิเชื่อกู");


                if(!args[1]){
                    console.log(args[1])
                    message.channel.send(Embed);
                }

                let msgArgs = args.slice(1).join(" ");

                message.channel.send("**" + "อยากเตะใคร" + "**").then(messageReaction => {
                    messageReaction.react("");
                    messageReaction.react("");
                })

            break;

            case "test":
                message.channel.send("success");

            break;
            
            case "yeet":

                let person1 = message.member;
                var Boon = "734433707104010272";
                var Boss = "574243809060323338";
                var Pooh = "734374392951341058";
                var Ton = "548453461910618124";
                var Pete = "712160091868233788";
                var เต้ย = "592060400011313173";
                var voiceChannelID = message.member.voice.channel;

                var msg3 = args.slice(1).join(" ");

                var Embed = new MessageEmbed()
                .setColor(0x00C3FF)
                .setTitle("อยากเตะใคร")
                .setDescription("พิมพ์ myself หรือ ชื่อคนอื่นเช่น ภู, บอส, ต้น, pooh, boss, ton");

                if (msg3 === "random" || msg3 === "r") {
                    var x = Math.floor(Math.random() * 6);
                    var msg3 = x.toString();
                    console.log(msg3)
                }

                if (msg3 === "myself") {
                    var msg3 = message.member;
                } else if (msg3 === "ต้น" || msg3 === "ton" || msg3 === "Ton" || msg3 === "ต้นไม้" || msg3 === "ต" || msg3 === "Tree" || msg3 === "tree" || msg3 === "0") {
                    var msg3 = Ton;
                } else if (msg3 === "บุณ" || msg3 === "Boon" || msg3 === "boon" || msg3 === "ร" || msg3 === "1") {
                    var msg3 = Boon;
                } else if (msg3 === "บอส" || msg3 === "Boss" || msg3 === "boss" || msg3 === "บ" || msg3 === "2") {
                    var msg3 = Boss;
                } else if (msg3 === "ภู" || msg3 === "Pooh" || msg3 === "pooh" || msg3 === "ภ" || msg3 === "3") {
                    var msg3 = Pooh;
                } else if (msg3 === "เต้ย" || msg3 === "Toei" || msg3 === "toei" || msg3 === "ต" || msg3 === "4" || msg3 === "อ.") {
                    var msg3 = เต้ย;    
                } else if (msg3 === "pete" || msg3 === "Pete" || msg3 === "พีท" || msg3 === "พ" || msg3 === "5"){
                    var msg2 = Pete;
                } else {
                    message.channel.send(Embed);
                }    

                message.channel.send("**" + "You just got yeeted" + "**").then(messageReaction => {
                    console.log(msg3);
                    message.guild.member(msg3).voice.setChannel(null);
                })

            break;

            case "ควย":

                let person = message.member;
                var Boon = "734433707104010272";
                var Boss = "574243809060323338";
                var Pooh = "734374392951341058";
                var Ton = "548453461910618124";
                var Pete = "712160091868233788";
                var เต้ย = "592060400011313173";
                var voiceChannelID = message.member.voice.channel;
                let ทั่วไป = "764134694987890743";
                let ควย = "855835466632658974";
                let para = "874182051484553217";

                var Embed = new MessageEmbed()
                .setColor(0x00C3FF)
                .setTitle("อยากเตะใคร")
                .setDescription("พิมพ์ myself หรือ ชื่อคนอื่นเช่น ภู, บอส, ต้น, pooh, boss, ton");


                if(!args[1]){
                    console.log(args[1])
                    message.channel.send(Embed);
                }
                
                var msg2 = args.slice(1).join(" ");
            
                if (msg2 === "random" || msg2 === "r") {
                    var x = Math.floor(Math.random() * 4);
                    var msg2 = x.toString();
                    console.log(msg2)
                    while (null){
                        break
                    }
                }

                if (msg2 === "myself") {
                    var msg2 = message.member;
                } else if (msg2 === "ต้น" || msg2 === "ton" || msg2 === "Ton" || msg2 === "ต้นไม้" || msg2 === "ต" || msg2 === "Tree" || msg2 === "tree" || msg2 === "0") {
                    var msg2 = Ton;
                } else if (msg2 === "บุณ" || msg2 === "Boon" || msg2 === "boon" || msg2 === "ร" || msg2 === "1") {
                    var msg2 = Boon;
                } else if (msg2 === "บอส" || msg2 === "Boss" || msg2 === "boss" || msg2 === "บ" || msg2 === "2") {
                    var msg2 = Boss;
                } else if (msg2 === "ภู" || msg2 === "Pooh" || msg2 === "pooh" || msg2 === "ภ" || msg2 === "3") {
                    var msg2 = Pooh;
                } else if (msg2 === "pete" || msg2 === "Pete" || msg2 === "พีท" || msg2 === "พ" || msg2 === "5"){
                    var msg2 = Pete;
                } else if (msg2 === "เต้ย" || msg2 === "Toei" || msg2 === "toei" || msg2 === "ต" || msg2 === "4" || msg2 === "อ.") {
                    var msg2 = เต้ย;   
                } else {
                    message.channel.send(Embed);
                }


                message.channel.send("**" + "มึงต้องไปพิจารณาตัวเองละนะโดน " + "quelqu'un" + " เตะ" + "**").then(messageReaction => {
                    console.log(msg2);
                    message.guild.member(msg2).voice.setChannel(para );
                    setTimeout(() => {
                        message.guild.member(msg2).voice.setChannel(voiceChannelID);
                    }, 2000);
                })
            break;

            case "-p":
                message.channel.send("มีช่องใส่เพลงไม่ใช้วะ");
            break

            case "ขอโทษ":
                message.channel.send("อาจารย์ขอโทษนักเรียนค่ะที่ชอบปล่อยช้าและว่านักเรียน ทั้งหมดนี้อาจารย์ผิดเอง อาจารย์ต้องขอโทษด้วยนะคะ");
            break

            case "หวัดดี":
                if (message.member === "734374392951341058"){
                    message.channel.send("หวัดดีไอ้เด็กเฬว");
                } else{
                    message.channel.send("หวัดดีครับ");
                }
                console.log(message.member);
            break

            case "break":
                var Boss = "574243809060323338"
                var Boon = "734433707104010272"
                for (let i = 0 ; i < 5000; i++) { 
                    message.guild.member(Boss).voice.setChannel(null)
                    console.log("Gay")
                }
                
            break

        }
    }
});