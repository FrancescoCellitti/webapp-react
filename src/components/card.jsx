import { Link } from "react-router-dom"

export default function Card({ films }) {
    return (
        <>
            <div className="col col-md-3 col-sm-6">
                <div className="card card-img p-1 my-2 border-0" style={{ minHeight: "400px", height: "200px", position: "relative", overflow: "hidden" }}>
                    <img
                        src={films.image}
                        alt={films.image}
                        style={{
                            height: "400px",
                        }} />
                </div>
                <div className="card-info card-img p-1 my-2 border-0 text-secondary">
                    <ul className="list-unstyled">
                        <li><Link to={`/SingleFilms/${films.id}`} state={{ film: films }}><h3>{films.title}</h3></Link></li>
                        <li>{films.director}</li>
                        <li>{films.abstract}</li>
                        <li>{films.release_year}</li>
                    </ul>
                </div>




            </div>
        </>

    )
}