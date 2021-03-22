import React from "react";
import { Grid, Header, Form, Input, Button } from 'semantic-ui-react';
import { validateLogin } from '../database/queries.js';

class Login extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        }

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.login = this.login.bind(this);
    }

    updateUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    login(e) {
        if (this.state.username === "" || this.state.password === "") {
            this.setState({
                errorMessage: "Please input username & password!"
            });
        }

        validateLogin(this.state.username, this.state.password).then(result => {
            console.log(result);
            if (typeof result === "string") {
                this.setState({
                    errorMessage: result
                });
                return;
            }

            console.log("success!");
            this.setState({
                errorMessage: ""
            });

        });
    }

    render() {
        return (
            <Grid textAlign="center" style={{ height: '80vh' }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 300 }}>
                    <Header as="h2">Ferocious Baxx</Header>
                    <Form>
                        <Form.Field>
                            <Input 
                                icon="user" 
                                iconPosition="left" 
                                placeholder="Username"
                                onChange={this.updateUsername} 
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input 
                                icon="lock" 
                                iconPosition="left" 
                                type="password" 
                                placeholder="Password"
                                onChange={this.updatePassword} 
                            />
                        </Form.Field>
                        <Button onClick={this.login}>Login</Button>
                        <Header as="h4" color="red">{ this.state.errorMessage }</Header>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }

}

export default Login;