import contactImage from '../assets/1.jpg'
import Hero from '../components/Hero'

const Contact = () => {
  return (
    <>
      <Hero
        image={contactImage}
        title="Contact"
        subtitle="We'd love to hear from you."
        ctaText="Let's Talk"
        ctaLink="#contact-form"
        buttonClass="hidden"
        containerClass="h-[55vh]"
      />

      <section id="contact-form" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-slate-900 p-8 text-white md:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Get in touch</p>
            <h2 className="mt-3 text-3xl font-bold">Send a message to us!</h2>
            <p className="mt-4 text-slate-300">
              Planning your next adventure? Tell us what you need and we'll help you build the perfect trip.
            </p>

            <div className="mt-8 space-y-5 text-sm text-slate-200">
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>hello@trippy.com</p>
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p>123 Travel Avenue, New York</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact