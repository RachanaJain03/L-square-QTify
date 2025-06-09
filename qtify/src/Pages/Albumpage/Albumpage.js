import React from "react"
import {useParams} from "react-router-dom"

export default function Albumpage(){
    const {albumId} = useParams()

    return <>{albumId}</>
}