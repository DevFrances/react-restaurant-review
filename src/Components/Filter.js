import React, { Component } from 'react'

export default class Filter extends Component {
  constructor(props){
    super(props)
    this.state = {
      rating: 0,
    }
  this.handleInputChange = this.handleInputChange.bind(this);

  }
  handleInputChange(event) {   
    // this.setState({[event.target.name]: event.target.value});
    // console.log(this.state.rating)
    // this.props.filterByRating(this.state.rating)
    this.setState({[event.target.name]: event.target.value}, () => {
      this.props.filterByRating(this.state.rating);
    });
  
}
    render() {
      
        return (
            <div class="row">
               <div class="search ">
               <p><label for="rating">Search by rating:</label>

                  <select name="rating" id="cars" onChange={this.handleInputChange}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                  </select>
                </p>
              </div>
            </div>
        )
    }
}
