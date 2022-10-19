# dogs2-redux

* This is a complete re factor of the original dogs2 project, it still uses a React.js front end, but the backend is now Express.js, with a prisma ORM connected to a MySQL server.

## Tools needed
* Node.js
* a SQL Server, PostgreSQL, MySQL, or SQLite
* IDE, I perfer either VSCode or IntelliJ but any will do.

## Getting Started

### Backend
* First you will need to install the dependencies, do this with the following command:<br />
 `npm i` or `npm install`

* To connect prisma to your SQL Server you will need the following in your .env file:<br />
 `DATABASE_URL=yourdb://USER:PASSWORD@HOST:PORT/DATABASE`

* Note the USER in your url is your username, PASSWORD is your password, @HOST:PORT is the host and port your SQL server is running on, and DATABASE is the name of the database you are using with this app.
* I have the backend configured to run locally at localhost: 3001, you can adjust what port the app runs on but you would have to reconfigure all API routes accordingly.

* Once you have a connection to your SQL server, you can migrate the data models using the following command:<br />
 `npx prisma migrate dev --name of migration`
* Once you have migrated the data models you can now seed them with the following command:<br />
 `npx prisma db seed `

* To start the dev sserver use this command:<br />
 `npm run dev`

 ## Frontend
 * To install all dependencies needed again use this command:<br />
 `npm i` or `npm install`
* Once all dependencies are installed you can run the app using the command:<br />
`npm start`
* The app should be running at port 3000. you should be able to navigate to `http://localhost:3000` and see the app running.

## Special Considerations
I'd like to thank the people involved that made me persue this opportunity,
I hope in the future I get to work with all of you. Software is a huge community but the people we meet on the way make an impact and that's no different here. The following is a small list some of those people:

* Terry and Joe Lev
* Walt and Chermaine Zimmerman
* Lindsey Molineaux
* Jonatan Delgado
* Riley Cronin
* Kyle Levy<br />

There's many more to thank but this readme would get pretty long, again thank you for the opportunity!

