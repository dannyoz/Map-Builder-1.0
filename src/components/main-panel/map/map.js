import store from "@/store";
import { isHidden, loadGrid, saveGrid, tilebg } from "@/shared/utils";

export default {
  data() {
    return {
      grid: []
    };
  },

  mounted() {
    this.loadGrid();
    store.commit("setMapSize", {
      x: this.grid[0].length,
      y: this.grid.length
    });

    store.commit("setAlert", {
      type: "info",
      message: "app loaded"
    });
  },

  computed: {
    currentTile() {
      return store.state.currentTile;
    },
    mapSize() {
      return store.state.mapSize;
    },
    hidden() {
      return isHidden();
    },
    zoom() {
      return store.state.zoom;
    }
  },

  watch: {
    mapSize() {
      this.loadGrid();
    }
  },

  methods: {
    loadGrid() {
      this.grid = loadGrid(this.mapSize.x, this.mapSize.y);
    },
    drawTile(cell) {
      if (this.canDraw(cell.tiles) && this.currentTile) {
        const y = cell.gridPosition.y;
        const x = cell.gridPosition.x;
        this.grid[y][x].tiles.push(this.currentTile);
        saveGrid(this.grid);
      }
    },
    deleteTile(e, cell) {
      e.preventDefault();
      if (cell.tiles.length) {
        const y = cell.gridPosition.y;
        const x = cell.gridPosition.x;
        this.grid[y][x].tiles.splice(-1, 1);
        saveGrid(this.grid);
      }
    },
    tilebg(tile) {
      return tilebg(tile);
    },
    calculateGridSize() {
      const value = this.zoom / 100;
      return {
        transform: `scale(${value})`,
        width: `${64 * this.mapSize.x}px`
      };
    },
    canDraw(tiles) {
      const limit = 3;
      return tiles.length < limit;
    }
  }
};
