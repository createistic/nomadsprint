import { SprintEvent } from "./utils";

export const getRecommendations = (myEventIds: string[], events: SprintEvent[]): SprintEvent[] => {
  let matches: SprintEvent[] = [];
  // Loop sprints
  myEventIds.forEach((id) => {
    // Check keywords for matching interests in other events
    const myEvent = events.filter((ev) => ev.id === id)[0];
    const existingKeys = myEvent.keywords || [];
    const newMatches = events.filter(
      (e) => e.keywords && e.keywords.some((k) => existingKeys.includes(k))
    );
    matches = matches.concat(newMatches);
  });

  return matches.filter((e) => !myEventIds.includes(e.id));
};
