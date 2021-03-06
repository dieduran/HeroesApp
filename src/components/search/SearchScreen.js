import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

// ---------------------------------
// instalar npm install query-string
// ---------------------------------

export const SearchScreen = ({history}) => {

    const location= useLocation();
    const {q=''}=queryString.parse(location.search);

    //por defaul puse q='' para que pase vacio
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    
    const {searchText}= formValues;
    //uso el useMemo para no actualizar todo el tiempo
    //const heroesFiltered=getHeroesByName(searchText);
    const heroesFiltered=useMemo(() => getHeroesByName(q), [q]) ;

    const handleSearch=(e)=>{
        e.preventDefault();
        history.push(`?q=${searchText}`)
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
                    { (q ==='')
                        &&  <div className="alert alert-info">
                                Search a hero.
                            </div>
                    }
                    { (q !=='') && (heroesFiltered.length===0)
                        &&  <div className="alert alert-danger">
                                There is no hero with {q}
                            </div>
                    }
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
