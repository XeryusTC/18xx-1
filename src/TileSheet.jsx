import React from "react";
import { connect } from "react-redux";

import "./TileSheet.scss";

import { sortTiles, tileColors } from "./util";
import tileDefs from "./data/tiles";
import { sidesFromTile } from "./atoms/Track";
import Svg from "./Svg";
import PageSetup from "./PageSetup";
import Hex from "./Hex";

import games from "./data/games";
import ColorContext from "./context/ColorContext";

import Cutlines from "./tilesheet/Cutlines";
import Pins from "./tilesheet/Pins";

import addIndex from "ramda/src/addIndex";
import append from "ramda/src/append";
import clone from "ramda/src/clone";
import compose from "ramda/src/compose";
import concat from "ramda/src/concat";
import curry from "ramda/src/curry";
import drop from "ramda/src/drop";
import filter from "ramda/src/filter";
import groupBy from "ramda/src/groupBy";
import includes from "ramda/src/includes";
import is from "ramda/src/is";
import keys from "ramda/src/keys";
import map from "ramda/src/map";
import prop from "ramda/src/prop";
import propOr from "ramda/src/propOr";
import reduce from "ramda/src/reduce";
import repeat from "ramda/src/repeat";
import split from "ramda/src/split";
import take from "ramda/src/take";
import unnest from "ramda/src/unnest";

const HEX_RATIO = 0.57735;

const getTile = curry((tiles, id) => ({
  ...(tiles[id] || tiles[split("|", id)[0]]),
  id
}));

const gatherIds = tiles => {
  return compose(unnest,
            map(id => Array((is(Object, tiles[id]) ?
                            propOr(1, "quantity", tiles[id]) :
                            tiles[id])).fill(id)))(keys(tiles));
}

const gatherTiles = compose(sortTiles,
                            map(getTile(tileDefs)),
                            gatherIds);

const rotate = sides => map(s => (s % 6) + 1, sides);

const tileAbove = (page, i) => {
  let target = i - 4;
  return target >= 0 && page[target];
};

const tileBelow = (page, i) => {
  let target = i + 4;
  return target < page.length && page[target];
};

const pageTiles = (perPage, pages, tiles) => {
  if (tiles.length === 0) return pages;

  let current = take(perPage, tiles);
  let rest = drop(perPage, tiles);

  while(rest.length > 0 && rest[0] === null) {
    rest = drop(1, rest);
  }

  return pageTiles(perPage, append(current, pages), rest);
};

