import { Link } from 'react-router-dom'
import star from '../assets/star.svg'
import noImage from '../assets/no-image.jpg'
import { useEffect, useState } from 'react'
import { getData } from '../api/tmdb';


export function List({ categoria }) {

    const [items, setItems] = useState([]);

    const [ordem, setOrdem] = useState('popular');

    const [page, setPage] = useState(1);

    useEffect(() => {

        async function showData() {
            //console.log(await getData());


            const response = await getData(categoria, ordem, page); // função que acessa a API

            //Se a resposta do getData tiver resultado
            if (response.results) {
                setItems(response.results); //colocando no estado o valor vindo da api
            }

            else {
                console.log("erro")
            }
        }

        showData();

    }, [ordem, page]);

    function alterarOrdem(valorOrdem) {
        setOrdem(valorOrdem);
    }

    // function shwoBtn() {
    //     if (categoria == 'movie') {
    //         return <><button onClick={() => alterarOrdem('now_playing')} className={`border border-brand-blue-200 rounded-xl px-3 py-1 text-xs
    //         hover:text-white hover:bg-brand-blue-200 transition ${ordem == 'now_playing' && 'bg-brand-blue-200'}`}>Em cartaz</button>

    //             <button onClick={() => alterarOrdem('upcoming')} className={`border border-brand-blue-200 rounded-xl px-3 py-1 text-xs
    //         hover:text-white hover:bg-brand-blue-200 transition ${ordem == 'upcoming' && 'bg-brand-blue-200'}`}>Em breve</button>
    //         </>
    //     }

    //     else if (categoria == 'tv') {
    //         return <>
    //             <button onClick={() => alterarOrdem('on_the_air')} className={`border border-brand-blue-200 rounded-xl px-3 py-1 text-xs 
    //         hover:text-white hover:bg-brand-blue-200 transition ${ordem == 'on_the_air' && 'bg-brand-blue-200'}`}>Novidades</button>

    //             <button onClick={() => alterarOrdem('airing_today')} className={`border border-brand-blue-200 rounded-xl px-3 py-1 text-xs
    //         hover:text-white hover:bg-brand-blue-200 transition ${ordem == 'airing_today' && 'bg-brand-blue-200'}`}>No exibição</button>
    //         </>
    //     }
    // }

    function nextPage(){
        setPage(page+1); //atualizando o estado "page adicionando +1"
        
    }

    function prevPage(){//atualizando o estado "page diminuindo -1"
        setPage(page-1);
        
    }

    return (

        <div className='max-w-[1140px] mx-auto py-14 px-3 box-content'>

            <div className='flex justify-between mb-3 flex-col items-center gap-y-3 md:flex-row'>

                <div className=' flex gap-x-2'>
                    <button onClick={() => alterarOrdem('popular')} className={` border border-brand-blue-200 rounded-xl px-3 py-1 text-xs
                 hover:text-white hover:bg-brand-blue-200 transition ${ordem == 'popular' && 'bg-brand-blue-200'}`}>Popular</button>

                    <button onClick={() => alterarOrdem('top_rated')} className={`border border-brand-blue-200 rounded-xl px-3 py-1 text-xs
                 hover:text-white hover:bg-brand-blue-200 transition ${ordem == 'top_rated' && 'bg-brand-blue-200'}`}>Mais bem avaliados</button>

                    {
                        //renderização condicional
                        categoria == 'movie' &&
                        <><button onClick={() => alterarOrdem('now_playing')} className={`border border-brand-blue-200 rounded-xl px-3 py-1 text-xs
                    hover:text-white hover:bg-brand-blue-200 transition ${ordem == 'now_playing' && 'bg-brand-blue-200'}`}>Em cartaz</button>

                            <button onClick={() => alterarOrdem('upcoming')} className={`border border-brand-blue-200 rounded-xl px-3 py-1 text-xs
                    hover:text-white hover:bg-brand-blue-200 transition ${ordem == 'upcoming' && 'bg-brand-blue-200'}`}>Em breve</button>
                        </>
                    }

                    {
                        //renderização condicional
                        categoria == 'tv' &&
                        <>
                            <button onClick={() => alterarOrdem('on_the_air')} className={`border border-brand-blue-200 rounded-xl px-3 py-1 text-xs 
            hover:text-white hover:bg-brand-blue-200 transition ${ordem == 'on_the_air' && 'bg-brand-blue-200'}`}>No ar</button>

                            <button onClick={() => alterarOrdem('airing_today')} className={`border border-brand-blue-200 rounded-xl px-3 py-1 text-xs
            hover:text-white hover:bg-brand-blue-200 transition ${ordem == 'airing_today' && 'bg-brand-blue-200'}`}>Exibindo hoje</button>
                        </>
                    }

                    {/* {shwoBtn()} */}

                </div>

                <div className='flex gap-x-2'>
                    <button
                    disabled={page==1}
                    onClick={() => prevPage()} 
                    className={` border border-brand-blue-200 rounded-xl px-3 py-1 text-xs
                 hover:text-white hover:bg-brand-blue-200 transition disabled:opacity-20 disabled:pointer-events-none`}>Voltar</button>
                 

                    <button onClick={() => nextPage()} className={` border border-brand-blue-200 rounded-xl px-3 py-1 text-xs
                 hover:text-white hover:bg-brand-blue-200 transition`}>Avançar</button>

                </div>
            </div>

            <div className=' flex gap-7 flex-wrap justify-center '>


                {items.map((item) =>
                    //console.log(item.title) * foi alterado o tamanho da imagempara 't/p/w500'
                    <Link to={`/detalhes/${categoria}/${item.id}`} className='inline-block hover:brightness-125 hover:-translate-y-1 transition' key={item.id}>
                        <div className='relative'>
                            <img
                                className=" w-[360px] h-[200px] object-cover rounded-lg opacity-50"
                                src={item.backdrop_path ? `https://media.themoviedb.org/t/p/w500${item.backdrop_path}` : noImage} alt="" />

                            <div className='absolute bottom-3 left-3'>
                                <h2 className='font-bold text-2xl'>{categoria == 'movie' ? item.title : item.name}</h2>
                                <h3 className=' font-bold'>Ano: {categoria == 'movie' ? item.release_date.substr(0, 4) : item.first_air_date.substr(0, 4)}</h3>
                                <span className='flex gap-x-3 text-brand-yellow-200 font-bold'>
                                    <img src={star} alt="" />
                                    {item.vote_average.toFixed(1)}
                                </span>
                            </div>
                        </div>
                    </Link>

                    // passar o link em componente
                )}

            </div>

        </div>
    )
}