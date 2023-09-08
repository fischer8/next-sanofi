export type ScoreObj = {
  id: number;
  value: number;
}

export type ScoreResult = {
    score: number;
    show: (a: boolean) => void;
}

export type Prop = {
  handleScore: (a: ScoreObj) => void;
  score: ScoreObj[];
  menuPage: number;
}

export type Info = {
  id: number,
  img: string,
  link: string,
  title: string,
}
