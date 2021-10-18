import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import './DishCard.css';

const DishCard = ({ title, description, image }) => {
    return (
        <Card body className="dish-card">
            <CardImg top width="100%" src={image} alt={title} />
            <CardBody>
                <CardTitle className="font-link" tag="h1">{title}</CardTitle>
                <CardText className="font-link">{description}</CardText>

            </CardBody>
        </Card>
    )
};

export default DishCard;