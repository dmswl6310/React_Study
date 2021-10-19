type Table = {
  no: number;
  state: number;
  highlight: boolean;
};

type HistoryData = {
  data: Table[];
  turn: number;
  gameState: number;
  clickedIdx: number;
};
