export type User = {
  title?: string,
  email?: string,
  given_name?: string,
  family_name?: string,
};

export type SprintEvent = {
  id: string,
  name?: string,
  startDate?: Date,
  endDate?: Date,
  location?: string,
};

export interface IAppState {
  user?: User;
  verified?: string;
}

export interface IState {
  user?: User;
  verified?: string;
  set: boolean;
}

const sprint1: SprintEvent = {
  id: "1",
  name: "Event 1",
  location: "Remote",
};

const sprint2: SprintEvent = {
  id: "2",
  name: "Event 2",
  location: "Lisbon",
};

export const useQuery = (search: string): URLSearchParams => {
  return new URLSearchParams(search);
};
export const testData = [sprint1, sprint2];
