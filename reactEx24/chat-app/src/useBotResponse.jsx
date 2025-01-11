import useSWR from "swr";

// Funzione fetcher per ottenere i dati dall'API
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useBotResponse(userMessage) {
  const { data, error, mutate } = useSWR(
    userMessage ? `http://localhost:3001/responses/1` : null,
    fetcher
  );

  return {
    response: data ? data.response : null,
    isLoading: !data && !error,
    isError: error,
    refetch: mutate,
  };
}
