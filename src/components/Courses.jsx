export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'CIT',
      shortTitle: 'Computer Information Technology',
      description:
        'Comprehensive IT fundamentals including programming, databases, and system administration.',
      image: '/images/CIT.png',
    },
    {
      id: 2,
      title: 'Office Automation',
      shortTitle: 'MS Office & Business Tools',
      description:
        'Master MS Office suite including Word, Excel, PowerPoint, and advanced data management.',
      image: '/images/office.png',
    },
    {
      id: 3,
      title: 'AI',
      shortTitle: 'Artificial Intelligence',
      description:
        'Explore machine learning, deep learning, neural networks, and AI applications.',
      image: '/images/ai1.png',
    },
    {
      id: 4,
      title: 'Networking',
      shortTitle: 'Network Administration',
      description:
        'Learn network design, configuration, troubleshooting, and security protocols.',
      image: '/images/net.png',
    },
    {
      id: 5,
      title: 'Cyber Security',
      shortTitle: 'Information Security',
      description:
        'Understand cybersecurity threats, defense mechanisms, and ethical hacking.',
      image: '/images/cyber.png',
    },
    {
      id: 6,
      title: 'Web Development',
      shortTitle: 'Frontend & Backend',
      description:
        'Build responsive websites using HTML, CSS, JavaScript, React, Node.js, and databases.',
      image: '/images/mern.png',
    },
    {
      id: 7,
      title: 'Mobile App Dev',
      shortTitle: 'iOS & Android Development',
      description:
        'Create native and cross-platform mobile applications for iOS and Android.',
      image: '/images/app.png',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Popular <span className="text-green-600">Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
            Choose from our wide range of industry-leading courses designed to boost your IT career.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 hover:-translate-y-3"
            >

              {/* TOP BADGE */}
              <span className="absolute top-3 left-3 z-20 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                Popular
              </span>

              {/* IMAGE */}
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Hover text on image */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-500">
                  <p className="text-xs">
                    Learn modern tools & real-world skills
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition">
                  {course.title}
                </h3>

                <p className="text-xs text-gray-500 mb-2">
                  {course.shortTitle}
                </p>

                <p className="text-sm text-gray-600 mb-5 line-clamp-3">
                  {course.description}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-2">

                  <button className="flex-1 py-2 rounded-lg bg-green-600 text-white text-sm font-semibold transition duration-300 hover:bg-green-700 hover:shadow-lg">
                    Enroll
                  </button>

                  <button className="flex-1 py-2 rounded-lg border border-green-600 text-green-600 text-sm font-semibold transition duration-300 hover:bg-green-600 hover:text-white">
                    Details
                  </button>

                </div>
              </div>

              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-green-400/40 transition duration-500"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}