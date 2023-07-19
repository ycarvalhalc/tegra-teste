import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    axios.get(url, options)
      .then((response) => setData(response.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])
  
  return {
    data,
    loading,
    error
  }
}