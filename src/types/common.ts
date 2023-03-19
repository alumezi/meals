export interface Choice {
  id: string;
  text: string;
  randomColorNumber: number;
}

export interface Challenge {
  id: string;
  firstChoice: Choice;
  secondChoice: Choice;
}
