const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tUcHRMWDg4TmZ5NUNLUjc5LzV5dGMrTTBrN3lLTTRuc2pKdFlCWEkzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTThBM01BNUxDQ1pSaHBBNEU1KzVKRXZ3VGMwWVIwUWJydFlqQU81NFdtST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUDA4U01RWEpldllGQ1J2WjRYdUVaT2FJR0pwbE1hY1ZRcGFxYkM3UVVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5cGdRZElnUDhLbUE3M3ZZVkEzemlVeGhjeWRZS1EyODg3YmVGZkhkcDNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQZjlQZVpVWmxJc0FnckovY2ZoK3pDQ21lUUFwT2Z2a2tHdHhFR3Q1R0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYvbTgxbEhLM0JnRyt3ZWM2QzFpY2pRcWNJem9iRW5zQ3AzS1NFYThkeUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEloOCs2dCtkczRaZmt2NU9HVnFHdzRQOTJTM1Rra3k3RXFXaEZucjYzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzFsQ1RsdUkxaHZLZzA2YWRKNkxrdjlmT2RlR3pkMFdqYytGT3c5QVdVaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5WOHJTV1ovbkhiWC82TU1hR0ZQTldqd0w4RThYdXpLbW02bG52WW5oUjRINEhaYWRVUUxES3kvZVR1b0RqZEd6allsN2I5ZzB4YlNSU3A3cEZ6a0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiJ4RjgzTlh4OEVjMitMTzE1RjRDS09HRnVoOEFPSU9uQjlHcDI4YzRDaG9FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJQQVFXRUUxTCIsIm1lIjp7ImlkIjoiOTIzMjI5ODU0NzExOjMxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNTkyNzQ5Mjc1ODMzOTc6MzFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJdlV4NW9GRUpLUzg4Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5YmQva2FCcjArSGFuOWRRM29jdms2TDIxQ3dSYy81VkxFMHFYL0JjYWkwPSIsImFjY291bnRTaWduYXR1cmUiOiJweTFUN1Z1clo2K1RYeEplM0FDalRMREVKd21RSFZldGJqMU1lZCt3YnZMMGhkWVFza3dMc3NRakw0bGdGZW9ic3l6ZHRob3VqZVhMcmRYcUlNZUdEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNVFvOVNiMHhXUTR0cEpTcnBwYTlRallDRlBDZXlOZi9MNnh3RXNMbXlFUUd5N3pEQW5WcWlPUlN5ZFp5QXJXaVRkeEJpbVpqRHZLZG5HQngrM3JKQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMjk4NTQ3MTE6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZlczZjVHZ2E5UGgycC9YVU42SEw1T2k5dFFzRVhQK1ZTeE5LbC93WEdvdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxMzk3MDEzLCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW E3-AHMII𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "true", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "E3-AHMII MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mʀ-Sʜᴀʙᴀɴ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "E3-AHMII",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3 AHMII*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923059395959",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
