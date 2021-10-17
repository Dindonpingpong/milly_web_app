import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import DishCard from '../../components/DishCard/DishCard';
import './Catalog.css';


const Catalog = () => {
    const cards = MOCK.map(({ title, description, image }) => 
        <Col sm='4'>
            <DishCard title={title} description={description} image={image} />
        </Col>
    );

    return(
        <Container className="catalog">
            <Row>
                {cards}
            </Row>
        </Container>
    )
}

export default Catalog;

const MOCK = [
    { title: "Tiramisu", description: "Lorem ipusm", image: "https://www.dolce-gusto.ru/media/wysiwyg/mygento/recipes/main-tiramisu.jpg" }, 
    { title: "Cake", description: "Lorem ipusm", image: "https://www.dolce-gusto.ru/media/wysiwyg/mygento/recipes/main-tiramisu.jpg" },
    { title: "Bread", description: "Lorem ipusm", image: "https://www.dolce-gusto.ru/media/wysiwyg/mygento/recipes/main-tiramisu.jpg" }
]