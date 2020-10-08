import React,{useState, Component } from 'react'

export default class Modal extends Component {
  constructor(props){
    super(props);
    this.state = { 
      restaurantName: "",
      address: "",
      lat:0,
      lng: 0,
      picURL:'https://lh5.googleusercontent.com/p/AF1QipMfCQ-dXE9EqgiWkJr9QQRshjKpDmPAjzWel7fE=w408-h305-k-no',
      ratings: [
        {
          stars: 4,
          comment: 'Great! But not many veggie options.'
        },
        {
          stars: 5,
          comment: 'My favorite restaurant!'
        },
      ],
      rating: ""
    

  }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);

  
  }
  handleInputChange(event) {
    if(event.target.name === "lat" ||event.target.name === "lng"){
      this.setState({[event.target.name]: parseFloat(event.target.value)});
    }else{
      this.setState({[event.target.name]: event.target.value});
    }
      console.log({[event.target.name]: event.target.value})
  }
   handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    this.props.addRestaurant(this.state)
   
  } 
  componentDidMount(){
    this.setState({lat: this.props.latitude})
    this.setState({lng: this.props.longitude})

  }
  render() {
    return (
      <div>
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">

              <div class="modal-header">
                <h4 class="modal-title"> Add Restaurant</h4>
                <button type="button" id="close" data-dismiss="modal">&times;</button>
              </div>

              <div class="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <input type="text" class="form-control" onChange={this.handleInputChange} name="restaurantName" placeholder="Enter restaurant"ref={input => this.name = input}
 />
                  </div>
                  <div class="form-group">
                  {this.props.latitude}
                    <input type="text"  class="form-control" onChange={this.handleInputChange}  placeholder="Enter Latitude" name="lat" ref={input => this.latitude = input} />
                  </div>
                  <div class="form-group">
                  {this.props.longitude}
                    <input type="text" class="form-control" onChange={this.handleInputChange} placeholder="Enter Longitude" name="lng" ref={input => this.longitude = input} />
                  </div>
                  <div class="form-group">
                    <textarea class="form-control"  rows="3" onChange={this.handleInputChange} name="address" ></textarea>
                  </div>

                  <div class="form-group" >
                    <label>Rate this restaurant:</label>
                  <select name="rating" id="cars" onChange={this.handleInputChange}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                  </select>
                  </div>
                  <button  class="btn btn-success" data-dismiss="modal">Add</button>
                </form>




              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
