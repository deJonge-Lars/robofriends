import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5 white'>
            <img alt='robots' src={`https://robohash.org/${name}?100x100`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;