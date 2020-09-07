import { ArrowRight32 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import React from 'react';

const CardContent = (props) => (
    <div className='card shadow h-100'>
        <div className='overflow'>
            <img src={props.cardDetail.imageUrl} alt={props.cardDetail.imageAlt} className='card-img-top' />
        </div>
        <div className='card-body d-flex flex-column text-dark'>
            <h4 className='card-title'>{props.cardDetail.title}</h4>
            <p className='card-text text-secondary'>
                {props.cardDetail.description}
            </p>
            <a href='#' className='mt-auto'>
                Explore
                <ArrowRight32 aria-label="Arrow Right" className="pl-1 card-icon" />
            </a>
        </div>
    </div>
);

CardContent.defaultProps = {
    cardDetail: {}
};

CardContent.propTypes = {
    cardDetail: PropTypes.object
};

export default CardContent;