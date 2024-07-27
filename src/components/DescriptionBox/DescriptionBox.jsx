import React from "react";
import q from "./DescriptionBox.module.css";

const DescriptionBox = () => {
  return (
    <div className={q.descriptionBox}>
      <div className={q.navigator}>
        <div className={q.navBox}>Description</div>
        <div className={q.fade}>Reviews (41)</div>
      </div>
      <div className={q.description}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
          eligendi! Corrupti temporibus assumenda esse! Dolores enim distinctio
          unde non ratione similique molestiae, sunt illo animi maiores eveniet
          vel aspernatur amet.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          itaque maiores vero, modi beatae illo. Cum quasi fugiat ratione
          quaerat asperiores, corrupti soluta aspernatur provident illum,
          expedita, sequi officiis quae.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
