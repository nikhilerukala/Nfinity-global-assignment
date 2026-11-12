# Task Tracker

A small task tracker built with React (functional components + hooks), Vite and Tailwind CSS v4.

## Features

- List of tasks with title and status (sample tasks load on start)
- Add a task from a text input (empty input is ignored)
- Mark tasks complete / incomplete
- Filter by All, Active, Completed
- Search by title (case-insensitive)
- Empty-state message when nothing matches
- Responsive layout for desktop and mobile

## Run

```bash
npm install
npm run dev
```

Production build: `npm run build`, then `npm run preview`.

## Structure

```
src/
  App.jsx                 Page layout
  hooks/useTasks.js       Task state, add/toggle logic, derived filtered list
  data/sampleTasks.js     Sample tasks and filter constants
  components/
    TaskForm.jsx          Add-task input
    SearchInput.jsx       Search box
    FilterTabs.jsx        All / Active / Completed toggle
    TaskList.jsx          List + empty state
    TaskItem.jsx          Single task row
```

## Design notes

- All state lives in one custom hook (`useTasks`), so components stay presentational.
- The visible list is derived with `useMemo` instead of being stored in state, so it can never fall out of sync.
- State updates are immutable and use functional `setState`.
- Accessible: labelled inputs, `aria-pressed` on filter buttons, `aria-live` on the list.
- No backend: tasks reset on page reload, as the brief requires.
