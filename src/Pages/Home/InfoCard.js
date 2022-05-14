import React from 'react';

const InfoCard = ({ infoCard }) => {

    const { img, title, body, bgClass } = infoCard

    return (
        <div className=''>
            <div class={`card lg:card-side bg-accent shadow-xl text-white p-5 ${bgClass}`}>
                <figure>
                    <img src={img} alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;