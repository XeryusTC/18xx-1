import React from "react";
import { connect } from "react-redux";

import map from "ramda/src/map";
import range from "ramda/src/range";

const HEX_RATIO = 0.57735;

const STROKE = {
  stroke: "gray",
  strokeDasharray: "4 2",
  strokeWidth: "1"
};

const HorizontalLines = ({ pageWidth, width, height, extraY, rowsPerPage }) => {
  let indexes = range(0,rowsPerPage + 1);

  return map(index => <line x1={-width}
                      y1={(extraY/2) + 10 + (index * height)}
                      x2={pageWidth + width}
                      y2={(extraY/2) + 10 + (index * height)}
                      {...STROKE} />, indexes);
};

const ForwardLines = ({ bleedWidth, height, width, extraY, perRow, rowsPerPage }) => {
  let num = (Math.ceil(rowsPerPage / 2)) + perRow + 1;
  let offset = -(rowsPerPage / 2);
  return map(index => <line x1={(bleedWidth / 2) + -12 + ((index + offset - 0.5) * width)}
                      y1={20 + ((rowsPerPage + 1) * height)}
                      x2={(bleedWidth / 2) + (index * width)}
                      y2={0}
                      {...STROKE} />, range(0,num));
};

const BackwardLines = ({ bleedWidth, height, width, extraY, perRow, rowsPerPage }) => {
  let num = (Math.ceil(rowsPerPage / 2)) + perRow;
  let offset = -(rowsPerPage / 2);
  return map(index => <line x1={(bleedWidth / 2) + ((index + offset) * width)}
                      y1={0}
                      x2={(bleedWidth / 2) + 12 + ((index + offset + 3.5) * width)}
                      y2={20 + ((rowsPerPage + 1) * height)}
                      {...STROKE} />, range(0,num));
};

const Cutlines = ({ bleed, cutlines, hexWidth, layout, paper }) => {
  if (!cutlines || layout === "die") {
    return null;
  }

  let pageWidth = paper.width - (paper.margins * 2);
  let pageHeight = paper.height - (paper.margins * 2);

  let perRow = 4;
  let rowsPerPage = 6;
  let perPage = perRow * rowsPerPage;

  let height = hexWidth;
  let bleedHeight = hexWidth + 20;

  let width = height * HEX_RATIO * 2;
  let bleedWidth = bleedHeight * HEX_RATIO * 2;

  let extraX = pageWidth - (perRow * width) - (width / 2) - (bleed ? 20 : 0);
  let extraY = pageHeight - (rowsPerPage * height) - (bleed ? 20 : 0);

  let attributes = { pageWidth, pageHeight,
                     perRow, rowsPerPage, perPage,
                     height, bleedHeight,
                     width, bleedWidth,
                     extraX, extraY };

  return [
    <HorizontalLines {...attributes} />,
    <ForwardLines {...attributes} />,
    <BackwardLines {...attributes} />
  ];
};

const mapStateToProps = state => ({
  bleed: state.config.tiles.bleed,
  cutlines: state.config.tiles.cutlines,
  hexWidth: state.config.tiles.width,
  layout: state.config.tiles.layout,
  paper: state.config.paper,
});

export default connect(mapStateToProps)(Cutlines);
