import React, { createContext } from 'react';
import LoadAPI from '../Components/API/LoadAPI/LoadAPI';

export const myContextAPI = createContext({})

const ContextAPI = ({ children }) => {
    const allContext = {
        LoadAPI,
    }
    return (
        <myContextAPI.Provider value={allContext}>
            {children}
        </myContextAPI.Provider>
    );
};

export default ContextAPI;