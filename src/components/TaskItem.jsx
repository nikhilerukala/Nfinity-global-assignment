export default function TaskItem({ task, onToggle }) {
  const checkboxId = `task-${task.id}`

  return (
    <li className="flex items-center gap-3 px-4 py-3">
      <input
        id={checkboxId}
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="h-5 w-5 shrink-0 cursor-pointer accent-indigo-600"
      />
      <label
        htmlFor={checkboxId}
        className={`min-w-0 flex-1 cursor-pointer text-sm break-words ${
          task.completed ? 'text-slate-400 line-through' : 'text-slate-800'
        }`}
      >
        {task.title}
      </label>
      <span
        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
          task.completed
            ? 'bg-green-100 text-green-700'
            : 'bg-amber-100 text-amber-700'
        }`}
      >
        {task.completed ? 'Completed' : 'Active'}
      </span>
    </li>
  )
}
