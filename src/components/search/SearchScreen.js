import React from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

// ---------------------------------
// instalar npm install query-string
// ---------------------------------

export const SearchScreen = ({history}) => {

    const location= useLocation();
    console.log(location.search);
    //console.log(queryString.parse(location.search));
    const {q=''}=queryString.parse(location.search);

    //por defaul puse q='' para que pase vacio
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    
    const {searchText}= formValues;
    
    const heroesFiltered = heroes;

    const handleSearch=(e)=>{
        e.preventDefault();
        console.log(searchText)
        history.push(`?q=${searchText}`)

        // heroesFiltered=heroes.filter(({id})=>{
        //         id===searchText})
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>   
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange= {handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        heroesFiltered.map( hero =>(
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
