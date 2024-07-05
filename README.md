
# API Backend

This is a Backend API which retrieves the data from SQL Server and handles minimal CRUD Operations only.

Note:- As of now minimal data has been stored in database.
## Authors

- [@Karthik Maheshwarapu](https://www.github.com/iamkarthikricky)


## API Reference

#### Get all items

```http
  GET /${category}/?sort_by_price=${value}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `category` | `string` | To get categoried data |
| `value` | `string` | To Sort the data |

## Tech Stack

**Client:** React, Javascript

**Server:** Node, Express





## Appendix

- This backend project is developed using Node.js and express.js with the help of sqlite database.
- This database holds preloaded records and don't accepts furthur loading of data unless requested permission from the author.
- This project is deployed to Onrender as a web server and you may face delay in fetching the data from the hosted server.


