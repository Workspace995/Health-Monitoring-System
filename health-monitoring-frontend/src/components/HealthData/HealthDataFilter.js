import React, { useState } from 'react';

const HealthDataFilter = ({ filter, setFilter }) => {
  const [days, setDays] = useState('');

  const handleDaysChange = (e) => {
    setDays(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <div className="health-data-filter">
      <label>
        Filter by number of days:
        <input
          type="number"
          value={days}
          onChange={handleDaysChange}
          placeholder="Enter number of days"
        />
      </label>
    </div>
  );
};

export default HealthDataFilter;
