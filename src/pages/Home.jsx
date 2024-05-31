import { Banner } from "../components/Banner"

import cardFilmes from '../assets/card-filmes.png';
import cardSeries from '../assets/card-series.png'
import { Link } from "react-router-dom";

export function Home() {

    return (
        <>
            <Banner titulo="Filmes & Séries" tipo="home">
                <p className="max-w-96">Lista de filmes e séries baseada na API The Movie DB.
                    Confira as produções mais populares do mundo.</p>
            </Banner>

            <div className="flex flex-col md:flex-row items-center my-12 justify-center gap-12 px-3">
                <Link to='/filmes' className="hover:-translate-y-1 transition">
                    <img src={cardFilmes} alt="" />
                </Link >

                <Link to='/series' className="hover:-translate-y-1 transition">
                    <img src={cardSeries} alt="" />
                </Link>
            </div>

        </>
    )
}