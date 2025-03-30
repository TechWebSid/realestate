import Image from "next/image";

export default function ValuesSection() {
  const values = [
    {
      title: "Quality",
      description: "We never compromise on the quality of our materials and construction.",
      icon: "🏗️"
    },
    {
      title: "Transparency",
      description: "Clear communication and honest dealings in every transaction.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Embracing modern technology and sustainable building practices.",
      icon: "💡"
    },
    {
      title: "Community",
      description: "Creating spaces that bring people together and foster relationships.",
      icon: "🏘️"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-rose-100/50 to-orange-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide us in creating exceptional living spaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 