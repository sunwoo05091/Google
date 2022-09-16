const {google} = require("googleapis");
const drive = google.drive('v3');
const fs = require("fs");
const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf-8')); 
const { client_secret: clientSecret, client_id: clientId, redirect_uris: redirectUris, } = credentials.installed; 
const oAuth2Client = new google.auth.OAuth2( clientId, clientSecret, redirectUris[0], ); 

drive.files.list({
  auth: oAuth2Client,
  pageSize: 10,
  fields: 'nextPageToken, files(id, name)',
}, (err1, res1) => {
  if (err1) return console.log('The API returned an error: ' + err1);
  const files = res1.data.files;
  if (files.length) {
    console.log('Files:');
    files.map((file) => {
      console.log(`${file.name} (${file.id})`);
    });
  } else {
    console.log('No files found.');
  }
});