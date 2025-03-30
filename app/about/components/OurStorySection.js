import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="py-16 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2008, our journey began with a simple vision: to create homes that people would love to live in. Today, we've grown into one of the most trusted names in real estate development.
              </p>
              <p>
                We've successfully delivered over 50 projects, housing more than 10,000 happy families. Our commitment to quality, transparency, and innovation has made us the preferred choice for homebuyers.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-500">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">10k+</div>
                <div className="text-sm text-gray-600">Happy Families</div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/p1.jpg"
              alt="Our Story"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
} 