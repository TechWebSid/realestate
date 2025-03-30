export default function WhyChooseUs() {
  const features = [
    {
      icon: "🏠",
      title: "Premium Locations",
      description: "Strategically located properties in the most sought-after areas"
    },
    {
      icon: "✨",
      title: "Quality Assurance",
      description: "Highest standards of construction and finishing"
    },
    {
      icon: "💎",
      title: "Luxury Amenities",
      description: "World-class facilities for modern living"
    },
    {
      icon: "🤝",
      title: "Expert Guidance",
      description: "Professional support throughout your journey"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose
            <span className="bg-gradient-to-r from-red-800 to-amber-700 bg-clip-text text-transparent">
              {" "}Us
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">Experience excellence in every aspect of real estate</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} 
                 className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all
                           border border-gray-100 hover:border-amber-200">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-red-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10">
        <svg className="w-64 h-64 text-blue-50" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>
    </section>
  );
} 