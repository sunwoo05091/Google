var fs = require('fs');
var readline = require('readline');
var {google} = require('googleapis');
var googleAuth = require('google-auth-library');
 
const credentials = JSON.parse(fs.readFileSync("./credentials.json",'utf-8', (err, data)=>{
  if(err){
    console.error;
  }else{
    console.log(data);
  }
}));
console.log(credentials);

const {client_id :  client_id, client_secret : clientSecret, redirect_uris : redirectUrl} = credentials.installed;

const oauth2Client = new google.auth.OAuth2(client_id, clientSecret, redirectUrl);
  
  // generate a url that asks permissions for Blogger and Google Calendar scopes
  const scopes = [
    'https://www.googleapis.com/auth/calendar.readonly',
    'https://www.googleapis.com/auth/calendar'
  ];
  
  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
  
    // If you only need one scope you can pass it as a string
    scope: scopes
  });
  console.info(`authUrl :  ${url}`);

