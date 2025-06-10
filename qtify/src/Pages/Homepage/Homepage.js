import React from "react";
import { useOutletContext } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material"; // ✅ Required imports

import { fetchFilters } from "../../api/api";
import Hero from "../../component/Hero/Hero";
import Section from "../../component/Section/Section";
import styles from "./Homepage.module.css";

export default function HomePage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums, songs, genres } = data;

  console.log("genres", genres);

  

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="albums" />
        <Section title="New Albums" data={newAlbums} type="albums" />
        <Section title="Songs" data={songs} filterSource={fetchFilters} type="songs" />
      </div>
    </>
  );
}