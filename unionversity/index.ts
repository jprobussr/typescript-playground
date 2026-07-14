import studyGroups from "./studyGroups";
import courses from "./courses";



type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: "courses";
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: "groups";
};

type SearchEventsOptions = {
  query: string | number;
  eventType: "courses" | "groups";
};

const searchEvents = (options: SearchEventsOptions) => {
  const events = options.eventType === "courses" ? courses : studyGroups;

  const results = events.filter((event) => {
    if (typeof options.query === "number") {
      return event.id === options.query;
    }

    const query = options.query.toLowerCase();
    return event.title.toLowerCase().includes(query);
  });
  return results;
};

const groupResults = searchEvents({
  query: 2,
  eventType: "groups",
});

console.log(groupResults);
