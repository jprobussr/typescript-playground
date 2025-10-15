import courses from './courses';
import studyGroups from './studyGroups';

type Course = (typeof courses)[number];
type StudyGroup = (typeof studyGroups)[number];

type searchEventsOptions = {
  query: number | string;
  eventType: 'courses' | 'groups';
};

const searchEvents = (options: searchEventsOptions) => {
  const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;

  const results = events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === 'number') {
      return event.id === options.query
    }

    if (typeof options.query === 'string') {
      return event.keywords.includes(options.query)
    }

    return false;
  });

  return results;
};

const searchResults = searchEvents({query: 'art', eventType: 'courses'});
console.log('Search results include (courses with art)', searchResults);