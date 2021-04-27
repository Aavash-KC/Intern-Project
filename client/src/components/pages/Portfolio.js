import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:9000/api/get").then((Response) => {
      setPortfolio(Response.data)
    });
  });
  const deletePortfolio = (SN) => {
    Axios.delete(`http://localhost:9000/api/delete/${ SN }`).then(() => {
      reloadPage();
    });

  }
  const renderportfolio = (portfolio, index) => {
    return (

      <tr key={index}>
        <td>{portfolio.SN}</td>
        <td>{portfolio.StockName}</td>
        <td>{portfolio.TransactionType}</td>
        <td>{portfolio.Quantity}</td>
        <td>{portfolio.Amount}</td>
        <td>{portfolio.TransactionDate}</td>
        <td>
          <Link className="btn btn-primary" exact to='/edit/:SN'> Edit</Link>
          <Link className="btn btn-danger" exact to="/delete/:SN">Delete</Link> 
        </td>
      </tr>
    )
  }



  function reloadPage() {
    window.location.reload();
  }



  return (
    <div className="container">
      <div className="py-4">
        <h1>Portfolios</h1>
        <table className="table">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Stock Name</th>
              <th>Transaction Type</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Transaction Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map(renderportfolio)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Portfolio;