import { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"


export default function SingleFilms() {
    const [film, setFilm] = useState(null)
    const [reviews, setReviews] = useState(null)
    const { id } = useParams()
    const location = useLocation()

    useEffect(() => {
        if (location.state && location.state.film) {
            setFilm(location.state.film);
        } else {
            // Fetch del singolo film
            fetch('http://localhost:3030/api/films')
                .then(res => res.json())
                .then(films => {
                    const foundFilm = films.find(f => f.id == id);
                    setFilm(foundFilm);
                })
                .catch(error => console.error('Errore fetch film:', error));
        }

        // Fetch delle recensioni per questo film
        fetch(`http://localhost:3030/api/filmsReviews/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Errore fetch recensioni:', error));

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

            <div className="container mt-4">
                <h4 className="text-light mb-3">Recensioni</h4>
                {reviews && reviews.length > 0 ? (
                    <div className="row">
                        {reviews.map((review, index) => (
                            <div key={index} className=" col-lg-12 col-md-6 mb-3">
                                <div className="card bg-secondary">
                                    <div className="card-body">
                                        <h6 className="card-title">{review.name || 'Anonimo'}</h6>
                                        <p className="card-text">{review.text || review.review}</p>
                                        <small className="text-muted">
                                            Voto: {review.rating || review.vote}/5
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted">Nessuna recensione disponibile</p>
                )}
                <Link to={`/NewFilm/${id}`} className="text-decoration-none">
                    <div className="card border-dashed bg-transparent">
                        <div className="card-body text-center">
                            <i className="fas fa-plus fa-2x text-secondary"></i>
                            <p className="text-secondary textdecoration-none my-2">Add</p>
                        </div>
                    </div>
                </Link>

            </div>

        </div>


    )
}