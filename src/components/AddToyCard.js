import React from 'react';
import { Button, Card, Header, Image, Input, Label } from 'semantic-ui-react';
import { addItem } from '../database/queries.js'

class ToyCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: "https://s3.amazonaws.com/static.graphemica.com/glyphs/i500s/000/010/184/original/002B-500x500.png?1275328183",
            toggleAddMode: false,
            data: {
                sku: "",
                title: "",
                image: ""
            },
            errorMessage: ""
        }

        this.updateSKU = this.updateSKU.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.toggleAdd = this.toggleAdd.bind(this);
    }

    updateSKU(e) {
        this.setState({
            data: {
                ...this.state.data,
                sku: e.target.value
            }
        });
    }

    updateTitle(e) {
        this.setState({
            data: {
                ...this.state.data,
                title: e.target.value
            }
        });
    }

    updateImage(e) {
        this.setState({
            data: {
                ...this.state.data,
                image: e.target.value
            }
        });
    }

    toggleAdd(e) {
        if (this.state.data.sku === "" || this.state.data.image === "" || this.state.data.title === "") {
            this.setState({
                errorMessage: "Fields cannot be empty!"
            });
            return;
        }

        addItem(this.state.data).then(result => {
            this.props.callback();
            this.setState({
                toggleAddMode: false,
                errorMessage: ""
            })
        })
    }

    render() {
        if (this.state.toggleAddMode) {
            return (
                <Card>
                    <Label corner="right" icon="times" color="red" onClick={ () => 
                        this.setState({ toggleAddMode: !this.state.toggleAddMode, errorMessage: "" }) } />
                    <Header as="h1">Add</Header>
                    <Card.Content>
                        <Input icon="barcode" iconPosition="left" placeholder="SKU" onChange={ this.updateSKU } />
                        <Input icon="user" iconPosition="left" placeholder="Name" onChange={ this.updateTitle } />
                        <Input icon="image" iconPosition="left" placeholder="Image Source" onChange={ this.updateImage } />
                        <br></br>
                        <Button size="tiny" color="green" onClick={ this.toggleAdd } style={{ marginTop: 20 }}>Add</Button>
                        <Header as="h5" color="red">{ this.state.errorMessage }</Header>
                    </Card.Content>
                </Card>
            )
        }

        return (
            <Card onClick={ () => this.setState({ toggleAddMode: !this.state.toggleAddMode }) }>
                <Image src={ this.state.image } size="medium" centered />
                <Header as="h1" style={{ paddingBottom: 20 }}>Add</Header>
            </Card>
        )
    }

}

export default ToyCard;