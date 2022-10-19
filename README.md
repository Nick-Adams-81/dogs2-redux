# dogs2-redux

* This is a complete re factor of the original dogs2 project, it still uses a React.js front end, but the backend is now Express.js, with a prisma ORM connected to a MySQL server.

## Tools needed
* Node.js
* a SQL Server, PostgreSQL, MySQL, or SQLite
* IDE, I perfer either VSCode or IntelliJ but any will do.

## Getting Started

### Backend
* First you will need to install the dependencies, do this with the following command:
* `npm i` or `npm install`
* To connect prisma to your SQL Server you will need the following in your .env file:
* `DATABASE_URL=yourdb://USER:PASSWORD@HOST:PORT/DATABASE`
* Note the USER in your url is your username, PASSWORD is your password, @HOST:PORT is the host and port your SQL server is running on, and DATABASE is the name of the database you are using with this app.
* I have the backend configured to run locally at localhost: 3001, you can adjust what port the app runs on but you would have to reconfigure all API routes accordingly.

* Once you have a connection to your SQL server, you can migrate the data models using the following command:<br />
 `npx prisma migrate dev --name of migration`
* Once you have migrated the data models you can now seed them with the following command:
* `npx prisma db seed `

* To start the dev sserver use this command:
* `npm run dev`
