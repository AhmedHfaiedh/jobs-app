import { useState, useEffect } from "react";
import axios from "axios";
//import {RAPID_API_KEY} from '@env';

//const rapidApiKey =RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const[data,setData] = useState([]);
    const[isLoading,setIsLoading] = useState(false);
    const[error,setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
          'X-RapidAPI-Key': 'df1840c0e6msh029f017cda53070p1f8428jsn31beb1b853a6',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('there is an error')
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(() =>{
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};
}

export default useFetch;