import React from 'react';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { ContentCalendarWrapper } from './CalendarWrappers';

const ContentCalendar = ({ getTilePoster, yearMonth, activeStartDateChange, datas }) => {
  return (
    <ContentCalendarWrapper>
      <Calendar
        locale="en-US" 
        formatDay={(locale, date) => moment(date).format('D')}
        formatYear={(locale, date) => moment(date).format('YYYY')}
        formatMonthYear={(locale, date) => moment(new Date(yearMonth)).format('YYYY년 MM월')}
        next2Label={null}
        prev2Label={null}
        onActiveStartDateChange={activeStartDateChange}
        tileContent={({ date, view }) => {
          if (view === 'month') {
            return getTilePoster(date);
          }
        }}
      />
    </ContentCalendarWrapper>
  );
};

export default ContentCalendar;
