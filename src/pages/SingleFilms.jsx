import { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"


export default function SingleFilms() {
    const [film, setFilm] = useState(null)
    const { id } = useParams()
    const location = useLocation()

    useEffect(() => {
        if (location.state && location.state.film) {
            setFilm(location.state.film);
            return;
        }


        fetch('http://localhost:3030/api/films')
            .then(res => res.json())
            .then(films => {
                const foundFilm = films.find(f => f.id == id);
                setFilm(foundFilm);
            })
            .catch(error => console.error('Errore:', error));


    }, [id, location.state])
    if (!film) {
        return <div className="container"><p>Caricamento...</p></div>
    }

    return (
        <div className="container">
            <div className="card bg-dark border-0 col-6 mx-auto my-5">
                <img src={film.image} alt={film.title} className="card-img-top" style={{
                    height: '300px',
                    objectFit: 'contain',
                }} />
                <div className="card-body text-center text-secondary">
                    <h3 className="card-title text-danger">{film.title}</h3>
                    <h6 className="card-subtitle mb-2 ">{film.director}</h6>
                    <p className="card-text">{film.abstract}</p>
                </div>
            </div>
        </div>
    )
}