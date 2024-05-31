import axios from "axios";

const API_KEY = 'deacf80ba57a5ac302a1e51591a99c29';

//função para trazer todos os dados 
export async function getData(categoria, ordem, page) {


    //Tentativa
    try {

        const response = await axios.get(`https://api.themoviedb.org/3/${categoria}/${ordem}`, {
            params: {
                api_key: API_KEY,
                page: page,
                language: 'pt-BR'
            }
        });

        return response.data;

    }

    catch (error) {
       // console.log(error);

        return error.message;
    }

}

export async function getDataId(categoria, id) {
    //Tentativa
    try {

        const response = await axios.get(`https://api.themoviedb.org/3/${categoria}/${id}`, {
            params: {
                api_key: API_KEY,                
                language: 'pt-BR'
            }
        });

        return response.data;

    }

    catch (error) {
        console.log(error);

        return error.message;
    }

}