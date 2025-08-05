import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function NewFilm() {
    const [formData, setFormData] = useState({
        name: '',
        text: '',
        vote: 1
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { id } = useParams(); // ID del film dall'URL
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:3030/api/filmsReviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    movie_id: id // Collega la recensione al film
                })
            });

            const data = await response.json();

            if (response.status === 201) {
                console.log('Successo:', data);
                navigate(`/SingleFilms/${id}`); // Torna alla pagina del film
            } else if (response.status === 400) {
                console.error('Errore 400:', data);
                // Gestisci errore di validazione
            } else {
                console.error('Errore generico:', data);
                // Gestisci altri errori
            }
        } catch (error) {
            console.error('Errore di connessione:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card bg-dark border-secondary">
                        <div className="card-header">
                            <h3 className="text-danger mb-0">
                                <i className="fas fa-star me-2"></i>
                                Aggiungi Recensione
                            </h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {/* Nome recensore */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-light">
                                        <i className="fas fa-user me-2"></i>
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control bg-secondary text-light border-secondary"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Il tuo nome"
                                        required
                                    />
                                </div>

                                {/* Voto */}
                                <div className="mb-3">
                                    <label htmlFor="vote" className="form-label text-light">
                                        <i className="fas fa-star me-2 text-warning"></i>
                                        Voto (1-5)
                                    </label>
                                    <select
                                        className="form-select bg-secondary text-light border-secondary"
                                        id="vote"
                                        name="vote"
                                        value={formData.vote}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value={1}>⭐ 1 - Pessimo</option>
                                        <option value={2}>⭐⭐ 2 - Scarso</option>
                                        <option value={3}>⭐⭐⭐ 3 - Buono</option>
                                        <option value={4}>⭐⭐⭐⭐ 4 - Ottimo</option>
                                        <option value={5}>⭐⭐⭐⭐⭐ 5 - Eccellente</option>
                                    </select>
                                </div>

                                {/* Testo recensione */}
                                <div className="mb-4">
                                    <label htmlFor="text" className="form-label text-light">
                                        <i className="fas fa-comment me-2"></i>
                                        Recensione
                                    </label>
                                    <textarea
                                        className="form-control bg-secondary text-light border-secondary"
                                        id="text"
                                        name="text"
                                        rows="5"
                                        value={formData.text}
                                        onChange={handleInputChange}
                                        placeholder="Scrivi la tua recensione..."
                                        required
                                    />
                                    <div className="form-text text-muted">
                                        Condividi la tua opinione sul film
                                    </div>
                                </div>

                                {/* Pulsanti */}
                                <div className="d-flex gap-3">
                                    <button
                                        type="submit"
                                        className="btn btn-danger"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Invio...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-paper-plane me-2"></i>
                                                Pubblica Recensione
                                            </>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => navigate(`/SingleFilms/${id}`)}
                                    >
                                        <i className="fas fa-times me-2"></i>
                                        Annulla
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
