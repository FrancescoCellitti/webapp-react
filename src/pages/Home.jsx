import { useState, useEffect } from "react";
import Card from "../components/card";
import { data } from "react-router-dom";
import Loader from "../components/loader";

export default function Home() {
    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:3030/api/films')
            .then(res => res.json())
            .then(data => {
                setFilms(data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            }
            )
            .catch(error => {
                console.error('Errore', error);
                setIsLoading(false);
            })

    }, [])


    return (
        <>
            <div className="container mt-2 rounded-5">
                <Loader isLoading={isLoading}>
                    <h1 className="text-danger px-4">Films</h1>

                    <div className="row">
                        {films.map((film, index) => (
                            <Card films={film} key={film.id}></Card>
                        ))}
                    </div>
                </Loader>

            </div>
        </>
    )
}