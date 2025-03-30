import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/team-1.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Architecture",
      image: "/team-2.jpg"
    },
    {
      name: "Michael Brown",
      role: "Construction Director",
      image: "/team-3.jpg"
    },
    {
      name: "Emily Davis",
      role: "Customer Relations Head",
      image: "/team-4.jpg"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced team of professionals is dedicated to delivering excellence in every project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-rose-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 