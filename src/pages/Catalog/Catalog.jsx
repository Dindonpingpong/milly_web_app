import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import DishCard from '../../components/DishCard/DishCard';
import './Catalog.css';


const Catalog = () => {
    const [cards, setCards] = useState([]);

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


        if (e.keyCode === 37) {
            setCards(MOCK3.map(({ id, title, description, image }) =>
                <Col sm='4' >
                    <DishCard key={id} title={title} description={description} image={image} isLoading={true} />
                </Col>
            ))

            setTimeout(() => {
                setCards(MOCK.map(({ id, title, description, image }) =>
                    <Col sm='4' >
                        <DishCard key={id} title={title} description={description} image={image} />
                    </Col>
                ))
            }, 500)
        }
        else if (e.keyCode === 39) {
            setCards(MOCK3.map(({ id, title, description, image }) =>
                <Col sm='4' >
                    <DishCard key={id} title={title} description={description} image={image} isLoading={true} />
                </Col>
            ))

            setTimeout(() => {
                setCards(MOCK2.map(({ id, title, description, image }) =>
                    <Col sm='4' >
                        <DishCard key={id} title={title} description={description} image={image} />
                    </Col>
                ))
            }, 500)
        }
    }

    return (
        <Container className="catalog">
            <Row>
                {cards}
            </Row>
        </Container>
    )
}

export default Catalog;

const MOCK = [
    { id: 1, title: "Tiramisu", description: "Lorem ipusm", image: "https://www.dolce-gusto.ru/media/wysiwyg/mygento/recipes/main-tiramisu.jpg" },
    { id: 2, title: "Pancakes", description: "Lorem ipusm", image: "https://lacuisinedegeraldine.fr/wp-content/uploads/2021/06/Pancakes-04483-2-scaled.jpg" },
    { id: 3, title: "Cheesecake", description: "Lorem ipusm", image: "https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw789aa3a6/images/project/WLRECIP-8831/Mini-Classic-Cheesecakes.jpg?sw=800&sh=800" }
]

const MOCK2 = [
    { id: 1, title: "Dumplings", description: "Lorem ipusm", image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/11/19/0/MW612_pork-dumplings_s4x3.jpg.rend.hgtvcom.616.462.suffix/1605802271825.jpeg" },
    { id: 2, title: "Pelmeni", description: "Lorem ipusm", image: "https://www.thespruceeats.com/thmb/yockXsiLyMgJ0zbIuHFd6KEHgHU=/3333x3333/smart/filters:no_upscale()/russian-pelmeni-meat-dumplings-recipe-1137313-hero-01-54b39db73c8148ac9d552efb6768b54f.jpg" },
    { id: 3, title: "Manti", description: "Lorem ipusm", image: "https://img.povar.ru/main/68/d2/0a/72/manti-33573.jpg" }
]

const MOCK3 = [
    { id: 1, title: "", description: "", image: "" },
    { id: 2, title: "", description: "", image: "" },
    { id: 3, title: "", description: "", image: "" }
]