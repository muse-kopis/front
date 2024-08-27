import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import { GRAY3 } from '../../../constants/color';

export const ContentCalendarWrapper = styled.div`
  flex: 1;

  .react-calendar {
    margin-top: 24px;
    width: 100%;
    border: none;
    font-family: Pretendard;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: auto;
  }

  .react-calendar__navigation__label {
    height: 24px;
    flex-grow: 0 !important;
  }

  .react-calendar__navigation__label__labelText {
    color: #3f3f3f;
    font-size: 16px;
    font-weight: 700;
  }

  .react-calendar__navigation button {
    background: none;
    border: none;
    color: #3f3f3f;
    line-height: 19px;
    font-size: 30px;
    min-width: 24px;
    padding: 0 8px;
    cursor: pointer;
    &:hover {
      background-color: transparent;
    }
    &:focus {
      background-color: transparent;
    }
  }

  .react-calendar__month-view__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    color: #3f3f3f;
    padding: 22px 0;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-size: 13px;
    font-weight: 400;
    padding: 0;
  }

  .react-calendar__month-view__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .react-calendar__tile {
    align-items: center;
    height: 100px;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 4px;
    background-color: transparent;
    cursor: pointer;
    color: #3f3f3f;
    font-size: 13px;
    font-weight: 600;
    padding: 0;
  }

  .react-calendar__tile--active,
  .react-calendar__tile--now,
  .react-calendar__tile--active:enabled:focus {
    background: none !important;
  }

  abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__days__day--neighboringMonth abbr {
    color: ${GRAY3};
  }
`;
