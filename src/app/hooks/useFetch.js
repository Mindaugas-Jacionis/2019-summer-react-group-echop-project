import { useEffect, useState } from 'react';

async function apiCall({ src, setLoading, setSuccess, setError }) {
  setLoading(true);
  const response = await fetch(src);

  if (response.ok) {
    const json = await response.json();
    setSuccess(json);
  } else {
    setError({ isError: !response.ok, code: response.code });
  }

  setLoading(false);
}

function useFetch({ initialState = null, src, dataKey = 'data', onError, onSuccess }) {
  const [data, setSuccess] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiCall({
      setSuccess: data => (onSuccess ? setSuccess(onSuccess(data)) : setSuccess(data)),
      setLoading,
      setError: data => (onError ? setError(onError(data)) : setError(data)),
      src,
    });
  }, [onError, onSuccess, src]);

  return { [dataKey]: data, loading, error };
}

export default useFetch;
