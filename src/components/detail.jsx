import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import React from "react"
import { getCharacterDetail, cleanDetail } from "../redux/actions"

const Detail = ()=>{

    const params = useParams() // .id me trae el id del detail/id
    const dispatch = useDispatch()
    const characterDetail = useSelector(state=>state.characterDetail) //

    React.useEffect(() =>{
        dispatch(getCharacterDetail(params?.id));
        return ()=>dispatch(cleanDetail())
}, [params?.id]);

    return(
        <div>
            <h1>{characterDetail?.name}</h1>
            <p>Estatus: {characterDetail?.status}</p>
            <p>Especie: {characterDetail?.species}</p>
            <p>Genero: {characterDetail?.gender}</p>
            <p>Origen: {characterDetail?.origin?.name}</p>
            <img src={characterDetail?.image} alt={characterDetail?.name} />
        </div>
    )
}

export default Detail