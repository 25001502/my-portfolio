import Link from "next/link";

const projects = [
  {
    name: "APS Gradiate",
    url: "https://aps.gradiate.co.za",
    description: "Application platform for Gradiate services and internal workflows.",
  },
  {
    name: "Gradiate",
    url: "https://gradiate.co.za",
    description: "Primary Gradiate website for showcasing services and brand presence.",
  },
];

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
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
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
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
        </div>

        </div>
      </div>
    </section>
  );
}
