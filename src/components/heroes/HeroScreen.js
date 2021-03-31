import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const {heroeId}= useParams();

    const heroe= getHeroById(heroeId);

    //si no encontroe.. redirijo
    if (!heroe) {
        return <Redirect to="/"/> 
    }

    const {superhero, publisher, alter_ego, first_appearance, characters}= heroe;

    return (
        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}
