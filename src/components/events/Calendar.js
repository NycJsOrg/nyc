import React from 'react';
import styled from 'styled-components';

import format from 'date-fns/format';
import isPast from 'date-fns/is_past'
import isToday from 'date-fns/is_today';
import isFirstDayOfMonth from 'date-fns/is_first_day_of_month'
import getMonth from 'date-fns/get_month';

import TrackableLink from '../TrackableLink';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
`;

const WeekDay = styled.div`
  width: calc(100% / 7);
  font-weight: 400;
  margin-bottom: 0.8rem;
`;

const Day = styled.div`
  height: 6rem;
  width: calc(100% / 7);
  box-sizing: border-box;
  border-top: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;
  padding: 0.4rem 0.4rem 0.2rem 0.4rem;
  display: flex;
  justify-content: space-between;
  
  ${props => !!props.isPast && 'opacity: 0.25;'}
  ${props => !!props.isToday && 'opacity: 1; font-weight: 400; color: red;'}
  
  &:nth-child(7n) {
    border-right: 1px solid #eaeaea;
  }
`;

const DateLabel = styled.div`
  align-self: flex-end;
  font-size: 1.2rem;
`;

const EventIcons = styled.div`
`;

const Calendar = ({ dateRange, events }) => {
  const renderWeekDay = (day) => (
    <WeekDay key={day}>
      { day }
    </WeekDay>
  );

  const renderEvents = (date) =>
    events
      .filter((e) => format(date, 'YYYY-MM-DD') === e.fields.date)
      .map((event) => {
        const { badge, communityName } = event.fields.community.fields;

        return (
          <TrackableLink href={event.fields.url} target="_blank" key={event.fields.url}>
            <img src={badge.fields.file.url} alt={communityName} width={40} height={40}/>
          </TrackableLink>
        );
      });

  const renderDay = (date, index) => (
    <Day key={index} isToday={isToday(date)} isPast={isPast(date)}>
      <EventIcons>
        { renderEvents(date) }
      </EventIcons>

      <DateLabel>
        { isFirstDayOfMonth(date) && MONTHS[getMonth(date)] }
        &nbsp;
        { date.getDate() }
      </DateLabel>
    </Day>
  );

  return (
    <Container>
      { DAYS.map(renderWeekDay) }
      { dateRange.map(renderDay) }
    </Container>
  );
};

export default Calendar;