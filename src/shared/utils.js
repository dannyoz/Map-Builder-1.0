export default {
  createGrid(width, height) {
    const grid = [];
    for (let y = 0; y < height; y++) {
      const columns = [];
      for (let x = 0; x < width; x++) {
        const tile = {
          gridPosition: { x, y },
          tiles: []
        };
        columns.push(tile);
      }
      grid.push(columns);
    }
    return grid;
  },
  sideBarMap(width, height) {
    const grid = [];
    const tiles = [];
    for (let y = 0; y < height; y++) {
      const columns = [];
      for (let x = 0; x < width; x++) {
        const tile = {
          position: { x, y }
        };
        columns.push(tile);
        tiles.push(tile);
      }
      grid.push(columns);
    }
    return {
      grid,
      tiles
    };
  },
  isHidden() {
    const mode = location.search.replace("?hidden=", "");
    const bool = mode == "true" ? true : false;
    return bool;
  },
  tilebg(tile) {
    const imgPath = "/images/sprite-map.png";
    const size = 64;
    const x = size * tile.position.x;
    const y = size * tile.position.y;
    return {
      background: `url(${imgPath})`,
      backgroundPosition: `-${x}px -${y}px`
    };
  },
  loadGrid(x, y) {
    const savedGrid = localStorage.getItem("grid");
    const saveData = JSON.parse(savedGrid);
    let grid = [];
    if (saveData) {
      grid = saveData;
    } else {
      grid = this.createGrid(x, y);
    }
    return grid;
  },
  saveGrid(grid) {
    const data = JSON.stringify(grid);
    localStorage.setItem("grid", data);
  },
  clearGrid() {
    localStorage.removeItem("grid");
  },
  loadSideBar(w, h) {
    const savedTiles = localStorage.getItem("sidebar");
    const saveData = JSON.parse(savedTiles);
    let sideBarMap = {};
    if (saveData) {
      sideBarMap = saveData;
    } else {
      sideBarMap = this.sideBarMap(w, h);
    }
    return sideBarMap;
  },
  saveSideBar(sideBar) {
    const data = JSON.stringify(sideBar);
    localStorage.setItem("sidebar", data);
  }
};
