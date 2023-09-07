export type ScoreObj = {
  id: number;
  value: number;
}

export type Prop = {
  handleScore: (a: ScoreObj) => void;
  score: ScoreObj[];
  menuPage: number;
}

