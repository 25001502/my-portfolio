import Link from "next/link";



export default function ProjectsPage() {
  return (
    <section
      data-theme="black"
      className="min-h-screen py-20 bg-[radial-gradient(circle_at_top_left,#ffffff08_30%,transparent_31%),radial-gradient(circle_at_bottom_right,#ffffff08_30%,transparent_31%)] bg-size-[6em_6em]"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium mb-2 text-indigo-600">Projects</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Live Websites
            </h1>
          </div>

          <Link
            href="/"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
          >
            Back Home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-transparent w-96 shadow-sm">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-univen-project.firebasestorage.app/o/ChatGPT%20Image%20Feb%2016%2C%202026%2C%2010_40_33%20AM.png?alt=media&token=99a62911-665e-4997-94cb-46f47f56d17e"
                alt="Shoes"
                className="h-52 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                GRADIATE
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://gradiate.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-soft  rounded-xl"
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

          <div className="card bg-transparent w-96 shadow-sm">
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/my-univen-project.firebasestorage.app/o/aps.gradiate.png?alt=media&token=e0331c1f-aa63-4e63-a2fe-c2b30ee90ccd"
                alt="Shoes"
                className="h-52 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                APS Calculator
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://aps.gradiate.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-soft  rounded-xl"
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
