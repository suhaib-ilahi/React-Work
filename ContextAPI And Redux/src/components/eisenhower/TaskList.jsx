import TaskItem from './TaskItem'

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
    if (tasks.length === 0) {
        return (
            <div className="mt-4 rounded-lg border border-dashed border-white/50 bg-black/5 px-2 py-2 text-xs text-white/75">
                Task list
            </div>
        )
    }

    return (
        <div className="mt-4 space-y-2 text-left">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggleTask}
                    onDelete={onDeleteTask}
                />
            ))}
        </div>
    )
}

export default TaskList
