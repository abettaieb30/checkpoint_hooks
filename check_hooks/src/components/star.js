import StarRatingComponent from 'react-star-rating';
<StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
          
        />


        const Filter = () => {
            const[rating,setRating]=useState(1);
           const  onStarClick=(nextValue,prevValue,name)=>{
            setRating(nextValue);}

            const[rating,setRating]=useState(1);
   const  onStarClick=(nextValue,prevValue,name)=>{
    setRating(nextValue);}