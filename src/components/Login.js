import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';


class Login extends Component{
    render(){
        return(
            <Container className="contain">
                <Row>
                    <Col xs="6" sm="4"></Col>
                    <Col xs="6" sm="4" className="column">
                        <Form>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="inputEmail" placeholder="Enter your email" />
                                {/* <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="inputPassword" placeholder="Enter your password" />
                            </FormGroup>
                            <Button className="" color="outline-success">Sign in</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Login;
