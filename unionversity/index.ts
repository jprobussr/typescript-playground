import studyGroups from './studyGroups';
import courses from './courses';

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type SearchEventsOptions = {
  query: string | number;
  eventType: 'courses' | 'groups';
};

const searchEvents = (options: SearchEventsOptions) => {
  const events: (Course | StudyGroup)[] =
    options.eventType === 'courses' ? courses : studyGroups;

  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === 'number') {
      return event.id === options.query;
    }

    if (typeof options.query === 'string') {
      return event.keywords.includes(options.query);
    }

    return false;
  });
};

let enrolledEvents: (Course | StudyGroup)[] = [];

const enroll = (event: Course | StudyGroup): void => {
  enrolledEvents.push(event);
}

enroll(studyGroups[0]);
console.log(enrolledEvents);
