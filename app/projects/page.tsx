import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <section
      data-theme="black"
      className="min-h-screen py-12 sm:py-16 md:py-20 bg-[radial-gradient(circle_at_top_left,#ffffff08_30%,transparent_31%),radial-gradient(circle_at_bottom_right,#ffffff08_30%,transparent_31%)] bg-size-[6em_6em]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-12">
        <div className="mb-8 flex flex-col items-start gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium text-[#FF3154] sm:text-sm">Projects</p>
            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Live Websites
            </h1>
          </div>

          <Link
            href="/"
            className="w-full rounded-xl border border-white/15 px-4 py-2 text-center text-sm font-medium text-white hover:bg-white/5 sm:w-auto"
          >
            Back Home
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <div className="card mx-auto w-full max-w-md bg-transparent shadow-sm md:max-w-none">
            <figure >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/my-univen-project.firebasestorage.app/o/ChatGPT%20Image%20Feb%2016%2C%202026%2C%2010_40_33%20AM.png?alt=media&token=99a62911-665e-4997-94cb-46f47f56d17e"
                alt="Gradiate project preview"
                width={1200}
                height={675}
                className="h-57 w-full object-cover "
              />
            </figure>
            <div className="card-body p-4 sm:p-6">
              <h2 className="card-title flex flex-wrap items-center gap-2 text-lg sm:text-xl">
                GRADIATE
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                Helping students discover universities, courses, and opportunities that match their future.
                
              </p>
              <div className="card-actions justify-stretch sm:justify-end">
                <a
                  href="https://gradiate.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-soft w-full justify-center rounded-xl sm:w-auto"
                >
                  Visit{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5M15 13.5v4.125c0 .621-.504 1.125-1.125 1.125H6.375A1.125 1.125 0 0 1 5.25 17.625V10.125C5.25 9.504 5.754 9 6.375 9H10.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="card mx-auto w-full max-w-md bg-transparent shadow-sm md:max-w-none">
            <figure className="overflow-hidden rounded-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/my-univen-project.firebasestorage.app/o/aps.gradiate.png?alt=media&token=e0331c1f-aa63-4e63-a2fe-c2b30ee90ccd"
                alt="APS Gradiate project preview"
                width={1200}
                height={675}
                className="h-44 w-full object-cover sm:h-52"
              />
            </figure>
            <div className="card-body p-4 sm:p-6">
              <h2 className="card-title flex flex-wrap items-center gap-2 text-lg sm:text-xl">
                APS Calculator
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                Quickly calculate your APS score and understand where you stand.
                Simple, fast.
              </p>
              <div className="card-actions justify-stretch sm:justify-end">
                <a
                  href="https://aps.gradiate.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-soft w-full justify-center rounded-xl sm:w-auto"
                >
                  Visit{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5M15 13.5v4.125c0 .621-.504 1.125-1.125 1.125H6.375A1.125 1.125 0 0 1 5.25 17.625V10.125C5.25 9.504 5.754 9 6.375 9H10.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
