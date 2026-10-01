import TaskList from './TaskList'

const MatrixQuadrant = ({ quadrant, tasks, onToggleTask, onDeleteTask }) => (
    <article className={`flex aspect-square min-w-0 flex-col justify-center overflow-hidden border border-slate-700/40 p-2 text-center text-white sm:p-6 ${quadrant.accent}`}>
        <div>
            <h2 className="text-sm font-semibold sm:text-xl">{quadrant.title}:</h2>
            <p className="mx-auto mt-1 max-w-44 break-words text-[0.65rem] leading-tight text-white/90 sm:text-sm sm:leading-relaxed">{quadrant.description}</p>
        </div>

        <TaskList
            tasks={tasks}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
        />
    </article>
)

export default MatrixQuadrant
