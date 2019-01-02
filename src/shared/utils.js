export const createGrid = (width, height) => {
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
};

export const sideBarMap = (width, height) => {
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
};

export const isHidden = () => {
  const mode = location.search.replace("?hidden=", "");
  const bool = mode == "true" ? true : false;
  return bool;
};

export const tilebg = tile => {
  const imgPath = "/images/sprite-map.png";
  const size = 64;
  const x = size * tile.position.x;
  const y = size * tile.position.y;
  return {
    background: `url(${imgPath})`,
    backgroundPosition: `-${x}px -${y}px`
  };
};

export const loadGrid = (x, y) => {
  const savedGrid = localStorage.getItem("grid");
  const saveData = JSON.parse(savedGrid);
  let grid = [];
  if (saveData) {
    grid = saveData;
  } else {
    grid = createGrid(x, y);
  }
  return grid;
};

export const saveGrid = grid => {
  const data = JSON.stringify(grid);
  localStorage.setItem("grid", data);
};

export const clearGrid = () => {
  localStorage.removeItem("grid");
};

export const loadSideBar = (w, h) => {
  const savedTiles = localStorage.getItem("sidebar");
  const saveData = JSON.parse(savedTiles);
  let sideBarMapData = {};
  if (saveData) {
    sideBarMapData = saveData;
  } else {
    sideBarMapData = sideBarMap(w, h);
  }
  return sideBarMapData;
};

export const saveSideBar = sideBar => {
  const data = JSON.stringify(sideBar);
  localStorage.setItem("sidebar", data);
};

export const loadPublishPath = defaultPath => {
  const savedTiles = localStorage.getItem("publishPath");
  const saveData = JSON.parse(savedTiles);
  const path = saveData ? saveData : defaultPath;
  return path;
};

export const savePublishPath = path => {
  const data = JSON.stringify(path);
  localStorage.setItem("publishPath", data);
};
