import React from 'react';
import './book.css';
import FormDialog from './Form.jsx'
const Book = (props) => {
  

return (
    
    <div className="book">
        <img src={props.img} class="img-fluid" alt="..." />
        <div className="title">
        <h1>{props.show.name}</h1>
        </div>
        <div className="rating">
            <h6>Rating <br /> {props.show.rating.average}</h6>
        </div>
        
        <article>
            {props.show.summary}
        </article>
        <div className="btnn btn  btn-block">
        <FormDialog name={props.show.name} />
        
        </div>
        
    </div>
    
)
};
export default Book;