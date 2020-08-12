import React from 'react';

export default function fullname({nom,prenom}) {
    return (
        <div className="text-title win">
        <h1 className="text-capitalize font-weight-bold">{nom}
            <strong className="text-blue">{prenom}</strong>
        </h1>
    </div>
    )
}

