import React, {createContext, useState, useEffect} from 'react';
import {fetchRates} from '../services/api';

export const CurrencyContext = createContext(null);

export const CurrencyProvider: React.FC = ({children}) => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRates = async () => {
      try {
        const rates = await fetchRates();
        setRates(rates);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getRates();
  }, []);

  return (
    <CurrencyContext.Provider value={{rates, loading, error}}>
      {children}
    </CurrencyContext.Provider>
  );
};
