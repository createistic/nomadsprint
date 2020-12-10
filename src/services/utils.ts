export type User = {
  title?: string,
  email?: string,
  given_name?: string,
  family_name?: string,
  events: string[],
};

export type SprintEvent = {
  id: string,
  name?: string,
  startDate?: Date,
  endDate?: Date,
  location?: string,
  funding?: number,
  keywords?: string[],
};

export interface IAppState {
  user: User;
  verified?: string;
  eventData: SprintEvent[];
}

const sprint1: SprintEvent = {
  id: "1",
  name: "Sponsored App Hack",
  location: "Remote",
  funding: 2000,
  keywords: ["development"],
};

const sprint2: SprintEvent = {
  id: "2",
  name: "Logo Design",
  location: "Lisbon",
  keywords: ["design"],
};

const sprint3: SprintEvent = {
  id: "3",
  name: "SaltEdge Design Spint",
  location: "Ottawa",
  keywords: ["design"],
};

export const useQuery = (search: string): URLSearchParams => {
  return new URLSearchParams(search);
};

export const bgUrls = [
  "https://images.unsplash.com/photo-1512757776214-26d36777b513?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1440778303588-435521a205bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTJ8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1496531693211-31c5234a5ea9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzh8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1470074558764-4e577e98bc85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODd8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1483247416020-58799b6de4c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTJ8fHRyYXZlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
];

export const testData = [sprint1, sprint2, sprint3];
