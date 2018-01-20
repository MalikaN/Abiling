import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, FormFeedback } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';


class Login extends Component{

    constructor(){
        super();
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.state={
            username:null,
            password:null
        }
    }

    login(e){
        if(this.state.username=='malika@gmail.com' && this.state.password=='pw'){
            localStorage.setItem('token','qwertyuiopasdfghjklzxcvbnm123456');
            this.props.history.push("/");
            // let jwt = localStorage.getItem('token');
            // if (jwt) {
            //     this.props.history.push("/");
            // } 
            // else{
                
            // }
          }else{
            alert('login Failed');
          }

    }
    handleEmailChange(e){
        this.setState({
            username:e.target.value
        });
    }
    handlePasswordChange(e){
        this.setState({
            password:e.target.value
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
                                <Input type="email" name="email" id="inputEmail" value={this.state.username} placeholder="Enter your email"  onChange={this.handleEmailChange} />
                                {/* <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="inputPassword" value={this.state.password} placeholder="Enter your password" onChange={this.handlePasswordChange} />
                            </FormGroup>
                            <Button className="" color="outline-success" onClick={()=>this.login()}>Sign in</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
 

}

export default Login;
