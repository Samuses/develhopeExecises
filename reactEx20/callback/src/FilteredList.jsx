import React, { useMemo } from 'react';

const FilteredList = ({ list }) => {
  // Memoizzazione della lista filtrata per età > 18
  const filteredList = useMemo(() => {
    return list.filter(item => item.age > 18);
  }, [list]); // La lista viene ricalcolata solo se cambia

  return (
    <div>
      <h2>Lista Filtrata</h2>
      <ul>
        {filteredList.map(item => (
          <li key={item.id}>{item.name} - {item.age} anni</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
