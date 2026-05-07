import React from 'react'


const Contact = () => {
  return (
    <section
      id="contact"
      data-theme="black"
      className="min-h-screen py-20 bg-[radial-gradient(circle_at_top_left,#ffffff08_30%,transparent_31%),radial-gradient(circle_at_bottom_right,#ffffff08_30%,transparent_31%)] bg-size-[6em_6em]"
    >
      <div className="text-center mb-12 justify-center1">
        <p className="  text-sm font-medium mb-2 text-[#FF3154]">Contact Me</p>
        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
        <p className="text-gray-500">
          Feel free to reach out to me for any inquiries or opportunities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-14">
          {/*left section*/}

          <div className="flex-1 text-center md:text-left animate-left ">
            <div className="lg:col-span-2 space-y-4 ">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border border-red-900 bg-card/50 w-95">
                {" "}
                <i className="fa-solid fa-envelope text-xl text-[#FF3154]"></i>{" "}
                <div className="">
                  <p className=" text-gray-500 text-xs ">Email</p>
                  <a
                    className="text-white font-medium cursor-none"
                    href="mailto:thandululo99@gmail.com"
                  >
                    thandululo99@gmail.com
                  </a>
                </div>
              </div>


              <div className="flex items-center gap-4 p-4 rounded-xl border border-border border-red-900 bg-card/50 w-95">
                {" "}
                <i className="fa-brands fa-linkedin text-xl text-[#FF3154]"></i>{" "}
                <div className="">
                  <p className=" text-gray-500 text-xs ">LinkedIn</p>
                  <a
                    className="text-white font-medium cursor-none"
                    href="https://www.linkedin.com/in/nengovhela-thandululo-880080367"
                  >
                    Thandululo Nengovhela
                  </a>
                </div>
              </div>


              <div className="flex items-center gap-4 p-4 rounded-xl border border-border border-red-900 bg-card/50 w-95">
                {" "}
                <i className="fa-brands fa-github text-xl text-[#FF3154]"></i>{" "}
                <div className="">
                  <p className=" text-gray-500 text-xs ">GitHub</p>
                  <a
                    className="text-white font-medium cursor-none"
                    href="https://github.com/25001502"
                  >
                    Thandululo N.
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border border-red-900 bg-card/50 w-95">
                {" "}
                <i className="fa-solid fa-phone text-xl text-[#FF3154]"></i>{" "}
                <div>
                  <p className=" text-gray-500 text-xs ">Phone</p>
                  <a
                    className="text-white font-medium cursor-none"
                    href="tel:+27665509434"
                  >
                    +27 66 550 9434
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border border-red-900 bg-card/50 w-95">
                {" "}
                <i className="fa-solid fa-location-dot text-xl text-[#FF3154]"></i>{" "}
                <div>
                  <p className=" text-gray-500 text-xs ">Location</p>
                  <p className="text-white font-medium">Available worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/*right section*/}
          <div className="flex-1 w-full max-w-xl animate-right">
            <section className="w-full flex justify-center px-4">
              <div className="w-full max-w-2xl rounded-2xl border border-[#FF3154]  from-white/5 to-transparent p-6 md:p-4 shadow-xl ">
                {/* Grid for Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl bg-black/60 border border-red-900 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl bg-black/60 border border-red-900 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-white mb-2">
                    WhatsApp Number{" "}
                    <span className="text-white/40">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+27 81 234 5678"
                    className="w-full rounded-xl bg-black/60 border border-red-900 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl bg-black/60 border border-red-900 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="mt-8 w-full flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-red-400 transition hover:bg-white/90"
                >
                  Send Message
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
