import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input,Container,Row,Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';


class Signup extends Component{
    render(){
        return(
            <Container className="contain">
                <Row>
                    <Col xs="6" sm="4"></Col>
                    <Col xs="6" sm="4" className="column">
                        <Form>
                        <FormGroup>
                                <Label for="Email">First Name</Label>
                                <Input type="email" name="email" id="inputEmail" placeholder="Enter your first name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Email">Last Name</Label>
                                <Input type="email" name="email" id="inputEmail" placeholder="Enter your last name" />
                            </FormGroup>
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
