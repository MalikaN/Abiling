import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import { Redirect } from 'react-router-dom';
import Menu from './Menu';


class Login extends Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        }
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    login=()=>{
        if(this.state.email==='malika@gmail.com' && this.state.password ==='pw'){
            localStorage.setItem('token','qwertyuiopasdfghjklzxcvbnm123456');
            this.props.history.push("/");
          }else{
            alert('login Failed');
          }
    }

    handleInputChange(e){
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]:value         
        });
    }

    render(){

        return(
            <Container className="contain">
                <Row>
                    <Col xs="6" sm="4"></Col>
                    <Col xs="6" sm="4" className="column">
                        <Form>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="inputEmail" value={this.state.email} placeholder="Enter your email"  onChange={this.handleInputChange} />
                                {/* <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="inputPassword" value={this.state.pwd} placeholder="Enter your password" onChange={this.handleInputChange} />
                            </FormGroup>
                            {/* <Button className="" color="outline-success" onClick={()=>this.login()}>Sign in</Button> */}
                            <Button className="" color="outline-success" onClick={this.login}>Sign in</Button>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
 

}

export default Login;
