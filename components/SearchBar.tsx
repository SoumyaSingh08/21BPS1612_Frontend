import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) onSearch(query);
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="border p-2 flex-1"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search trademarks..."
      />
      <button className="bg-blue-500 text-white p-2 ml-2" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
