import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";
import ResponsiveDrawer from "./ResponsiveDrawer";







// displayingdata from database
const Subscription = (props) => (
  <tr>
    <td>{props.subscription._id}</td>
    <td>{props.subscription.isActive}</td>
    <td>{props.subscription.amountCaptured}</td>
    
    
    <td>{props.subscription.invoice_number}</td>
    <td>{props.subscription.subscriptionId}</td>
    <td>{props.subscription.influencer}</td>
    <td>{props.subscription.description}</td>
    <td>{props.subscription.amount}</td>
    <td>{props.subscription.profileId}</td>
    <td>{props.subscription.transactionId}</td>
  </tr>
);
//

export default class SubscriptionList extends Component {
  constructor(props) {
    super(props);

    this.state = { subscriptions: []  };
  }
  

  //connecting frontend to backend
  componentDidMount() {
    axios
      .get("")
      .then((response) => {
        this.setState({ subscriptions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  subscriptionList() {
    return this.state.subscriptions.map((currentsubscription) => {
      return <Subscription subscription={currentsubscription} />;
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
                  <th>isActive</th>
                  <th>amountCaptured</th>
                  <th>invoice_number</th>
                  <th>subscriptionId</th>
                  <th>influencer</th>
                  <th>description</th>
                  <th>amount</th>
                  <th>profileId</th>
                  <th>transactionId</th>
                  
                </tr>
              </thead>
              <tbody id="myTable">{this.subscriptionList()}</tbody>
            </table>
            
          </div>
        </div>
      </div>
    );
  }
}
