import React from "react";
import { Grid, Header, Form, Input, Button } from 'semantic-ui-react';

class Login extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
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
                        <Button>Submit</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }

}

export default Login;