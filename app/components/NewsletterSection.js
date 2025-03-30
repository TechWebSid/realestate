export default function NewsletterSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-red-50 to-amber-50 rounded-3xl p-8 sm:p-12 shadow-xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-24 h-24 bg-gradient-to-br from-red-200 to-amber-200 rounded-full opacity-50"></div>

          <div className="relative text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Stay Updated with
              <span className="block bg-gradient-to-r from-red-800 to-amber-700 bg-clip-text text-transparent">
                Latest Properties & Offers
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Subscribe to our newsletter and never miss out on exclusive property deals and updates.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-300 
                         bg-white/80 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-red-800/90 to-red-900/90 text-amber-300 rounded-xl
                         hover:shadow-lg transition-all transform hover:scale-105"
              >
                Subscribe Now
              </button>
            </form>

            <p className="text-sm text-gray-500">
              By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 