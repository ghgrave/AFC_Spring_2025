export enum MonsterType {
  Human = "Human",
  Blob = "Blob",
  Undead = "Undead",
}


// interface creates functionality
export interface Monster {
  firstName: string;
  lastName? : string; //option
  age: number;
  type: MonsterType;
  moreInfo: string;
}


export interface SuperMonster extends Monster {
  powerLevel: number
}

export type MonsterTuple = [string, number, string]