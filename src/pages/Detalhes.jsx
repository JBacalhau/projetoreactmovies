import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getDataId } from "../api/tmdb";
import { GridLoader } from "react-spinners";

export function Detalhaes() {
    
    const { categoria, id } = useParams();
    const [item, setItem] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function showData() {
            const response = await getDataId(categoria, id);
            setItem(response);
            setLoading(false);
        }

        showData();//função acionada
    }, []);

    if (loading)
        return (
            <div className="flex items-center justify-center h-screen">
                <GridLoader color="#00B1E9" />

                </div>
        )
    return (
        <>
            <img
                className=" w-full h-[500px] object-cover object-top "
                src={`https://media.themoviedb.org/t/p/w1280${item.backdrop_path}`} alt="" />


            <div className="max-w-[850px] w-[90%] relative -mt-60 mb-32 bg-black bg-opacity-50 backdrop-blur-sm mx-auto p-6 flex flex-col md:flex-row rounded-lg items-center gap-7 ">
                <img
                    className="rounded-lg"
                    src={`https://media.themoviedb.org/t/p/w300${item.poster_path}`} alt="" />
                <div>

                    <h1 className='text-3xl font-bold lg:text-5xl'>{categoria == 'movie' ? item.title : item.name}</h1>
                    <ul className="list-disc list-inside my-4">
                        <li>Ano: {categoria == 'movie' ? item.release_date.substr(0, 4) : item.first_air_date.substr(0, 4)}</li>
                        <li>Avaliação: {item.vote_average.toFixed(1)}</li>
                    </ul>
                    <p>{item.overview}</p>

                    <button
                    //onClick={()=>history.go(-1)}
                    onClick={()=>navigate(-1)}
                    className="bg-brand-blue-200 text-black py-2 px-10 rounded-lg mt-5 hover:bg-brand-yellow-200">Voltar</button>
                </div>
            </div>

        </>
    )
}