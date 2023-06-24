import React, { useMemo } from 'react';

const FilteredList = ({ list }) => {
  const filteredList = useMemo(() => {
    return list.filter(item => item.age > 18);
  }, [list]);

  return (
    <div>
      <h2>Filtered List:</h2>
      <ul>
        {filteredList.map(item => (
          <li key={item.id}>
            Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
