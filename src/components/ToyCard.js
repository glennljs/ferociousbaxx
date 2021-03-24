import React from 'react';
import { Button, Card, Confirm, Image, Input, Label } from 'semantic-ui-react';
import { editItem, deleteItem } from '../database/queries.js';

class ToyCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            newData: {},
            editMode: false,
            checkDelete: false
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateSKU = this.updateSKU.bind(this);
        this.updateImageSrc = this.updateImageSrc.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.checkDelete = this.checkDelete.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    updateSKU(e) {
        this.setState({
            newData: {
                ...this.state.newData,
                sku: e.target.value
            }
        })
    }

    updateTitle(e) {
        this.setState({
            newData: {
                ...this.state.newData,
                title: e.target.value
            }
        })
    }

    updateImageSrc(e) {
        this.setState({
            newData: {
                ...this.state.newData,
                image: e.target.value
            }
        })
    }

    toggleEditMode(e) {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    toggleEdit(e) {
        const newData = {
            sku: this.state.newData.sku || this.state.item.sku,
            title: this.state.newData.title || this.state.item.title,
            image: this.state.newData.image || this.state.item.image
        }

        editItem(this.state.item.id, newData).then(result => {
            this.props.callback();
            this.setState({
                editMode: false
            })
        });    
    }

    checkDelete(e) {
        this.setState({
            checkDelete: true
        })
    }

    cancelDelete(e) {
        this.setState({
            checkDelete: false
        })
    }

    confirmDelete(e) {
        deleteItem(this.state.item.id).then(result => {
            this.props.callback();
        });
    }

    render() {

        // Edit Mode
        if (this.state.editMode) {
            return (
                <Card style={{ wordWrap: "break-word" }}>
                    <Image src={ this.state.item.image } size="medium" centered />
                    <Label corner="right" icon="times" color="red" onClick={ this.toggleEditMode } />
                    <Card.Content>
                        <Input icon="barcode" iconPosition="left" placeholder="SKU" onChange={ this.updateSKU } />
                        <Input icon="user" iconPosition="left" placeholder="Name" onChange={ this.updateTitle } />
                        <Input icon="image" iconPosition="left" placeholder="Image Source" onChange={ this.updateImageSrc } />
                    </Card.Content>
                    <Card.Content style={{ marginTop: '5px' }}>
                        <Button size="tiny" color="green" onClick={ this.toggleEdit }>Update</Button>
                    </Card.Content>
                </Card>
            )
        }

        // Default
        return (
            <Card style={{ wordWrap: "break-word" }}>
                <Label corner="left" icon="edit" onClick={ this.toggleEditMode } />
                <Label corner="right" icon="trash" color="red" onClick={ this.checkDelete } />
                <Confirm open={ this.state.checkDelete } onCancel={ this.cancelDelete } onConfirm={ this.confirmDelete }  size="small" />
                <Image src={ this.props.item.image } size="medium" centered />
                <Card.Content>
                    <Card.Header>{ this.props.item.title }</Card.Header>
                    <Card.Description>SKU: { this.props.item.sku }</Card.Description>
                </Card.Content>
            </Card>
        )
    }

}

export default ToyCard;