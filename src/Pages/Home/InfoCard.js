import React from 'react';

const InfoCard = ({ infoCard }) => {

    const { img, title, body, bgClass } = infoCard

    return (
        <div className=''>
            <div className={`card lg:card-side bg-accent shadow-xl text-white p-5 ${bgClass}`}>
                <figure>
                    <img src={img} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;