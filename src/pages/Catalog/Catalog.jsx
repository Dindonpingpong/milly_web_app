import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'reactstrap';
import DishCard from '../../components/DishCard/DishCard';
import './Catalog.css';


const Catalog = () => {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        document.body.addEventListener('keydown', keyHandler)

        setCards(MOCK.map(({ title, description, image }) =>
            <Col sm='4'>
                <DishCard key={title} title={title} description={description} image={image} />
            </Col>
        ))

        return () => {
            window.removeEventListener('keydown', keyHandler)
        }
    }, [])

    const keyHandler = (e) => {
        e = e || window.event;

        // setIsLoading(true);

        if (e.keyCode == 37) {
            setCards(MOCK.map(({ title, description, image }) =>
                <Col sm='4'>
                    <DishCard key={title} title={title} description={description} image={image} />
                </Col>
            ))
        }
        else if (e.keyCode == 39) {
            setCards(MOCK2.map(({ title, description, image }) =>
                <Col sm='4'>
                    <DishCard key={title} title={title} description={description} image={image} />
                </Col>
            ))
        }
    }

    return (
        <Container className="catalog">
            <Row>
                {
                    isLoading &&
                    <Spinner color="success" />
                }
                {
                    !isLoading && cards
                }
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

const MOCK2 = [
    { title: "Dumplings", description: "Lorem ipusm", image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/11/19/0/MW612_pork-dumplings_s4x3.jpg.rend.hgtvcom.616.462.suffix/1605802271825.jpeg" },
    { title: "Pelmeni", description: "Lorem ipusm", image: "https://www.thespruceeats.com/thmb/yockXsiLyMgJ0zbIuHFd6KEHgHU=/3333x3333/smart/filters:no_upscale()/russian-pelmeni-meat-dumplings-recipe-1137313-hero-01-54b39db73c8148ac9d552efb6768b54f.jpg" },
    { title: "Manti", description: "Lorem ipusm", image: "https://img.povar.ru/main/68/d2/0a/72/manti-33573.jpg" }
]