export type MonsterData = {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
};

export type SelectedMonsterProps = {
  selectedMonster: MonsterData;
};
