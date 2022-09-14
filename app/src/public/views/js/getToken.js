const {google} = require("googleapis");

const fs = require("fs");

fs.readFile('../credentials.json', (error, jsonFile)=>{
    if(error) return console.error;
    console.log(jsonFile);

    const jsonData = JSON.parse(jsonFile);
    console.log(jsonFile);

    const todos = jsonData.todos;
    todos.forEach(todo => {
        console.log(todo);
    });
})

// const oauth2Client = new google.auth.OAuth2(
//     YOUR_CLIENT_ID,
//     YOUR_CLIENT_SECRET,
//     YOUR_REDIRECT_URL
//   );
  
//   // generate a url that asks permissions for Blogger and Google Calendar scopes
//   const scopes = [
//     'https://www.googleapis.com/auth/blogger',
//     'https://www.googleapis.com/auth/calendar'
//   ];
  
//   const url = oauth2Client.generateAuthUrl({
//     // 'online' (default) or 'offline' (gets refresh_token)
//     access_type: 'offline',
  
//     // If you only need one scope you can pass it as a string
//     scope: scopes
//   });