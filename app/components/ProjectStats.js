export default function ProjectStats() {
  const stats = [
    {
      number: "15+",
      label: "Years of Excellence",
      icon: "🏆"
    },
    {
      number: "1000+",
      label: "Happy Families",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      number: "50+",
      label: "Projects Completed",
      icon: "🏢"
    },
    {
      number: "500+",
      label: "Acres Developed",
      icon: "📍"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-800 via-red-900 to-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} 
                 className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center
                           border border-amber-200/20 hover:border-amber-200/40 transition-all">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-amber-300 mb-2">{stat.number}</div>
              <div className="text-amber-100/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 