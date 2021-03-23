import React from "react";
import { CardGroup } from "semantic-ui-react";
import { getAllItems } from '../database/queries.js';
import ToyCard from './ToyCard.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsData: []
        }
    }

    componentDidMount() {
        getAllItems().then(result => {
            this.setState({
                itemsData: result
            });
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to Ferocious Baxx</h1>
                <CardGroup centered itemsPerRow="3">
                    { this.state.itemsData.map(item => <ToyCard item={ item }></ToyCard>) }
                </CardGroup>
            </div>
        );
    }
}

export default Dashboard;