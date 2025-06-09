import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

export default function Card({ data, type }) {
  const { title, image, follows } = data;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={`Album cover for ${title}`}
          className={styles.image}
        />
        <Chip
          label={`${follows} Follows`}
          className={styles.chip}
          size="small"
        />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}