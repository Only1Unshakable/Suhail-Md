const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349051625846";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_07_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI5LFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDY2LFxuICAgICAgICA4NixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICAzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDY4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MixcbiAgICAgICAgODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyLFxuICAgICAgICA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTksXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDMzLFxuICAgICAgICAzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDQxLFxuICAgICAgICA1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDU0LFxuICAgICAgICA2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia0RlRnlWY012MVhKU21URHQ0NThuNi9ScGpWbHBCNWhkVDZVTDE0ZzRaTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDUxNjI1ODQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NEZCOTdFMkVBQ0EwNThGQTdFRDE4Mjk3RENCMDdFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwNzY4NjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTENvTFVRMzFTYWFOREI2YzQzR1F0UVwiLFxuICBcInBob25lSWRcIjogXCIxODc0OWIzZi0yZDY1LTRjNzgtYTg0OC00NDc3MTY2ZDlhZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgMjAsXG4gICAgICA1OCxcbiAgICAgIDE1MSxcbiAgICAgIDEyMCxcbiAgICAgIDE3MyxcbiAgICAgIDIzOSxcbiAgICAgIDEyMyxcbiAgICAgIDIwOCxcbiAgICAgIDI0MCxcbiAgICAgIDE5NCxcbiAgICAgIDQ4LFxuICAgICAgMTQ2LFxuICAgICAgNzYsXG4gICAgICAyMTMsXG4gICAgICA1OCxcbiAgICAgIDkyLFxuICAgICAgMCxcbiAgICAgIDEyMCxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDk2LFxuICAgICAgMTg1LFxuICAgICAgNzgsXG4gICAgICAxOTQsXG4gICAgICAyMjAsXG4gICAgICA3LFxuICAgICAgMSxcbiAgICAgIDE5MixcbiAgICAgIDE2OSxcbiAgICAgIDU3LFxuICAgICAgMTEzLFxuICAgICAgMTQsXG4gICAgICA2NyxcbiAgICAgIDU0LFxuICAgICAgMjAzLFxuICAgICAgNzgsXG4gICAgICA1NCxcbiAgICAgIDI1MCxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWUzNCWFlGSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1MTYyNTg0Njo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk51dHJpIEh1YlwiLFxuICAgIFwibGlkXCI6IFwiMjI3OTgxNDI3NTExMzU1OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vSHlOMEVFTEtVbWJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnlCbzJ4cEdiYk8rSHZKdWtFOVdFa0ljaSs5SVE1NmxFZTBZUG5lNzlnOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEd2xTMnpWdWlEbWY2TE5kd0IzZklPYWE5dVhKRHFKMXpHWVhjcjNCRVFtRElXcDVhbnN0RnZ3bXR6NlZlNE5oSVZHNG5VR0RiODdidk5FM1RWdXJDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJydnFyTFBTNDU2WjdiZS9SVDhvNjl6ci9GbExwUG81MXZKd1ZLQWc3eWFseE9kV2JsUlg1RXVDVmRKanllQXo3YnFJWlRPVERURkNFdlR1emNjWEdnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUxNjI1ODQ2OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA3Njg1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZIVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkhWLmpzb24iOiAie1wia2V5RGF0YVwiOlwidkdzVVdVbXViNlNzRnJYZjZ6QXVLcE9KOG14Wk1IN3djSUlDTnBod21xWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjY5OTY1Nzc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwNzYzNDUzNDZcIn0iCn0="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
