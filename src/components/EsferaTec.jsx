import React from "react";
import allIcons from "simple-icons";
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";

const EsferaTec = () => {
  const tagCanvasOptions = {
    clickToFront: 800,
    depth: 1,
    imageScale: 2,
    dragControl: true,
    initial: [0.1, -0.1],
    maxSpeed: 0.03,
    minSpeed: 0.01,
    outlineColour: "#0000",
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false,
    lock: null,
  };

  const iconSlugs = [
    "python",
    "selenium",
    "pandas",
    "numpy",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "cypress",
    "git",
    "jira",
    "github",
    "figma",
    "canva",
  ];
  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug),
  }));
  return (
    <div>
      <IconCloud
        key={v4()}
        id={"icon"}
        minContrastRatio={1}
        iconSize={65}
        backgroundHexColor={"#111111"}
        fallbackHexColor={"#111111"}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
      />
    </div>
  );
};

export default EsferaTec;
