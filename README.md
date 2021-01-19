CHALLENGE UI_UX Login plus Register - Isabel Marques

This challenge consists on creating and Login/Register menu for a website created to Albert's Electronic Component Business.

First, on your terminal you need to write:

"yarn start"

This will run the app in the development mode.
Open (http://localhost:3000) to view it in the browser.

The first menu that appears is the Registration one.
To test if it works fill the fields with the following:

{ "Username" : "my-username" }
{ "Email" : "myemail@email.ja" }
{ "Password" : "my-password" }

After you fill them, click on the "Register" button .
This will send the field data to backend for authentication, saving this data for future transations.

After clicking the "Register" button it will redirect you to the main page where you can see a plain screen with an image and a "Logout" button on your top-right corner.

When you click on the "logout" button it redirects you to the Login menu.

Now that we already have register "my-username" account here we can prove if the data was sent correctly to backend.
Insert the same information on each field that you filled on the Register menu:

{ "Username" : "my-username" }
{ "Email" : "myemail@email.ja" }
{ "Password" : "my-password" }

If all is correct it will redirect you again to the main page, if not it will appear an error message.
