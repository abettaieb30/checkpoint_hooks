import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({search,rating}) => {
    
  return (
    <div>
      <input type="text" placeholder="Searching for something?" onChange={(e)=>search(e.target.value)}/>
    
      <StarRatingComponent
      name="star" 
      onStarClick={(value)=>rating(value)}
      starCount = {5}
         
      />
    </div>
  )
}

export default Filter
