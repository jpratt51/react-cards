import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (url) => {
    const [state, setState] = useState([]);
    const addValueToState = async () => {
        const response = await axios.get(url);
        setState((values) => [...values, { ...response.data, id: uuid() }]);
    };
    // useEffect(() => {
    //     const updateState = async () => {
    //         const response = await axios.get(url);
    //         setState((values) => [...values, { ...response.data, id: uuid() }]);
    //     };
    //     updateState();
    // }, [url]);
    return [state, addValueToState];
};

export default useAxios;
