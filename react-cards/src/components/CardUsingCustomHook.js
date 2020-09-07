import React from 'react';
import CardList from './shared/CardList';
import {useCardDetails} from './CustomCardHook';

export default function CardUsingCustomHook() {

    const cardDetails = useCardDetails();

    return (
        <div className="container-fluid flex-column">
            <div className="d-flex flex-row">
                <div className="col-sm-12">
                    <CardList cardDetails={cardDetails} />
                </div>
            </div>
        </div>
    );
}