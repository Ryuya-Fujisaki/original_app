const { Client } = require("pg");
require('dotenv').config(); //試験中・dotenv読み込み

const client = new Client({
  user: process.env.DB_USER, //"fujisakiryuya",
  host: process.env.DB_HOST, //"127.0.0.1",
  database: process.env.DB_NAME, //"postgres",
  password: process.env.DB_PASSWORD, //"Kanaryhouse-807",
  port: process.env.DB_PORT, //5432,
});

client.connect();
const query = {
    text: "INSERT INTO member VALUES ($1, $2)",
    values: [1, "山田太郎"],
};
client
    .query(query)
    .then((res) => {
        console.log(res);
        client.end();
    })
    .catch((e) => console.error(e.stack));