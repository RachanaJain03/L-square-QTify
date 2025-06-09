import { CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";
import Styles from "./Section.module.css";

export default function Section({ title, data, filterSource, type }) {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters((prev) => [...prev, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1;

  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : true
  );

  return (
    <div>
      <div className={Styles.header}>
        <h3>{title}</h3>
        <h4 className={Styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>

      {showFilters && (
        <div className={Styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}

      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={Styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={Styles.wrapper}>
              {cardsToRender.map((ele) => (
                <Card key={ele.id} data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel data={cardsToRender} 
            renderComponent = {(data)=><Card data={data} type={type}/>} />
          )}
        </div>
      )}
    </div>
  );
} 