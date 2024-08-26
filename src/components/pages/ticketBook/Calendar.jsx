import React, { useState } from 'react';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import Calendar from 'react-calendar';
import { ContentCalendarWrapper } from './CalendarWrappers';

const ContentCalendar = ({ }) => {
  const thisMonth = format(new Date(), 'yyyy-MM');
  const [yearMonth, setYearMonth] = useState(thisMonth);

  const handleChangeYearMonth = (newYearMonth) => {
    setYearMonth(newYearMonth);
  };

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    handleChangeYearMonth(format(activeStartDate, 'yyyy-MM'));
  };

  return (
    <ContentCalendarWrapper>
      <Calendar
        locale="en-US" 
        formatDay={(locale, date) => moment(date).format('D')}
        formatYear={(locale, date) => moment(date).format('YYYY')}
        formatMonthYear={(locale, date) => moment(new Date(yearMonth)).format('YYYY년 MM월')}
        next2Label={null}
        prev2Label={null}
        onActiveStartDateChange={handleActiveStartDateChange}
        tileContent={({  }) => {
          return <></>
        }
        }
      />
    </ContentCalendarWrapper>
  );
};

export default ContentCalendar;
