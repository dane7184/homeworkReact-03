import React from 'react';
import { Card } from 'react-bootstrap';
import Btn from './Btn';


const ProductCard = ({product}) => {
    return (
        <Card style={{ width: "18rem" }} className="m-1">
			<Card.Img
				variant='top'
				src={product.images}
			/>
			<Card.Body>
				<Card.Title>{product.title}</Card.Title>
				<h4 >${product.price}</h4>
				<Card.Text>{product.description}</Card.Text>
			
			
			</Card.Body>
			<div className="btn-group ">
			<Btn styleBtn={"btn btn-warning"} title={"buy now"}/>
			<Btn styleBtn={"btn btn-outline-warning"} title={"buy add to card"}/>
			</div>
		</Card>
    );
}

export default ProductCard;
