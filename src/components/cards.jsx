import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllCharacter } from "../redux/actions"
import Card from "./card"


const Cards = () => {

const dispatch = useDispatch()

const allCharacters = useSelector((state) => state.allCharacters)
// const { allCharacters} = useSelector((state) => state)



React.useEffect(() => {
    dispatch(getAllCharacter())
},[])


   return(
    <div>
        {
            allCharacters?.map((character) =>{
                return(
                    <Card
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    />
                )
            })
        }
    </div>
   ) 
}
export default Cards