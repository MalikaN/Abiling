import React,{Component} from 'react';
import '../index.css';
import { Container, Row, Col,Input,Form,Button } from 'reactstrap';

const textArea={
    'height': '500px',
    'marginBottom' :'20px'
}
const input={
    'marginBottom' :'20px'
}
const heading={
    'position' :'absolute'
}
const button={
    'float': 'right',
    'marginBottom': '20px'
}
class Post extends Component{
    render(){

        return(
           <Container className="contain">
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }} className="column">
                        <Form>
                          <h2 style={heading}>Your Story</h2>
                           <Button color="success" style={button}>Publish</Button>
                            <Input placeholder="Title" bsSize="lg" style={input} />
                            <Input type="textarea" style={textArea} name="text" id="txtstory" bsSize="lg" placeholder="Tell your story..." />
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Post;