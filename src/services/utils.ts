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

export const testData = [sprint1, sprint2];
