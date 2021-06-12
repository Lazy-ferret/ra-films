import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star';
import shortid from 'shortid';

export default function Stars(props) {
    const { count } = props;

    if (count >= 1 || count <= 5) {
        const starsArr = [1, 2, 3, 4, 5];

        return (
            <ul className='card-body-stars'>
                {starsArr.slice(0, count).map((e) => <li className='Star' key={shortid.generate()}> <Star /> </li>)}
            </ul>
        )
    }
    return;
}

Stars.defaultProps = {
    count: 0
}

Stars.propTypes = {
    count: PropTypes.number
}

