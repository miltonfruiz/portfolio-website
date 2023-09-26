import React from "react";
import "./style.css";

export default function Anchor({
  classCfg,
  hrefLink,
  targetPage,
  imgDirec,
  altLogo,
}) {
  return (
    <>
      <div className={classCfg}>
        <a href={hrefLink} target={targetPage}>
          <img src={imgDirec} alt={altLogo} />
        </a>
      </div>
    </>
  );
}
