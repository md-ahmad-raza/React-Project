import "../Style/AnnualCalender.css";

const AnnualCalendar = () => {
  const months = [
    {
      name: "January",
      days: 31,
      holidays: ["New Year's Day (1st)", "Martin Luther King Jr. Day (15th)"],
    },
    {
      name: "February",
      days: 28,
      holidays: ["Valentine's Day (15th)", "Presidents' Day (19th)"],
    },
    { name: "March", days: 31, holidays: ["St. Patrick's Day (17th)"] },
    {
      name: "April",
      days: 30,
      holidays: ["April Fool's Day (1st)", "Easter (7th)"],
    },
    {
      name: "May",
      days: 31,
      holidays: ["Labor Day (1st)", "Memorial Day (27th)"],
    },
    { name: "June", days: 30, holidays: ["Juneteenth (19th)"] },
    { name: "July", days: 31, holidays: ["Independence Day (4th)"] },
    { name: "August", days: 31, holidays: [] },
    { name: "September", days: 30, holidays: ["Labor Day (2nd)"] },
    { name: "October", days: 31, holidays: ["Halloween (31st)"] },
    { name: "November", days: 30, holidays: ["Thanksgiving (28th)"] },
    { name: "December", days: 31, holidays: ["Christmas Day (25th)"] },
  ];

  const generateDays = (days) => {
    return [...Array(days)].map((_, day) => day + 1);
  };

  return (
    <div className='calendar-container'>
      <h2 className='calendar-header'>Annual Calendar</h2>
      <div className='calendar-grid'>
        {months.map((month, index) => (
          <div key={index} className='calendar-month'>
            <h3>{month.name}</h3>
            <div className='calendar-dates'>
              {generateDays(month.days).map((day) => (
                <div
                  key={day}
                  className={`calendar-day ${
                    month.holidays.some((holiday) => holiday.includes(day))
                      ? "holiday"
                      : ""
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
            {month.holidays.length > 0 && (
              <div className='calendar-holidays'>
                <h4>Holidays:</h4>
                <ul>
                  {month.holidays.map((holiday, idx) => (
                    <li key={idx}>{holiday}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnualCalendar;
