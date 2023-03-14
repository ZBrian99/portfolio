import React, { createContext, useState } from 'react';
import data from '../data/data.json';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [dataState, setDataState] = useState(data);

	return <DataContext.Provider value={dataState}>{children}</DataContext.Provider>;
};
