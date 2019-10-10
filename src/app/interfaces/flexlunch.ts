export interface FlexLunch {
  options: Option[];
}

export interface Option {
  name: string;
  url: string;
  times: Time[];
}

export interface Time {
  time: string;
  walk: Participant[];
  bus?: ShuttleBus;
  bike: Participant[];
}

export interface Participant {
  name: string;
}

export interface ShuttleBus {
  capacity: number;
  passangers: Participant[];
}

export type Mode = 'walk' | 'bike' | 'bus';
