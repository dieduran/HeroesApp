import React from 'react'
import { Link } from 'react-router-dom'
//import './HeroCard.css'

export const HeroCard = ({id, superhero, publisher, alter_ego,first_appearance, characters}) => {
    return (
        //codigo original: tenia problemas con el tema de bootstrap
        <div className="card ms-3" style={{ maxWidth:540}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`}  alt={superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero} </h5>
                        <p className="text">{alter_ego}</p>
                        {
                            (alter_ego !== characters)
                                && <p className="card-text">{characters}</p>
                        }
                        <p className= "card-text">
                            <small className="text-muted">{first_appearance} </small>
                        </p>
                        <Link to ={`./hero/${id}`} className="profile-overview">
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        // <Link to={`./hero/${id}`} className="my-card">
        // <img src={`./assets/heroes/${id}.jpg`} className="img img-responsive" alt={superhero}/>
        // <div className="profile-name">{superhero}</div>
        // <div className="profile-position">{alter_ego}</div>
        // <div className="profile-overview">
        //     <div className="profile-overview">
        //         <div className="row">
        //             <div className="col-ms-4">
        //                 <h3>{publisher}</h3>
        //                 <p>Primera aparición: <br />{first_appearance}</p>
        //                 {
        //                     (alter_ego !== characters)
        //                     && <p>{characters}</p>
        //                 }
        //                 <Link to ={`./hero/${id}`} className="profile-overview">
        //                     Más..
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </Link>        
    )
}