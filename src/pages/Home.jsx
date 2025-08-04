import { useState, useEffect } from "react";
import Card from "../components/card";
import { data } from "react-router-dom";


export default function Home() {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch('http://localhost:3030/api/films')
            .then(res => res.json())
            .then(data => setFilms(data))

    }, [])


    return (
        <>
            <div className="container bg-light mt-2 rounded-5">
                <h1 className="text-danger px-4">Films</h1>
                <div className="row">
                    {films.map((film, index) => (
                        <Card films={film} key={film.id}></Card>
                    ))}
                </div>

            </div>
        </>
    )
}