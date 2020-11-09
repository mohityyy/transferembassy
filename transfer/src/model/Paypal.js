import React, { Component } from "react";
import { CSVLink } from "react-csv";
import axios from "axios";
import ResponsiveDrawer from "./ResponsiveDrawer";
import ModalImage from "react-modal-image";

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";




//date search filter for date to from
const Search = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();

  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[7]; //[index=7]for date in heading

    let textvlaue = td.textContent || td.innerHTML;
    if (textvlaue.toUpperCase() > filter || textvlaue.toUpperCase() == filter) {
      tr[i].display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
};
//date search filter for date to 
const Search1 = () => {
  let filter = document.getElementById("myInput1").value.toUpperCase();

  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[7]; //[index=7]for date in heading

    let textvlaue = td.textContent || td.innerHTML;
    if (textvlaue.toUpperCase() < filter || textvlaue.toUpperCase() == filter) {
      tr[i].display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
};

// displayingdata from database
const Transfer = (props) => (
  <tr>
    <td>{props.transfer.depository_name}</td>
    <td>{props.transfer.branch}</td>
    <td>{props.transfer.city}</td>
    <td>{props.transfer.state}</td>
    <td>{props.transfer.zip}</td>
  
    
      
    
    <td></td>
  </tr>
);
//

export default class TransfersList extends Component {
  constructor(props) {
    super(props);

    this.state = { transfers: [] ,startDate:Date.now(), endDate:Date.now() };
  }
  

  //connecting frontend to backend
  componentDidMount() {
    axios
      .get("http://localhost:5000/transfer/")
      .then((response) => {
        this.setState({ transfers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  transferList() {
    return this.state.transfers.map((currenttransfer) => {
      return <Transfer transfer={currenttransfer} />;
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
            
          <DatePicker id="myInput" selected={this.state.startDate} onChange={date => this.setState({startDate: date})} />
          <DatePicker id="myInput1" selected={this.state.endDate} onChange={date => this.setState({endDate: date})} />
          -<button  className="btn" onClick={Search,Search1}>Filter</button>
          
          <button class="btn  dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/data">A</a>
    
  </div>
          </div>
          <div class="dropdown">
  
</div>
          <div className="data">
            <table className="table  table-bordered">
              <thead className="thead">
                <tr>
                  <th>Depository_Name</th>
                  <th>Branch</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>

                  
                 
                </tr>
              </thead>
              <tbody id="myTable">{this.transferList()}</tbody>
            </table>
            <CSVLink data={this.state.transfers}>Download me</CSVLink>
          </div>
        </div>
      </div>
    );
  }
}
