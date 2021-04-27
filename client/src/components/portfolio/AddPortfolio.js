import React, { useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddPortfolio = () => {
    
    const [stockName, setStockName] = useState('')
    const [transactionType, setTransactionType] = useState('')
    const [quantity, setQuantity] = useState('')
    const [amount, setAmount] = useState('')
    const [transactionDate, setTransactionDate] = useState('')
 
    let history = useHistory();

    const savePortfolio = (e) => {
        e.preventDefault(); 
        Axios.post("http://localhost:9000/api/save", {
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
            <select name="transactionType" value={transactionType} onChange={(e) => {
                setStockName(e.target.value)
            }}>
                <option value="" disabled selected="true" >choose here</option>
                <option value="Nepal Bank">Nepal Bank</option>
                <option value="Sanima Bank">Sanima Bank</option>
                <option value="Joyti Life Insurance">Joyti Life Insurance</option>
            </select><br />
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

            <button onClick={savePortfolio}>Save</button>

        </div>
    );
}
export default AddPortfolio;