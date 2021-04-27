const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql=require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database: "portfolio",
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


app.get('/api/get', (req,res)=>{
    const sqlGet="Select * From portfolio_management"
    db.query(sqlGet,(err,result)=>{
        res.send(result);
    });
});

app.get('/api/get/totalunit',(req,res)=>{
    const sqlGetTotalUnit ='select sum(Quantity) as totalUnit from portfolio_management';
    db.query(sqlGetTotalUnit,(err,result)=>{
        res.send(result);
    });
});

app.get('/api/get/totalbuy',(req,res)=>{
    const sqlGetTotalBuy ='select sum(Quantity*Amount) as totalBuy from portfolio_management where TransactionType="buy"';
    db.query(sqlGetTotalBuy,(err,result)=>{
        res.send(result);
    });
});
app.get('/api/get/total',(req,res)=>{
    const sqlGetTotalBuy ='select sum(Quantity*Amount) as totals from portfolio_management';
    db.query(sqlGetTotalBuy,(err,result)=>{
        res.send(result);
    });
});


app.get('/api/get/totalsell',(req,res)=>{
    const sqlGetTotalSell = 'select sum(Quantity*Amount) as totalSell from portfolio_management where TransactionType="sell"';
    db.query(sqlGetTotalSell,(err,result)=>{
        res.send(result);
    });
});

app.post('/api/save',(req, res)=>{

    const stockName= req.body.stockName;
    const transactionType= req.body.transactionType;
    const quantity =req.body.quantity;
    const amount= req.body.amount;
    const transactionDate =req.body.transactionDate;

    const sqlInsert="Insert into portfolio_management (Stockname,TransactionType,Quantity,Amount,TransactionDate) values(?,?,?,?,?)"
    db.query(sqlInsert,[stockName,transactionType,quantity,amount,transactionDate],(err,result)=>{
        res.send(result);
    });
});

app.delete("/api/delete/:SN",(req,res)=>{
    const SN = req.params.SN;
    const sqlDelete ='delete from portfolio_management where SN = ?';
    db.query(sqlDelete,SN, (err,result=>{
        if (err) console.log(err);
    }));
});

app.get("/api/get/:SN", (req,res)=>{
    const SN = req.params.SN;
    const sqlGetBySN = 'select * from portfolio_management where SN=?';
    db.query(sqlGetBySN,SN, (err,result=>{
        res.send(result);
    }));
});

app.put("/api/update/:SN",(req,res)=>{
    const SN = req.params.SN;
    const stockName= req.body.stockName;
    const transactionType= req.body.transactionType;
    const quantity =req.body.quantity;
    const amount= req.body.amount;
    const transactionDate =req.body.transactionDate;

    const sqlUpdate ="update from portfolio_management where SN = ?";
    db.query(sqlUpdate,SN, (err,result=>{
        res.send(result);
    }));

});

app.listen(9000, ()=>{
    console.log("running on port 9000");
});