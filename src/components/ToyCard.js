import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class ToyCard extends React.Component {

    render() {
        return (
            <Card>
                <Image src={ this.props.item.data.image }></Image>
                <Card.Content>
                    <Card.Header>{ this.props.item.data.title }</Card.Header>
                    <Card.Description>SKU: { this.props.item.id }</Card.Description>
                </Card.Content>
            </Card>
        )
    }

}

export default ToyCard;