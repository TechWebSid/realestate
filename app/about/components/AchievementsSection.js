export default function AchievementsSection() {
  const achievements = [
    {
      category: "Industry Recognition",
      items: [
        "Best Real Estate Developer 2023",
        "Excellence in Sustainable Development",
        "Top Township Project Award",
        "Customer Satisfaction Excellence"
      ]
    },
    {
      category: "Project Milestones",
      items: [
        "50+ Projects Completed",
        "10,000+ Happy Families",
        "500+ Acres Developed",
        "15+ Premium Locations"
      ]
    },
    {
      category: "Sustainability",
      items: [
        "Green Building Certification",
        "30% Energy Efficient Designs",
        "Rainwater Harvesting",
        "Solar Power Integration"
      ]
    },
    {
      category: "Community Impact",
      items: [
        "Parks & Green Spaces",
        "Community Centers",
        "Sports Facilities",
        "Educational Institutions"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Milestones that mark our journey of excellence in real estate development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.category} 
              className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {achievement.category}
              </h3>
              <div className="space-y-3">
                {achievement.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 bg-white/80 rounded-xl p-3 hover:shadow-md transition-shadow"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-rose-100 to-orange-100 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Building Tomorrow's Communities Today
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our achievements reflect our commitment to excellence, sustainability, and community development. 
            We continue to strive for innovation and quality in every project we undertake.
          </p>
        </div>
      </div>
    </section>
  );
} 