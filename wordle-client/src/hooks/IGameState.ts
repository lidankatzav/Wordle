export interface gameState { 
  boardArray: string[][];
  colorsArray: string[][];
  colorsMap: Map<string, string>;
  currentInput: {
      row: number;
      col: number;
  }
  showWelcome: boolean;
  showWin: boolean;
  showLost: boolean;
  wordOfGame: string
};