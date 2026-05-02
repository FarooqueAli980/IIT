import { Calendar, MapPin } from "lucide-react";

export default function EventsPage() {
  const featuredEvent = {
    title: "Mega IT Bootcamp 2026",
    date: "25 June 2026",
    location: "Hyderabad Campus",
    image: "/images/mern.png",
  };

  const upcoming = [
    {
      id: 1,
      title: "AI Workshop",
      date: "10 July 2026",
      location: "Online",
      image: "/images/ai1.png",
    },
    {
      id: 2,
      title: "Web Dev Training",
      date: "15 July 2026",
      location: "Lab 1",
      image: "/images/CIT.png",
    },
  ];

  const past = [
    {
      id: 3,
      title: "Cyber Security Seminar",
      date: "10 May 2026",
      location: "Auditorium",
      image: "/images/cyber.png",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔥 HERO SECTION */}
      <div className="relative h-[60vh] w-full">
        <img
          src="/images/mern.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Events & Workshops
          </h1>
          <p className="text-lg text-gray-200 max-w-xl">
            Join our professional IT events and grow your career 🚀
          </p>
        </div>
      </div>

      {/* 🔥 FEATURED EVENT */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Featured Event
        </h2>

        <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-lg overflow-hidden">

          <img
            src={featuredEvent.image}
            className="w-full h-full object-cover"
          />

          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3">
              {featuredEvent.title}
            </h3>

            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Calendar size={16} />
              {featuredEvent.date}
            </div>

            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin size={16} />
              {featuredEvent.location}
            </div>

            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition w-fit">
              Register Now
            </button>
          </div>

        </div>
      </div>

      {/* 🔥 UPCOMING */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Upcoming Events
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {upcoming.map((e) => (
            <div
              key={e.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={e.image}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{e.title}</h3>

                <p className="text-sm text-gray-600 flex gap-2 items-center">
                  <Calendar size={14} /> {e.date}
                </p>

                <p className="text-sm text-gray-600 flex gap-2 items-center mb-3">
                  <MapPin size={14} /> {e.location}
                </p>

                <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 PAST EVENTS */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Past Events
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {past.map((e) => (
            <div
              key={e.id}
              className="bg-gray-100 rounded-xl overflow-hidden"
            >
              <img
                src={e.image}
                className="h-40 w-full object-cover opacity-70"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">{e.title}</h3>
                <p className="text-sm text-gray-500">{e.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}