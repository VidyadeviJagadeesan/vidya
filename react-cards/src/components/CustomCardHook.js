import { useEffect, useState } from "react";
import CardService from '../services/CardService';

export function useCardDetails() {
    const [cardDetails, setCardDetails] = useState([]); //Set State with initial value as empty array

    useEffect(() => {
        CardService.getCardDetailsPromise()
            .then(response => {
                setCardDetails(response); //To update the state 
            });
    }, []);
    return cardDetails;
}