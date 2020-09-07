import PropTypes from 'prop-types';
import React from 'react';
import CardConent from './CardContent';

const getCardData = (cardData) => {
    return (
        <div className='mx-card container d-flex justify-content-center flex-column'>
            <div className="mx-ptb2 col-md-12">
                <h4 className="text-white">The path to higher product quality starts with requirements</h4>
                <p className="text-white-50">Explore IBM Engineering Requirements Management DOORS Next with AI</p>
            </div>
            <div className='d-flex flex-row'>
                {cardData.map((data, key) => {
                    return (
                        <div className="col-md-4" key={key}>
                            <CardConent key={key} cardDetail={data} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const CardList = (props) => (
    <div>
        {getCardData(props.cardDetails)}
    </div>
);

CardList.defaultProps = {
    cardDetails: []
};

CardList.propTypes = {
    cardDetails: PropTypes.array
};

export default CardList;