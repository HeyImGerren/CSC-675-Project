# CSC 675 Term Project

## Technologies:
- Node.js: we used this for server side (back-end) stuff
- Express.js: Handles routes, http requests, and views 
- EJS: Templating engine 
- PostgreSQL: Relational Database we chose to store our data in.

## For The GUI: 
- PG-PROMISE: This is an interface for postgreSQL. We used PG-Promise to connect our postgres database to our application. Pg-promise is useful because it wraps our queries in promises which ensures that the query completes before we try to access data returned from the query. We also made use of the .one(), and .manyOrNone() functions to ensure we were receiving the expected amount of data from the database.

- Sequelize: Sequelize helps us easily create tables and update the database schema. To update the database schema we simply go into our migration files, make the changes we need to make, then run the migration command (db:migrate) after dropping and re-creating the database to then update the schema. 

## Inserting Data Into Database:
- We took advantage of the bulk insert functionality that sequelize has to offer. When we run db:migrate, all of the files in the migration directory are read in order starting from the first file. Each file in the directory is basically just the logical schema for each table. Once the file is read, the table is created in the database. Once we create all the tables, we have all the "populate" files. All of the populate files are just bulk inserting data into each table that we just created.  

## Sequence Of Events (User presses Marvel Button)
1) User presses marvel button, the href for this button is '/marvel'
2) In our routes we have a function that handles the GET request for '/marvel'
3) In this function we call a function that queries the database for all rows with 'Marvel Comics' under their publisher column.
4) All of the results are returned and displayed onto the page in the form of a large json object. 
5) The same process happens for when the user clicks DC
