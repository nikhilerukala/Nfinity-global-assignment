export default function SearchInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search tasks
      </label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tasks..."
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
      />
    </div>
  )
}
