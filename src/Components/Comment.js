import React, { Component } from 'react'

export default class Comment extends Component {
   
  render() {
    let reviewsArray = [];
    this.props.ratings.forEach((item)=>{
      reviewsArray.push(
      <p>Rating:{item.stars },Comment: {item.comment}</p>
      )
  
    })
    return (
      <div>
        <button type="button" onClick={this.popUpComment}>Open Modal</button>


<div id="myComment" className="modal" role="dialog">
  <div className="modal-dialog">

   
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Modal Header</h4>
      </div>
      <div className="modal-body">
        {reviewsArray}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

      </div>
    )
  }
}
