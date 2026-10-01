import MatrixQuadrant from './MatrixQuadrant'

export const quadrants = [
    {
        id: 'urgent-important',
        title: 'Do first',
        description: 'Tasks with deadlines or consequences.',
        accent: 'bg-emerald-500',
    },
    {
        id: 'not-urgent-important',
        title: 'Schedule',
        description: 'Tasks with unclear deadlines that contribute to long-term success.',
        accent: 'bg-orange-400',
    },
    {
        id: 'urgent-not-important',
        title: 'Delegate',
        description: 'Tasks that must get done but do not require a specific skill set.',
        accent: 'bg-blue-600',
    },
    {
        id: 'not-urgent-not-important',
        title: 'Delete',
        description: 'Distractions and unnecessary tasks.',
        accent: 'bg-rose-500',
    },
]

const EisenhowerMatrix = ({ tasks, onToggleTask, onDeleteTask }) => (
    <section className="mx-auto w-full max-w-3xl rounded-3xl bg-stone-100 p-3 shadow-sm dark:bg-slate-900 sm:p-8" aria-label="Eisenhower matrix">
        <h2 className="mb-4 text-center text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:mb-5 sm:text-2xl">
            The Eisenhower Matrix
        </h2>

        <div className="grid grid-cols-[1.5rem_repeat(2,minmax(0,1fr))] text-center sm:grid-cols-[2.5rem_repeat(2,minmax(0,1fr))]">
            <div />
            <div className="pb-2 text-xs font-semibold text-slate-800 dark:text-slate-200 sm:pb-3 sm:text-sm">Urgent</div>
            <div className="pb-2 text-xs font-semibold text-slate-800 dark:text-slate-200 sm:pb-3 sm:text-sm">Not urgent</div>

            <div className="flex items-center justify-center">
                <span className="-rotate-90 whitespace-nowrap text-xs font-semibold text-slate-800 dark:text-slate-200 sm:text-sm">Important</span>
            </div>
            <MatrixQuadrant
                quadrant={quadrants[0]}
                tasks={tasks.filter((task) => task.quadrant === quadrants[0].id)}
                onToggleTask={onToggleTask}
                onDeleteTask={onDeleteTask}
            />
            <MatrixQuadrant
                quadrant={quadrants[1]}
                tasks={tasks.filter((task) => task.quadrant === quadrants[1].id)}
                onToggleTask={onToggleTask}
                onDeleteTask={onDeleteTask}
            />

            <div className="flex items-center justify-center">
                <span className="-rotate-90 whitespace-nowrap text-xs font-semibold text-slate-800 dark:text-slate-200 sm:text-sm">Not important</span>
            </div>
            <MatrixQuadrant
                quadrant={quadrants[2]}
                tasks={tasks.filter((task) => task.quadrant === quadrants[2].id)}
                onToggleTask={onToggleTask}
                onDeleteTask={onDeleteTask}
            />
            <MatrixQuadrant
                quadrant={quadrants[3]}
                tasks={tasks.filter((task) => task.quadrant === quadrants[3].id)}
                onToggleTask={onToggleTask}
                onDeleteTask={onDeleteTask}
            />
        </div>
    </section>
)

export default EisenhowerMatrix