const TileSheet = ({ match, paper, layout, hexWidth, bleed }) => {
  let game = games[match.params.game];

  let pageWidth = paper.width - (paper.margins * 2);
  let pageHeight = paper.height - (paper.margins * 2);

  let height = hexWidth;
  let bleedHeight = hexWidth + 20;

  let width = height * HEX_RATIO * 2;
  let bleedWidth = bleedHeight * HEX_RATIO * 2;

  let perRow = 4;
  let rowsPerPage = 6;
  let clipPath = bleed ? "hexBleedClip" : "hexClip";
  switch(layout) {
  case "individual":
    perRow = bleed ?
      (Math.floor(pageWidth / bleedWidth)) :
      (Math.floor((pageWidth + 12.5) / (width + 12.5)));
    rowsPerPage = bleed ?
      (Math.floor(pageHeight / bleedHeight)) :
      (Math.floor((pageHeight + 12.5) / (height + 12.5)));
    break;
  case "offset":
    perRow = Math.floor((pageWidth - 20 - (width/2)) / (width));
    rowsPerPage = Math.floor((pageHeight - (bleed ? 20 : 0)) / (height));
    clipPath = bleed ? "hexBleedClipOffset" : "hexClip";
    break;
  case "die":
    pageWidth = 800;
    pageHeight = 1050;
    break;
  default:
    break;
  }
  let perPage = perRow * rowsPerPage;

  let tiles = gatherTiles(game.tiles);

  let groupedByColor = groupBy(prop("color"), tiles);

  let separatedTiles = compose(
    reduce((tiles, color) => {
      if (tiles.length === 0) return color;

      switch(layout) {
      case "offset":
        let odd = Math.ceil(((tiles.length + 1) % perPage) / perRow) % 2 !== 0;

        if (odd) {
          return concat(tiles, concat(repeat(null, 4), color));
        } else {
          return concat(tiles, concat(repeat(null, 5), color));
        }
      case "die":
        return concat(tiles, concat(repeat(null, 4), color));
      default:
        return concat(tiles, color);
      }
    }, []),
    // intersperse(repeat(null, layout === "offset" ? 5 : 4)),
    filter(x => x && x.length > 0),
    map(color => groupedByColor[color])
  )(tileColors);

  let pagedTiles = pageTiles(perPage, [], separatedTiles);

  let getX = num => num % perRow;
  let getY = num => Math.floor(num / perRow);

  let pageNodes = addIndex(map)((page, pageIndex) => {
    let sides = [];
    let tileNodes = addIndex(map)(
      (hex, i) => {
        if (hex === null) {
          sides.push([]);
          return null;
        }

        let rotation = 0;

        if (layout === "die" || layout === "individual") {
          let currentSides = sidesFromTile(hex);
          let pastSides = [];
          if (i - perRow >= 0) {
            pastSides = sides[i - perRow];
          }

          if (layout === "die") {
            if (tileAbove(page, i) && tileBelow(page, i)) {
              clipPath = "hexBleedClipDie";
            } else if (tileAbove(page, i)) {
              clipPath = "hexBleedClipDieBottom";
            } else if (tileBelow(page, i)) {
              clipPath = "hexBleedClipDieTop";
            } else {
              clipPath = "hexBleedClip";
            }
          }

          if (pastSides.length > 0) {
            if (includes(1, pastSides)) {
              // Track above us has track on the bottom, if we have track on the
              // top do nothing

              if (includes(1, currentSides) && includes(4, currentSides)) {
                // Nothing
              } else if (includes(2, currentSides) && includes(5, currentSides)) {
                rotation = 120;
                currentSides = rotate(rotate(currentSides));
              } else if (includes(3, currentSides) && includes(6, currentSides)) {
                rotation = 60;
                currentSides = rotate(currentSides);
              } else {
                while (!includes(4, currentSides)) {
                  rotation += 60;
                  currentSides = rotate(currentSides);
                  if (rotation >= 360) {
                    break;
                  }
                }
              }
            } else {
              while (includes(4, currentSides)) {
                rotation += 60;
                currentSides = rotate(currentSides);
                if (rotation >= 360) {
                  break;
                }
              }
            }
          }

          sides.push(clone(currentSides));
        }

        let x = bleed ?
            (bleedWidth / 2) + ((pageWidth - (perRow * bleedWidth)) / 2) + (getX(i) * bleedWidth) :
            (width / 2) + ((pageWidth - (perRow * (width + 12.5))) / 2) + (getX(i) * (width + 12.5));
        let y = bleed ?
            (bleedHeight / 2) + ((pageHeight - (rowsPerPage * bleedHeight)) / 2) + (getY(i) * bleedHeight) :
            (height / 2) + (((pageHeight + 12.5) - (rowsPerPage * (height + 12.5))) / 2) + (getY(i) * (height + 12.5));

        switch(layout) {
        case "offset":
          let extraX = pageWidth - (perRow * width) - (width / 2) - (bleed ? 20 : 0);
          let extraY = pageHeight - (rowsPerPage * height) - (bleed ? 20 : 0);
          if (getY(i) % 2 !== 0) {
            x = (((bleed ? bleedWidth : width) / 2) + (width / 2)) + (extraX / 2) + (getX(i) * width);
          } else {
            x = ((bleed ? bleedWidth : width) / 2) + (extraX / 2) + (getX(i) * width);
          }
          y = ((bleed ? bleedHeight : height) / 2) + (extraY / 2) + (getY(i) * height);
          break;
        case "die":
          let extra = pageWidth - (4 * width) - (3 * 25);
          x = (width / 2) + (extra / 2) + (getX(i) * (width + 25));
          y = (25 + 37.5 + (height / 2)) + (getY(i) * height);
          break;
        default:
          break;
        }

        return (
          <g clipPath={`url(#${clipPath})`} transform={`translate(${x} ${y})`} key={`${hex.id}-${i}`}>
            <g transform={`rotate(${rotation})`}>
              <Hex hex={hex} id={hex.id} clipPath="hexBleedClip" />
            </g>
          </g>
        )
      },
      page
    );

    let pins = layout === "die" ? <Pins/> : null;

    return (
      <div className="TileSheet--Page"
           key={`page-${pageIndex}`}>
        <Svg
          style={{
            width: `${pageWidth * 0.01}in`,
            height: `${pageHeight * 0.01}in`,
          }}
          viewBox={`0 0 ${pageWidth} ${pageHeight}`}
        >
          <Cutlines/>
          {pins}
          {tileNodes}
        </Svg>
      </div>
    );
  }, pagedTiles);

  return (
    <ColorContext.Provider value="tile">
      <div className="PrintNotes">
        <div>
          <p>
            Tiles are meant to be printed in <b>portait</b> mode
          </p>
        </div>
      </div>
      <div className={`tileSheet tileSheet--${layout}`}>
        {pageNodes}
        <PageSetup paper={{width:850, height:1100, margins:25}}
                   landscape={false}/>
      </div>
    </ColorContext.Provider>
  );
};

const mapStateToProps = state => ({
  layout: state.config.tiles.layout,
  paper: state.config.paper,
  hexWidth: state.config.tiles.width,
  bleed: state.config.tiles.bleed
});

export default connect(mapStateToProps)(TileSheet);
