import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const Dashboard = () => {

  const [totalunit, setTotalUnit] = useState([]);
  const [totalbuy, setTotalBuy] = useState([]);
  const [total, setTotal] = useState([]);
  const [totalsell, setTotalSell] = useState([]);
  //const [dash1, setDash1] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:9000/api/get/totalunit").then((Response) => {
      setTotalUnit(Response.data)
    });
    Axios.get("http://localhost:9000/api/get/totalbuy").then((Response) => {
      setTotalBuy(Response.data)
    });
    Axios.get("http://localhost:9000/api/get/totalsell").then((Response) => {
      setTotalSell(Response.data)
    });
    Axios.get("http://localhost:9000/api/get/total").then((Response) => {
      setTotal(Response.data)
    });

  });
  const renderTotalUnit = (totalunit, index) => {
    return (
      <td>Total units: {totalunit.totalUnit}</td>
    );


  };
  const renderTotalBuy = (totalbuy, index) => {

    return (
      <td>Total Investment: {totalbuy.totalBuy}</td>
    );
  };

  const renderCurrentAmount = (total, totalsell, index) => {
    let currentAmount =parseInt(total.totals) - parseInt(totalsell.totalSell);
    return (
      <td>Current Amount: {currentAmount}</td>
    );
  };

  const renderTotalSell = (totalsell, index) => {
    return (
      <td>Sold Amount: {totalsell.totalSell}</td>
    );    
  };


  const renderOverallProfit = (totalbuy, totalsell, index) => {
    let overallProfit = totalsell - totalbuy;
    return (
      <td>Overall profit: {overallProfit}</td>
      
    )
  }

  
  return (
    <div className="container">
      <div>
        <h1>Dashboard</h1><table>
          <tr>
            <td>Dashboard</td>
          </tr>
          <tr>
            {totalunit.map(renderTotalUnit)}
            {totalbuy.map(renderTotalBuy)}
          </tr>
          <tr>
            {totalsell.map(renderTotalSell)}
            {(total,totalsell).map(renderCurrentAmount)}
          </tr>
          <tr>
            {(totalbuy,totalsell).map(renderOverallProfit)}
          </tr>
        </table>
      </div>
    </div>
  )
}
export default Dashboard;