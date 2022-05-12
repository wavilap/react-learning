import { useState } from "react";

const useFetch = ({
  initialUri = '',
  initialMethod = 'get',
  initialLoading = false,
  contentType = 'application/json',
}) => {
  const [uri, setUri] = useState(initialUri);
  const [method, setMethod] = useState(initialMethod);
  const [loading, setLoading] = useState(initialLoading);

  const fetch = () => {
    setLoading(true)
    // has logic
    setLoading(false);
  }

  return {
    loading,
    fetch,
  }
};

export default useFetch;
