import React from "react";
import { Tabs, Tab } from "@mui/material";
import styles from "./Filters.module.css"; 

function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  function allyProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary)",
          },
        }}
      >
        {filters.map((ele, idx) => (
          <Tab
            key={idx}
            className={styles.tab} 
            label={ele.label}       
            {...allyProps(idx)}
          />
        ))}
      </Tabs>
    </div>
  );
}

export default Filters;
