import FilterTabs from './components/FilterTabs'
import SearchInput from './components/SearchInput'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useTasks } from './hooks/useTasks'

export default function App() {
  const {
    visibleTasks,
    activeCount,
    filter,
    setFilter,
    search,
    setSearch,
    addTask,
    toggleTask,
  } = useTasks()

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:py-16">
      <div className="mx-auto w-full max-w-xl">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Task Tracker
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
          </p>
        </header>

        <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <TaskForm onAdd={addTask} />
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="sm:flex-1">
              <SearchInput value={search} onChange={setSearch} />
            </div>
            <FilterTabs current={filter} onChange={setFilter} />
          </div>
        </section>

        <section
          aria-live="polite"
          className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
        >
          <TaskList tasks={visibleTasks} onToggle={toggleTask} />
        </section>
      </div>
    </main>
  )
}
