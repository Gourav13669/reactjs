import './card.css';
import {Link  } from 'react-router-dom';
const Card = (props) => {
return(
    <>
     <div className="card check ">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title} </h5>
            <Link  className="btn btn-primary"
                to={{ pathname: `/detail/${props.data.show.id}` }}>
               More Detail </Link>
         </div>
        </div>
 </>
)

}
export default Card;