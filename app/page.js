import Card from "./_components/card";


export default function Home() {

  const AllEvents = [
    {
      id: 1,
      title: "React Course && Next Course",
      date: "Jun 12, 7pm GMT+3",
      description: "Learn how to use reactjs and nextjs to designer your website.",
      price: 46
    },
    {
      id: 2,
      title: "Design Systems ui&ux Course",
      date: "May 29, 7pm GMT+3",
      description: "we are give you lesson how to build and scale design systems.",
      price: 51
    },
    {
      id: 2,
      title: "Design Systems Professional",
      date: "May 29, 7pm GMT+3",
      description: "we are give you lesson how to build and scale design systems.",
      price: 42
    },
    {
      id: 2,
      title: "Design Systems ui&ux Course",
      date: "Jun 4, 7pm GMT+3",
      description: "we are give you lesson how to build and scale design systems.",
      price: 55
    },
    {
      id: 2,
      title: "Design Systems ui&ux Course",
      date: "Jun 12, 7pm GMT+3",
      description: "we are give you lesson how to build and scale design systems.",
      price: 40
    },
    {
      id: 2,
      title: "Design Systems ui&ux Course",
      date: "Jun 24, 7pm GMT+3",
      description: "we are give you lesson how to build and scale design systems.",
      price: 50
    }
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-50 mainsection py-20 ">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Find a virtual event that speaks to you
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Figma's designer advocates and customers like you as they share best practices and give an inside look into how they work.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AllEvents.map((ev) => (
              <div key={ev.id} className="border card border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{ev.title}</h2>
                    </div>

                  </div>
                  <p className="text-gray-600 mt-2">{ev.date}</p>
                  <p className="text-gray-700 mt-4">{ev.description}</p>
                  <div className="flox">
                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors btnreg">
                      Register Now
                    </button>

                    <h5>{ev.price}$</h5>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2024 Figma. All rights reserved.</p>
        </div>
      </footer> */}

      <section className="vedios bg-white py-16 px-6">
        <h2 className="text-left">Catch up on what you’ve missed</h2><br />
        <h3>All of our livestreams are recorded, so you can watch them anytime.</h3><br />
        <div className="btn">
          <a
            className="group relative inline-flex items-center overflow-hidden rounded-sm bg-indigo-600 px-8 py-3 text-white focus:ring-3 focus:outline-hidden"
            href="#"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <svg
                className="size-5 shadow-sm rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ms-4"> Download </span>
          </a></div>
      </section>
       
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <Card />
    <Card />
    <Card />
  </div>

    <section className="bg-indigo-50 py-20 px-4 flex-grow main2 ">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
      Want to learn more about user group events in your area?
    </h1>
    <p className="text-lg md:text-xl text-gray-600 mb-6">
      Join Figma's designer advocates and customers like you as they share best practices and give an inside look into how they work.
    </p>
    <a
      className="inline-block rounded-md border border-indigo-600 bg-indigo-600 px-8 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 transition"
      href="#"
    >
      Download
    </a>
  </div>
</section>
    </div>
  );
}
