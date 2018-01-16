import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const column ={
    'border': '1px solid rgba(0, 0, 0, 0.15)',
    'marginTop': '30px',
    'borderRadius': '0.25rem'
}

class Signup extends Component{
    render(){
        return(
            <Container className="contain">
                <Row>
                    <Col xs="6" sm="4"></Col>
                    <Col xs="6" sm="4" style={column}>
                        <Form>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="inputEmail" placeholder="Enter your email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="inputPassword" placeholder="Enter your password" />
                            </FormGroup>
                            <Button className="" color="outline-success">Sign up</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Signup;
