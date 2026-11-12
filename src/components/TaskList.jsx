import TaskItem from './TaskItem'

export default function TaskList({ tasks, onToggle }) {
  if (tasks.length === 0) {
    return (
      <p className="px-4 py-10 text-center text-sm text-slate-500">
        No tasks match your search or filter.
      </p>
    )
  }

  return (
    <ul className="divide-y divide-slate-200">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  )
}
