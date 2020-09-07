import React, { Component } from 'react';
import CardService from '../services/CardService';
import CardList from './shared/CardList';

export default class CardsClass extends Component {

    constructor() {
        super();

        this.state = {
            cardDetails: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ cardDetails: CardService.getCardDetails() }));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="d-flex flex-row">
                    <div className="col-sm-12">
                        <CardList cardDetails={this.state.cardDetails} />
                    </div>
                </div>
            </div>
        );
    }
}