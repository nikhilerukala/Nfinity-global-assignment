import { FILTERS } from '../data/sampleTasks'

export default function FilterTabs({ current, onChange }) {
  return (
    <div
      role="group"
      aria-label="Filter tasks"
      className="flex rounded-lg bg-slate-100 p-1"
    >
      {Object.values(FILTERS).map((name) => {
        const isActive = current === name
        return (
          <button
            key={name}
            type="button"
            onClick={() => onChange(name)}
            aria-pressed={isActive}
            className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}
