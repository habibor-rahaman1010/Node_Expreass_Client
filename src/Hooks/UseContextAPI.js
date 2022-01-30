import { useContext } from 'react';
import { myContextAPI } from '../ContextAPI/ContextAPI';

const UseContextAPI = () => {
    return useContext(myContextAPI)
};

export default UseContextAPI;