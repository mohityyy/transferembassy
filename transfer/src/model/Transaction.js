import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";
import ResponsiveDrawer from "./ResponsiveDrawer";







// displayingdata from database
const Transaction = (props) => (
  <tr>
    <td>{props.transaction._id}</td>
    <td>{props.transaction.date}</td>
    <td>{props.transaction.orderId}</td>
    <td>{props.transaction.walletId}</td>
    <td>{props.transaction.influencer}</td>
    <td>{props.transaction.name}</td>
    <td>{props.transaction.transaction_type}</td>
    <td>{props.transaction.amount}</td>
  </tr>
);
//

export default class TransactionList extends Component {
  constructor(props) {
    super(props);

    this.state = { transactions: []  };
  }
  

  //connecting frontend to backend
  componentDidMount() {
    axios
      .get("")
      .then((response) => {
        this.setState({ transactions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  transactionList() {
    return this.state.transactions.map((currenttransaction) => {
      return <Transaction transaction={currenttransaction} />;
    });
  }

  //displaying front  end
  render() {
    return (
      <div>
        <div>
          <ResponsiveDrawer />
        </div>

        <div class="content">
          <div className="form-group1">
            
         
  
          </div>
          <div class="dropdown">
  
</div>
          <div className="data">
            <table className="table  table-bordered">
              <thead className="thead">
                <tr>
                  <th>ID</th>
                  <th>date</th>
                  <th>orderId</th>
                  <th>walletId</th>
                  <th>influencer</th>
                  <th>Name</th>
                  <th>transaction_type</th>
                  <th>amount</th>
                  
                </tr>
              </thead>
              <tbody id="myTable">{this.transactionList()}</tbody>
            </table>
            
          </div>
        </div>
      </div>
    );
  }
}
