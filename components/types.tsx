export type ScoreObj = {
  id: string;
  value: number;
}

export type Prop = {
  handleScore: (a: ScoreObj) => void;
  score: ScoreObj[];
  menuPage: number;
}

