import EisenhowerMatrix, { quadrants } from '../components/eisenhower/EisenhowerMatrix'

const Task = () => (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Task planning
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Eisenhower matrix
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                    Sort your work by urgency and importance so the next action is clear.
                </p>
            </div>
            <select
                aria-label="Filter tasks"
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-blue-900"
                defaultValue="all"
            >
                <option value="all">All tasks</option>
                <option value="active">Active tasks</option>
                <option value="completed">Completed tasks</option>
            </select>
        </header>

        <form className="mb-8 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:grid-cols-[minmax(0,1fr)_13rem_12rem_auto] sm:items-end">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Task to add
                <input
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 font-normal text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                    placeholder="e.g. Prepare project presentation"
                />
            </label>
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Matrix section
                <select className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 font-normal text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900">
                    {quadrants.map((quadrant) => (
                        <option key={quadrant.id} value={quadrant.id}>{quadrant.title}</option>
                    ))}
                </select>
            </label>
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Deadline
                <input
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 font-normal text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                    type="datetime-local"
                />
            </label>
            <button
                className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                type="button"
            >
                Add task
            </button>
        </form>

        <EisenhowerMatrix tasks={[]} />
    </main>
)

export default Task
