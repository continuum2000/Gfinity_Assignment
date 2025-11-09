export interface fifaCard {
  [index: string]: any;
  createdAt: string;
  updatedAt: string;
  slug: string;
  slugLock: boolean;
  dataset: string;
  name: string;
  gameVersion: number;
  isGoalkeeper: boolean;
  cardImage: CardImage;
  isSbc: boolean;
  sbc: Sbc;
  position: string;
  rating: number;
  club: string;
  league: string;
  nation: string;
  strongFoot: string;
  skillMoves: string;
  weakFoot: string;
  age: string;
  height: string;
  workRatesAttacking: string;
  workRatesDefensive: string;
  statistics: Statistics;
  goalkeeperStatistics: GoalkeeperStatistics;
  sanityId: string;
  id: string;
}

export interface CardImage {
  alt: string;
  url: string;
  mimeType: string;
  id: string;
}

export interface Sbc {}

export interface Statistics {
  [index: string]: any;
  pace: Pace;
  shooting: Shooting;
  passing: Passing;
  dribbling: Dribbling;
  defense: Defense;
  physical: Physical;
}

export interface Pace {
  average: number;
  acceleration: number;
  sprintSpeed: number;
}

export interface Shooting {
  average: number;
  positioning: number;
  finishing: number;
  shotPower: number;
  longShot: number;
  volleys: number;
  penalties: number;
}

export interface Passing {
  average: number;
  vision: number;
  crossing: number;
  freeKick: number;
  shortPassing: number;
  longPassing: number;
  curve: number;
}

export interface Dribbling {
  average: number;
  agility: number;
  balance: number;
  reactions: number;
  ballControl: number;
  dribbling: number;
  composure: number;
}

export interface Defense {
  average: number;
  interceptions: number;
  heading: number;
  defAwareness: number;
  standingTackle: number;
  slidingTackle: number;
}

export interface Physical {
  average: number;
  jumping: number;
  stamina: number;
  strength: number;
  aggression: number;
}

export interface GoalkeeperStatistics {
  diving: Diving;
  handling: Handling;
  kicking: Kicking;
  reflexes: Reflexes;
  speed: Speed;
  positioning: Positioning;
}

export interface Diving {}

export interface Handling {}

export interface Kicking {}

export interface Reflexes {}

export interface Speed {}

export interface Positioning {}
