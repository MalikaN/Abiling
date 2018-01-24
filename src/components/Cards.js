import React,{Component} from 'react';
import posts from '../posts.js';
import { Button, Card, CardImg, CardTitle, CardText,CardSubtitle, CardBody } from 'reactstrap';

class Cards extends Component{
    render(){
        return(
            <Card style={card.hover} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{post.first_name +" "+ post.last_name}</CardTitle>
                    <CardSubtitle>{post.email}</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button color="link">Readmore>></Button>
                </CardBody>
            </Card>
        )
    }
}
export default Cards;