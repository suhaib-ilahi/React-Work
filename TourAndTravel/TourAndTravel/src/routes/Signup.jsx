
import signupImage from '../assets/2.jpg'

const Signup = () => {
  return (
<>
<div>
    <h1 className='font-bold text-5xl p-3'>Trippy</h1>
</div>
<section className="flex min-h-[calc(100vh-80px)] items-center justify-center  px-4 py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200 lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <img src={signupImage} alt="Signup background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Join us</p>
              <h1 className="mt-3 text-4xl font-bold">Start your adventure</h1>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-12">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-600">Create account</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <a href="/contact" className="font-semibold text-cyan-600 hover:text-cyan-700">
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Signup