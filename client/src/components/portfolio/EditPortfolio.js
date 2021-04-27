import React, { useState } from 'react';
import Axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';

const AddPortfolio = () => {
    
    const [stockName, setStockName] = useState('')
    const [transactionType, setTransactionType] = useState('')
    const [quantity, setQuantity] = useState('')
    const [amount, setAmount] = useState('')
    const [transactionDate, setTransactionDate] = useState('')
 
    let history = useHistory();

    const updatePortfolio = (SN) => {
        Axios.put(`http://localhost:9000/api/update/${SN}`, {
            stockName: stockName, transactionType: transactionType,
            quantity: quantity, amount: amount, transactionDate: transactionDate
        }).then(() => {
            alert('success');
            history.push("/portfolio");
        });
    };
    


    return (
        <div className="form-group">
            <h1>Add Portfolio</h1>
            <label>Stock Name : </label>
            <input type="text" name="stockName" value={stockName} onChange={(e) => {
                setStockName(e.target.value)
            }} /><br />
            <label>Transaction Type : </label>
            <select name="transactionType" value={transactionType} onChange={(e) => {
                setTransactionType(e.target.value)
            }}>
                <option value="" disabled selected="true" >choose here</option>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
            </select><br />
            <label>Quantity : </label>
            <input type="number" name="quantity" value={quantity} onChange={(e) => {
                setQuantity(e.target.value)
            }} /><br />
            <label>Amount : </label>
            <input type="number" name="amount" value={amount} onChange={(e) => {
                setAmount(e.target.value)
            }} /><br />
            <label>Transaction Date : </label>
            <input type="date" name="transactionDate" value={transactionDate} min="2015-01-01" max="2025-12-31" onChange={(e) => {
                setTransactionDate(e.target.value)
            }} /><br />

            <button onClick={updatePortfolio}>Save</button>

        </div>
    );
}
export default AddPortfolio;