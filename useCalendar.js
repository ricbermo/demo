import {useEffect} from 'react';
import {loadAllEvents} from 'helpers/calendar';
import {useRecoilState} from 'recoil';
import {calendarEventsState} from './atoms';

export function useCalendar() {
  const [events, setEvents] = useRecoilState(calendarEventsState);
  useEffect(() => {
    const setData = async () => {
      const data = await loadAllEvents();
      if (data?.length) {
        setEvents(data);
      }
    };

    setData();
  }, [setEvents]);

  return events;
}
