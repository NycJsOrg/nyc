import React from 'react';
import styled from 'styled-components';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

import addWeeks from 'date-fns/add_weeks';
import startOfWeek from 'date-fns/start_of_week';
import format from 'date-fns/format';
import isPast from 'date-fns/is_past'
import isToday from 'date-fns/is_today';
import isFirstDayOfMonth from 'date-fns/is_first_day_of_month'
import endOfWeek from 'date-fns/end_of_week';
import eachDay from 'date-fns/each_day';
import getMonth from 'date-fns/get_month';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 4rem;
  margin-top: 1rem;
`;

const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
`;

const WeekDay = styled.div`
  width: calc(100% / 7);
  font-weight: bold;
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
  ${props => !!props.isToday && 'opacity: 1; font-weight: bold; color: red;'}
  
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

class Events extends React.Component {

  state = {
    loading: true,
    events: []
  };

  constructor() {
    super();

    const start = startOfWeek(new Date());
    const end = endOfWeek(addWeeks(start, 7));

    this.dateRange = eachDay(start, end);
  }

  componentDidMount() {
    this.fetchEvents(this.props);
  }

  fetchEvents = () => {
    const query = {
      'content_type': 'event'
    };

    window.client.getEntries(query)
      .then(response => this.setState({
        events: response.items,
        loading: false
      }));
  };

  renderWeekDay = (day) => (
    <WeekDay key={day}>
      { day }
    </WeekDay>
  );

  renderEvent = (date) => {
    const event = this.state.events
      .find((e) => format(date, 'YYYY-MM-DD') === e.fields.date);

    if (!event) {
      return null;
    }

    const { badge, communityName } = event.fields.community.fields;

    return (
      <a href={event.fields.url} target="_blank">
        <img src={badge.fields.file.url} alt={communityName}/>
      </a>
    );
  };

  renderDay = (date, index) => {
    return (
      <Day key={index} isToday={isToday(date)} isPast={isPast(date)}>
        <EventIcons>
          { this.renderEvent(date) }
        </EventIcons>

        <DateLabel>
          { isFirstDayOfMonth(date) && MONTHS[getMonth(date)] }
          &nbsp;
          { date.getDate() }
        </DateLabel>
      </Day>
    );
  };

  render() {
    return (
      <Container>
        <h2>Looking for front-end events?</h2>

        <Calendar>
          { DAYS.map(this.renderWeekDay) }
          { this.dateRange.map(this.renderDay) }
        </Calendar>
      </Container>
    );
  }
}

export default Events;