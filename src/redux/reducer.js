import { CLEAN_DETAIL, GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL } from "./action-types";


const initialState = {
    allFavorites: [],
    allCharacters: [],
    myFavorites: [],
    characterDetail: {}
};

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_ALL_CHARACTERS: 
        return{
            ...state,
            allCharacters: action.payload
        }
        case GET_CHARACTER_DETAIL:
            return{
                ...state,
                characterDetail: action.payload
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                characterDetail: {}
            }
        default:
            return {...state}
    }
}
export default reducer
   