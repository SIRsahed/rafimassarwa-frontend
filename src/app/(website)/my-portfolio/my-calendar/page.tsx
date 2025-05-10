"use client"
import React, { useState, useEffect } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  addDays,
  subMonths,
  addMonths,
  isSameDay,
  isSameMonth,
} from 'date-fns';

// types/event.ts
interface Event {
  ticker: string;
  company: string;
  type: string;
  date: string; // ISO 8601 format (YYYY-MM-DD)
}

// data/events.ts (Mock Data)
const mockEvents: Event[] = [
  {
    ticker: 'AAPL',
    company: 'Apple',
    type: 'Earnings Release',
    date: '2025-04-24',
  },
  {
    ticker: 'GOOGL',
    company: 'Alphabet Inc.',
    type: 'Product Launch',
    date: '2025-02-18',
  },
  {
    ticker: 'MSFT',
    company: 'Microsoft',
    type: 'Investor Meeting',
    date: '2025-02-20',
  },
  {
    ticker: 'AMZN',
    company: 'Amazon',
    type: 'Earnings Call',
    date: '2025-05-15',
  },
  {
    ticker: 'TSLA',
    company: 'Tesla',
    type: 'Shareholder Meeting',
    date: '2025-05-28',
  },
  {
    ticker: 'NVDA',
    company: 'Nvidia',
    type: 'GTC Conference',
    date: '2025-05-05',
  },
  {
    ticker: 'FB',
    company: 'Meta Platforms',
    type: 'F8 Conference',
    date: '2025-06-10',
  },
];

const EventsCalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    const eventsForMonth = mockEvents.filter((event) =>
      isSameMonth(new Date(event.date), currentDate)
    );
    setFilteredEvents(eventsForMonth);
  }, [currentDate]);

  const handleDateClick = (date: Date) => {
    setCurrentDate(date);
  };

  // Calendar Logic
  const daysInWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const firstDayOfCalendar = addDays(
    firstDayOfMonth,
    -firstDayOfMonth.getDay() + (firstDayOfMonth.getDay() === 0 ? -6 : 1)
  ); // Adjust for Monday start
  const lastDayOfCalendar = addDays(
    lastDayOfMonth,
    6 - lastDayOfMonth.getDay() + (lastDayOfMonth.getDay() === 0 ? 0 : 7)
  ); // Adjust for Monday start
  const totalDays =
    Math.ceil(
      (lastDayOfCalendar.getTime() - firstDayOfCalendar.getTime()) /
        (1000 * 60 * 60 * 24)
    ) + 1;
  const calendarDays = Array.from(
    { length: totalDays },
    (_, i) => addDays(firstDayOfCalendar, i)
  );

  const goToPreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="flex p-5 gap-5 w-[75vw] mt-20 shadow-lg rounded-md border">
      {/* Calendar */}
      <div className="bg-white rounded-md shadow-md p-5 w-1/2 border">
        <div className="flex justify-between items-center mb-4">
          <button onClick={goToPreviousMonth} className="p-2 rounded-md hover:bg-gray-100">
            &lt;
          </button>
          <h2 className="text-xl font-semibold">{format(currentDate, 'MMMM yyyy')}</h2>
          <button onClick={goToNextMonth} className="p-2 rounded-md hover:bg-gray-100">
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 mb-2 text-center text-gray-600">
          {daysInWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day) => (
            <div
              key={day.toISOString()}
              className={`flex justify-center items-center h-8 rounded-md cursor-pointer text-center
                ${!isSameMonth(day, currentDate) ? 'text-gray-400' : 'text-gray-800 hover:bg-gray-100'}
                ${isSameDay(day, currentDate) ? 'bg-blue-500 text-white hover:bg-blue-500' : ''}`}
              onClick={() => handleDateClick(day)}
            >
              {format(day, 'd')}
            </div>
          ))}
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white rounded-md shadow-md p-5 w-1/2 border">
        <h2 className="text-xl font-semibold mb-4">Events</h2>
        {filteredEvents.length === 0 ? (
          <p className="text-gray-500">No events for this month.</p>
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left">
                <th className="py-2">Ticker</th>
                <th className="py-2">Company</th>
                <th className="py-2">Type</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event) => (
                <tr key={event.ticker + event.date} className="hover:bg-gray-50">
                  <td className="py-2">{event.ticker}</td>
                  <td className="py-2">{event.company}</td>
                  <td className="py-2 text-blue-500">{event.type}</td>
                  <td className="py-2">{format(new Date(event.date), 'MMM dd, yyyy')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EventsCalendarPage;