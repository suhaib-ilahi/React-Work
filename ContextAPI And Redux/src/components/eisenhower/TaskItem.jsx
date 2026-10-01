const TaskItem = ({ task, onToggle, onDelete }) => (
    <div className="flex items-start gap-3 rounded-xl border border-white/70 bg-white/75 p-3 shadow-sm dark:border-slate-600/70 dark:bg-slate-900/70">
        <input
            aria-label={`Complete ${task.title}`}
            className="mt-1 h-4 w-4 accent-blue-600"
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
        />
        <div className="min-w-0 flex-1">
            <p className={`break-words text-sm font-semibold ${task.completed ? 'text-slate-400 line-through' : 'text-slate-800 dark:text-slate-100'}`}>
                {task.title}
            </p>
            {task.deadline && (
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Due {new Date(task.deadline).toLocaleString()}
                </p>
            )}
        </div>
        <button
            aria-label={`Delete ${task.title}`}
            className="text-xs font-semibold text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400"
            type="button"
            onClick={() => onDelete(task.id)}
        >
            Delete
        </button>
    </div>
)

export default TaskItem
