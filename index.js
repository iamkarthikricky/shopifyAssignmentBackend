const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const cors=require("cors");

const databasePath = path.join(__dirname, "booksData.db");

const app = express();

app.use(cors())
app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {
  try {

    // attempting connection with the database using sqlite3 npm package
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () =>
      console.log("Server Running at http://localhost:3000/")
    );
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();



app.get('/:category/',async(request,response)=>{
  const{category} = request.params;
  const{sort_by_price} = request.query;

  const orderBy = sort_by_price === 'low' ? 'ASC' : 'DESC';

  const getQuery = `SELECT * FROM booksData WHERE book_category='${category}' ORDER BY book_retail_price ${orderBy};`

  const getQueryResponse = await database.all(getQuery);

  response.send(getQueryResponse);
});



