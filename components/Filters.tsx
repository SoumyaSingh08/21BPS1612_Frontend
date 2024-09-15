import { useState } from 'react';

interface FiltersProps {
  onFilterChange: (filters: FilterParams) => void;
}

interface FilterParams {
  owner: string;
  lawFirm: string;
  attorney: string;
  status: string;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [owner, setOwner] = useState('');
  const [lawFirm, setLawFirm] = useState('');
  const [attorney, setAttorney] = useState('');
  const [status, setStatus] = useState('');

  const applyFilters = () => {
    onFilterChange({ owner, lawFirm, attorney, status });
  };

  return (
    <div className="flex space-x-4 my-4">
      <input
        type="text"
        className="border p-2"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <input
        type="text"
        className="border p-2"
        placeholder="Law Firm"
        value={lawFirm}
        onChange={(e) => setLawFirm(e.target.value)}
      />
      <input
        type="text"
        className="border p-2"
        placeholder="Attorney"
        value={attorney}
        onChange={(e) => setAttorney(e.target.value)}
      />
      <input
        type="text"
        className="border p-2"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button className="bg-green-500 text-white p-2" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
}
