require('dotenv').config()
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.TOKEN_OSDC
const Http = new XMLHttpRequest();

const regex = 'https://imgs.xkcd.com/comics'
const png = 'png'

bot.on('ready', () => {
    console.log('The bot is online!!!!')
})


//Greeting message for a New user!!!

bot.on('guildMemberAdd',member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if(!channel) return ;
    message.channel.send(`Hello ${message.author} Welcome to OSDC discord Server..Please introduce yourself!!`)
})

bot.on('message',message => {
        if(message.content === '!help')
        {
            message.channel.send
        }
})

bot.on('message',message => {
   
if(message.content === '!xkcd')
{ 
    let comicNo = Math.floor(Math.random() * (2000 - 100 + 1) + 100)
    const url='https://xkcd.com/' + comicNo;
    Http.open("GET", url);
    Http.send();

    Http.onload = (e) => {
    var pos=0
    var i = -1
    let arr1 = []
    while(pos != -1)
    {
        pos = Http.responseText.indexOf(regex,i+1);
        i = pos ;
        arr1.push(pos);
    }
    let arr2 = Http.responseText.indexOf('png',arr1[1] + 1)
    let arr3 = Http.responseText.indexOf('jpg',arr1[1]+ 1);
    let endpoint  = (arr3 - arr1[1] <100) ? arr3 + 3 : arr2 + 3
    message.channel.send(Http.responseText.substring(arr1[1],endpoint))
    }
    
}
})
//General Bot commands

bot.on('message',message => { 
   if(message.content === '!website')
   {    
    const website = new Discord.MessageEmbed().setTitle('Visit our Website').setURL('https://osdc.github.io/')
    message.channel.send(website)
   }
   if(message.content === '!twitter')
   {
        const twitter =  new Discord.MessageEmbed().setTitle('Follow us on Twitter').setURL('https://twitter.com/osdcjiit')
        message.channel.send(twitter)
   }
   if(message.content === '!facebook')
   {
        const facebook = new Discord.MessageEmbed().setTitle('Follow us on Facebook').setURL('https://www.facebook.com/JIIT-OSDC-169171359799320/')
        message.channel.send(facebook)
   }
    if(message.content === '!github')
    {
        const github = new Discord.MessageEmbed().setTitle('Visit you Github Repo ').setURL('https://github.com/osdc')
        message.channel.send(github)
    }
    if(message.content === '!telegram')
    {
        const telegram = new Discord.MessageEmbed().setTitle(' Join our Telegram Channel').setURL('https://t.me/jiitosdc')
        message.channel.send(telegram)
    } 
    if(message.content === '!instagram')
    {
        message.channel.send('https://tenor.com/view/dont-do-that-avengers-black-panther-we-dont-do-that-here-gif-12042935')
    }
        
})


 bot.login(token)