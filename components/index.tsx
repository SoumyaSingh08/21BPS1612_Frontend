import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import SearchResults from '../components/SearchResults';
import { useRouter } from 'next/router';

export default function Home({ initialResults }: { initialResults: any }) {
  const [results, setResults] = useState(initialResults);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/search?query=${query}`);
      const data = await res.json();
      setResults(data);
      router.push(`/?query=${query}`, undefined, { shallow: true });
    } catch (err) {
      setError('Failed to fetch results');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = async (filters: any) => {
    const query = new URLSearchParams(filters).toString();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/search?${query}`);
      const data = await res.json();
      setResults(data);
      router.push(`/?${query}`, undefined, { shallow: true });
    } catch (err) {
      setError('Failed to fetch results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Filters onFilterChange={handleFilterChange} />
      <SearchResults results={results} loading={loading} error={error} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const query = context.query.query || '';
  const res = await fetch(`https://your-api-url.com/search?query=${query}`);
  const initialResults = await res.json();

  return {
    props: {
      initialResults,
    },
  };
}
