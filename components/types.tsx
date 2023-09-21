export type ScoreObj = {
  id: number;
  value: number;
}

export type ShowInfo = {
  handleShow: (a: boolean) => void;
}

export type ModalCard = {
  num: string;
  title: string;
  description: string;
}

export type ScoreResult = {
  score: number;
  show: (a: boolean) => void;
}

export type PaduaProp = {
  handleScore: (a: ScoreObj) => void;
  score: ScoreObj[];
}

export type CapriniProp = {
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

export type AuthInfo = {
  crm: number;
  uf: string;
}
