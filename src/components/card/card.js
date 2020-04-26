import React from  'react';
import PropTypes from 'prop-types';

const Card = ({data})=>{
    return (
        <div className="col-md-4">
        <div className="card">
            <img src={data.image} alt={data.description} className="card-img-top" width="100"/>
            <div className="card-body">
                <h4>{data.description} {data.price}</h4>
                <p>{data.status}</p>
            </div>
            
        </div>
        </div>
    )
}

Card.prototypes={
    movie:PropTypes.shape({
        descrciption:PropTypes.string,
        price:PropTypes.number,
        image:PropTypes.string,
        status:PropTypes.string,
    }).isRequired
    
}

export default Card;