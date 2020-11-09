import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";
import ResponsiveDrawer from "./ResponsiveDrawer";







// displayingdata from database
const Profile = (props) => (
  <tr>
    <td>{props.profile._id}</td>
    <td>{props.profile.customerid}</td>
    <td>{props.profile.profileid}</td>
    
    
    <td>{props.profile.type}</td>
  </tr>
);
//

export default class ProfileList extends Component {
  constructor(props) {
    super(props);

    this.state = { profiles: []  };
  }
  

  //connecting frontend to backend
  componentDidMount() {
    axios
      .get("")
      .then((response) => {
        this.setState({ profiles: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  profileList() {
    return this.state.profiles.map((currentprofile) => {
      return <Profile profile={currentprofile} />;
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
                  <th>CustomerID</th>
                  <th>ProfileID</th>
                  <th>Type</th>
                  
                </tr>
              </thead>
              <tbody id="myTable">{this.profileList()}</tbody>
            </table>
            
          </div>
        </div>
      </div>
    );
  }
}
