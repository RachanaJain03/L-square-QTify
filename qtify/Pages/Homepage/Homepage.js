import React from "react";
import {useOutletContent} from "react-router-dom"
import { fetchFilters } from "../../api/api";
import Hero from "../../component/Hero/Hero";
import Section from "../../component/Section/Section"
import styles from "./Homepage.module.css"

export default function HomePage(){
    const {data} = useOutletContent();
    const {newAlbums, topAlbums, songs, genres} = data;

    console.log("genres", genres);
    return(
        <>
         <Hero/>
         <div className={styles.wrapper}>
            <Section title="topAlbums" data={topAlbums} type = "albums"/>
            <Section title="newAlbums" data={newAlbums} type = "albums"/>
            <Section title="songs" data={songs} filterSource={fetchFilters} type = "songs"/>
         </div>
        </>
    )
}