"use client";

import React, { FormEvent, useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/thandululo99@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );
      const result = await response.json();

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("Message submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

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

          <div className="flex-1 w-full text-center md:text-left animate-left ">
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
              <form
                action="https://formsubmit.co/thandululo99@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="w-full max-w-2xl rounded-2xl border border-[#FF3154] from-white/5 to-transparent p-6 md:p-4 shadow-xl"
              >
                <input type="hidden" name="_subject" value="New portfolio contact message" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Grid for Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      maxLength={100}
                      required
                      className="w-full rounded-xl bg-black/60 border border-red-900 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                      className="w-full rounded-xl bg-black/60 border border-red-900 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="mt-6">
                  <label
                    htmlFor="contact-whatsapp"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    WhatsApp Number{" "}
                    <span className="text-white/40">(optional)</span>
                  </label>
                  <input
                    id="contact-whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="+27 81 234 5678"
                    autoComplete="tel"
                    maxLength={30}
                    className="w-full rounded-xl bg-black/60 border border-red-900 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    minLength={10}
                    maxLength={3000}
                    required
                    className="w-full resize-none rounded-xl bg-black/60 border border-red-900 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-8 w-full flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-red-400 transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <i
                    className={
                      status === "submitting"
                        ? "fa-solid fa-spinner fa-spin"
                        : "fa-solid fa-paper-plane"
                    }
                  ></i>
                </button>

                <div className="mt-4 min-h-6 text-center text-sm" aria-live="polite">
                  {status === "success" && (
                    <p className="text-green-400">
                      Your message was sent successfully. I will get back to you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-400">
                      Your message could not be sent. Please try again or email me directly.
                    </p>
                  )}
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
