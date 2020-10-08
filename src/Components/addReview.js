import React, { Component } from 'react'
 import Listing from './Listing.js'
export default class AddReview extends Component {
  constructor(props){
    super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
   this.handleInputChange = this.handleInputChange.bind(this);
     
     this.state = { 
       index: 0,
       stars:"",
       comment:""    
  }
  }

  handleInputChange(event) {
   
      this.setState({[event.target.name]: event.target.value});
      this.setState({index: this.index.value})
    
      console.log({[event.target.name]: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state)
    console.log(this.state)  
    console.log(this.index.value) 
  } 
    closeModal(){
        let closeReview = document.getElementById('closeReviewModal')
        closeReview.addEventListener('click', function(){
            document.getElementById('reviewModal').style.display = "none"
            });
      }
      
    render() {        
        return (
            
                  <div class="modal" id="reviewModal">
          <div class="modal-dialog">
            <div class="modal-content">

              <div class="modal-header">
                <h4 class="modal-title"> Add Review</h4>
                            <li>{this.props.restaurantName}</li>
                            <li>{this.props.address}</li>
                <button type="button" id="closeReviewModal" data-dismiss="modal" onClick={this.closeModal}>&times;</button>
              </div>

              <div class="modal-body">
                <form onSubmit={this.handleSubmit}>
                 
                  <input type="text" id="index" ref={input => this.index = input}/>
                  <div class="form-group">
        <textarea class="form-control" id="comment"  rows="8" onChange={this.handleInputChange} name="comment"  >{this.addReview}</textarea>
                  </div>

                  <div class="form-group" >
                    <label>Rate this restaurant:</label>
                  <select name="stars" id="cars" onChange={this.handleInputChange}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                  </select>
                 
                            
                  </div>
                  
                  <button  class="btn btn-success" >Add</button>
                </form>




              </div>
            </div>
          </div>
        </div>
            
        )
    }
}
