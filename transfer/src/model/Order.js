import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";
import ResponsiveDrawer from "./ResponsiveDrawer";







// displayingdata from database
const Order = (props) => (
  <tr>
    <td>{props.order._id}</td>
    <td>{props.order.orderStatus}</td>
    <td>{props.order.taskStatus}</td>
    <td>{props.order.amountCaptured}</td>
    <td>{props.order.transactionSuccessfull}</td>
    <td>{props.order.invoice_number}</td>
    <td>{props.order.description}</td>
    <td>{props.order.influencer}</td>
    <td>{props.order.customerId}</td>
    <td>{props.order.amount}</td>
    <td>{props.order.transaction_type}</td>
    
    
    
  </tr>
);
//

export default class OrderList extends Component {
  constructor(props) {
    super(props);

    this.state = { orders: []  };
  }
  

  //connecting frontend to backend
  componentDidMount() {
    axios
      .get("")
      .then((response) => {
        this.setState({ orders: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  orderList() {
    return this.state.orders.map((currentorder) => {
      return <Order order={currentorder} />;
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
                  <th>OrderStatus</th>
                  <th>TaskStatus</th>
                  <th>AmountCaptured</th>
                  <th>TransactionSuccessfull</th>
                  <th>Invoice_number</th>
                  <th>Description</th>
                  <th>Influencer</th>
                  <th>CustomerId</th>
                  <th>Amount</th>
                  <th>Transaction_type</th>
                  
                  
                </tr>
              </thead>
              <tbody id="myTable">{this.orderList()}</tbody>
            </table>
            
          </div>
        </div>
      </div>
    );
  }
}
