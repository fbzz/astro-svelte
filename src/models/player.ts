export interface PlayerInfo {
  name: string;
  team: string;
  position: number;
}

export interface GameInfo {
  player1: PlayerInfo;
  player2: PlayerInfo;
  result: { player1: number; player2: number };
  date: string;
}

export interface SectionNew {
  title: string;
  text: string;
  author: string;
}

export interface Tournament {
  players: PlayerInfo[];
  games: GameInfo[];
  news: SectionNew[];
}
