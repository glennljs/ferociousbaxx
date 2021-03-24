import React from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions.js";
import { Button, CardGroup, Confirm, Header, Input } from "semantic-ui-react";
import { getAllItems } from '../database/queries.js';
import ToyCard from './ToyCard.js';
import AddToyCard from './AddToyCard.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsData: [],
            searchInput: "",
            searchId: "",
            confirmLogout: false
        }

        this.updateSearchInput = this.updateSearchInput.bind(this);
        this.updateSearchId = this.updateSearchId.bind(this);
        this.getFilteredItems = this.getFilteredItems.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        getAllItems().then(result => {
            this.setState({
                itemsData: result
            });
        })
    }

    rerenderDashboard() {
        this.componentDidMount();
    }

    updateSearchInput(e) {
        this.setState({
            searchInput: e.target.value
        })
    }

    updateSearchId(e) {
        this.setState({
            searchId: e.target.value
        })
    }

    getFilteredItems() {
        return this.state.itemsData.sort((a, b) => a.title.localeCompare(b.title))
            .filter(item => item.title.toLowerCase().includes(this.state.searchInput.toLowerCase()))
            .filter(item => item.id.toLowerCase().includes(this.state.searchId.toLowerCase()));
    }

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <div>
                <Header as="h1">Ferocious Baxx</Header>

                <Button onClick={ () => this.setState({ confirmLogout: true }) } style={{ marginBottom: 20 }}>Logout</Button>
                <Confirm 
                    open={ this.state.confirmLogout } 
                    onCancel={ () => this.setState({ confirmLogout: false })} 
                    onConfirm={ this.logout } 
                    content="Are you sure you want to logout!"
                    size="small"
                />
                <br></br>
                <Input placeholder="Search Name..." style={{ marginBottom: 5 }} onChange={ this.updateSearchInput } />
                <br></br>
                <Input placeholder="Search SKU..." style={{ marginBottom: 20 }} onChange={ this.updateSearchId } />

                <CardGroup centered itemsPerRow="3" stackable>
                    <AddToyCard callback={ () => this.rerenderDashboard() } />
                    { this.getFilteredItems().map(item => 
                        <ToyCard item={ item } callback={ () => this.rerenderDashboard() } key={ item.id }></ToyCard>) }
                </CardGroup>
            </div>
        );
    }

}

export default connect(null, { logout })(Dashboard);