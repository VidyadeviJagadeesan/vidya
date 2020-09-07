import React, { useEffect, useState } from "react";
import CardService from '../services/CardService';
import CardList from './shared/CardList';

export default function CardsHook() {

    const [cardDetails, setCardDetails] = useState([]); //Set State with initial value as empty array

    useEffect(() => {
        CardService.getCardDetailsPromise()
            .then(response => {
                setCardDetails(response); //To update the state 
            });
    }, []);

    return (
        <div className="container-fluid">
            <div className="d-flex flex-row">
                <div className="col-sm-12">
                    <CardList cardDetails={cardDetails} />
                </div>
            </div>
        </div>
    );
}