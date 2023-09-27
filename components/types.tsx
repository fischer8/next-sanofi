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
  show: () => void;
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

export type CardFav = {
  cardInfo: Info;
  handleFav: (a: number, b: boolean) => void;
  handleLoading: (b: boolean) => void;
}

export type Info = {
  id: number,
  img: string,
  link: string,
  title: string,
  desc: string,
  fav?: boolean
}

export type AuthInfo = {
  crm: number;
  uf: string;
}
