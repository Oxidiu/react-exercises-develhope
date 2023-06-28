import useSWR from 'swr';

export function useGithubUser(username) {
  const url = username ? `https://api.github.com/users/${username}` : null;

  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub user.');
    }
    return response.json();
  };

  const { data, error, mutate } = useSWR(url, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  function refetch() {
    mutate();
  }

  return { data, error, loading: !data && !error, refetch };
}
