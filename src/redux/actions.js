import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL, CLEAN_DETAIL } from "./action-types";
import axios from "axios";


const URL_BASE = 'https://rickandmortyapi.com/api/character'

export const getAllCharacter = ()=> {
    return async (dispatch)=>{
        try {
            const {data} = await axios(URL_BASE)
            return dispatch({type: GET_ALL_CHARACTERS, payload: data.results})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getCharacterDetail = (id)=>{
    return (dispatch) => {
        axios(`${URL_BASE}/${id}`)
        .then(({data}) => {
            return dispatch({type: GET_CHARACTER_DETAIL, payload: data});
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

export const cleanDetail = () => {
    return{
        type: CLEAN_DETAIL
    }
}