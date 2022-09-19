const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const googleAuth = require('google-auth-library');
const url = require('url');
 


const credentials = JSON.parse(fs.readFileSync("/Google/credentials.json",'utf-8', (err, data)=>{
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

  

  //Get Token
  const code = `${code}`; //토큰 요청 url값 
  const oAuth2Client = new google.auth.OAuth2( client_id, clientSecret, redirectUrl[0], ); 
  const getToken = async () => { const { tokens } = await oAuth2Client.getToken(code);
  console.info(tokens); fs.writeFileSync('google-oauth-token.json', JSON.stringify(tokens)); }; getToken();
  
  console.log(code);
    
  console.info(`authUrl :  ${url}`);
  

  
  let token = await oAuth2Client.getToken()

  module.exports = {
    url
  }

