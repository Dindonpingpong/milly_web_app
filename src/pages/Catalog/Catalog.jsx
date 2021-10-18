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
    { id: 1, title: "Tiramisu", description: "a coffee-flavoured Italian dessert. It is made of ladyfingers (savoiardi) dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.", image: "https://www.dolce-gusto.ru/media/wysiwyg/mygento/recipes/main-tiramisu.jpg" },
    { id: 2, title: "Pancakes", description: "is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.", image: "https://lacuisinedegeraldine.fr/wp-content/uploads/2021/06/Pancakes-04483-2-scaled.jpg" },
    { id: 3, title: "Cheesecake", description: " is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese (typically cottage cheese, cream cheese or ricotta), eggs, and sugar.", image: "https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw789aa3a6/images/project/WLRECIP-8831/Mini-Classic-Cheesecakes.jpg?sw=800&sh=800" }
]

const MOCK2 = [
    { id: 1, title: "Dumplings", description: "is a broad class of dishes that consist of pieces of dough (made from a variety of starch sources) wrapped around a filling, or of dough with no filling. The dough can be based on bread, flour or potatoes, and may be filled with meat, fish, cheese, vegetables, fruits or sweets.", image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/11/19/0/MW612_pork-dumplings_s4x3.jpg.rend.hgtvcom.616.462.suffix/1605802271825.jpeg" },
    { id: 2, title: "Pelmeni", description: "are dumplings of Russian cuisine that consist of a filling wrapped in thin, unleavened dough.The debate about the exact place of origin is still active, with Ural and Siberia both maintaining strong claims", image: "https://www.thespruceeats.com/thmb/yockXsiLyMgJ0zbIuHFd6KEHgHU=/3333x3333/smart/filters:no_upscale()/russian-pelmeni-meat-dumplings-recipe-1137313-hero-01-54b39db73c8148ac9d552efb6768b54f.jpg" },
    { id: 3, title: "Manti", description: "a dumpling in Asian cuisine.", image: "https://img.povar.ru/main/68/d2/0a/72/manti-33573.jpg" }
]

const MOCK3 = [
    { id: 1, title: "", description: "", image: "" },
    { id: 2, title: "", description: "", image: "" },
    { id: 3, title: "", description: "", image: "" }
]