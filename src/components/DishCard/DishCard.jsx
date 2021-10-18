import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Spinner } from 'reactstrap';
import './DishCard.css';

const DishCard = ({ id, title, description, image, isLoading = false }) => {
    return (
        <Card body className="dish-card" key={id}>
            {
                !isLoading &&
                <CardImg top width="100%" src={image} alt={title} />
            }
            {
                isLoading &&
                <CardBody>
                    <Spinner color="success" children="" />
                </CardBody>
            }
            {
                !isLoading &&
                <CardBody>
                    <CardTitle className="font-link" tag="h1">{title}</CardTitle>
                    <CardText className="font-link">{description}</CardText>
                </CardBody>
            }
        </Card>
    )
};

export default DishCard;