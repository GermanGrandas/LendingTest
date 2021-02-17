import { useState, useEffect } from "react";
import axios from "axios";

export const useAPI = (url,info={}) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // setState({ data: null, loading: true, error: null });
    axios
      .post(url,info)
      .then(({data}) => {

        setState({
          loading: false,
          error: null,
          data
        });
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: "No se pudo cargar la info",
        });
      });
    
  }, [url]);
  return state;
};
