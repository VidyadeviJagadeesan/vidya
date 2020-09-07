import cardDetails from './cards.json';

export default class CardService {
    static getCardDetails() {
        return cardDetails ? cardDetails : [];
    }

    static getCardDetailsPromise() {
        return new Promise(function(resolve, reject) {
            resolve(cardDetails ? cardDetails : []);
        });
    }
}