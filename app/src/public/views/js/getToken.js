const fs = require('fs');
const { google } = require('googleapis'); 
const code = '4/0ARtbsJoy4KoZI2NxEEJpdIJ2rrkXk8gdy9fgEepRopW9aMddEDM9JaFNF5epSY8JlobZBw'; //토큰 요청 url값 
const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf-8')); 
const { client_secret: clientSecret, client_id: clientId, redirect_uris: redirectUris, } = credentials.installed; 
const oAuth2Client = new google.auth.OAuth2( clientId, clientSecret, redirectUris[0], ); 
const getToken = async () => { const { tokens } = await oAuth2Client.getToken(code);
 console.info(tokens); fs.writeFileSync('google-oauth-token.json', JSON.stringify(tokens)); }; getToken();