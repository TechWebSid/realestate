export default function Testimonials() {
  const testimonials = [
    {
      text: "Found our dream home thanks to their exceptional service and attention to detail.",
      author: "Rajesh Kumar",
      role: "Homeowner"
    },
    {
      text: "Professional team with in-depth knowledge of the real estate market in Lucknow.",
      author: "Priya Singh",
      role: "Property Investor"
    },
    {
      text: "Transparent process and excellent customer service throughout our buying journey.",
      author: "Amit Sharma",
      role: "First-time Buyer"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our
            <span className="bg-gradient-to-r from-red-800 to-amber-700 bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">Hear from our satisfied customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} 
                 className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg
                           border border-gray-100 hover:border-amber-200">
              {/* <div className="text-amber-500 text-4xl mb-6">"</div> */}
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-red-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 