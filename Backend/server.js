const express = require('express')
const cors = require('cors')
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '128.199.184.27',
  user: 'readuser',
  password: '12003000',
  database: 'crm'
});

const app = express()
app.use(cors())
app.use(express.json())

app.get('/totalAmount', function (req, res) {
  const q = `
          SELECT 
          IFNULL(createBy, 'Total') AS createBy, SUM(netAmount) AS NetAmount FROM 
          crm.order WHERE 
          orderdate BETWEEN '2024-04-01 00:00:00' AND '2024-04-30 23:59:59'
          AND status <> 'C'
          AND OwnerId = '2139'
          AND status <> 'RETURN'
        GROUP BY 
          createBy WITH ROLLUP;
  `;
  
  connection.query(q, function(err, results) {
    if (err) {
      res.status(500).send('Error data from database');
      return;
    }
    res.send(results)
  });
});


app.get('/totalOrder' , function (req , res){
  const q = `
    SELECT COUNT(orderNo) as totalOrder
    FROM crm.order 
    WHERE orderdate BETWEEN '2024-04-01 00:00:00' AND '2024-04-30 23:59:59' AND status <> 'C' AND OwnerId = '2139' AND status <> 'RETURN';
  `;
  connection.query(q, function(err, results) {
    if (err) {
      res.status(500).send('Error data from database');
      return;
    }
    res.send(results)
  });
})

app.get('/delivery', function (req, res) {
    const q =` 
    SELECT 
    createBy, 
    FORMAT(IF(o.NetAmount < 5000, 50, o.NetAmount * 0.015 + 15), 'N', 'en-us') AS "Delivery"
    FROM 
    crm.order o
    WHERE 
    o.ownerId = 2139
    AND o.status <> 'C'
    AND o.status <> 'RETURN'
    AND o.orderDate >= '2024-04-01 00:00:00' 
    AND o.orderDate <= '2024-04-30 23:59:59' 
    ORDER BY 
    o.createBy`;
  connection.query(q, function(err, results) {
    if (err) {
      res.status(500).send('Error data from database');
      return;
    }
    res.send(results)
  });
});

port = 8080
app.listen(port, function () {
  console.log('This server is running on port',port)
})