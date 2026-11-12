import { useMemo, useState } from 'react'
import { FILTERS, SAMPLE_TASKS } from '../data/sampleTasks'

export function useTasks(initialTasks = SAMPLE_TASKS) {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState(FILTERS.ALL)
  const [search, setSearch] = useState('')

  const addTask = (title) => {
    const trimmed = title.trim()
    if (!trimmed) return
    setTasks((prev) => [
      { id: crypto.randomUUID(), title: trimmed, completed: false },
      ...prev,
    ])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const visibleTasks = useMemo(() => {
    const query = search.trim().toLowerCase()
    return tasks.filter((task) => {
      const matchesFilter =
        filter === FILTERS.ALL ||
        (filter === FILTERS.ACTIVE && !task.completed) ||
        (filter === FILTERS.COMPLETED && task.completed)
      return matchesFilter && task.title.toLowerCase().includes(query)
    })
  }, [tasks, filter, search])

  const activeCount = tasks.filter((task) => !task.completed).length

  return {
    visibleTasks,
    activeCount,
    filter,
    setFilter,
    search,
    setSearch,
    addTask,
    toggleTask,
  }
}
