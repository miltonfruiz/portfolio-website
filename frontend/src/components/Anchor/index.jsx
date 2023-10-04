import React from "react";
import "./style.css";

export default function Anchor({
  classCfg,
  hrefLink,
  targetPage,
  imgDirec,
  altLogo,
  width,
  height,
}) {
  return (
    <>
      <div className={classCfg}>
        <a href={hrefLink} target={targetPage}>
          <img src={imgDirec} alt={altLogo} width={width} height={height} />
        </a>
      </div>
    </>
  );
}
