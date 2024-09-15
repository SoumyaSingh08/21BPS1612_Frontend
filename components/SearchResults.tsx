interface SearchResult {
  id: string;
  name: string;
  owner: string;
  lawFirm: string;
  attorney: string;
  status: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  loading: boolean;
  error: string;
}

export default function SearchResults({ results, loading, error }: SearchResultsProps) {
  if (loading) return <div>Searching...</div>;
  if (error) return <div>Error Occurred: {error}</div>;
  if (!results.length) return <div>No Results Found</div>;

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <div key={result.id} className="border p-4">
          <h3 className="font-bold">{result.name}</h3>
          <p>Owner: {result.owner}</p>
          <p>Law Firm: {result.lawFirm}</p>
          <p>Attorney: {result.attorney}</p>
          <p>Status: {result.status}</p>
        </div>
      ))}
    </div>
  );
}
