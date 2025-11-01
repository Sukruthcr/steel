import { Building2, Hammer, Factory, GitBranch, Home, Drill } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    name: 'Construction',
    description: 'High-grade steel for residential and commercial building projects with superior strength and durability.'
  },
  {
    icon: GitBranch,
    name: 'Infrastructure',
    description: 'Structural steel solutions for bridges, highways, and large-scale infrastructure development projects.'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Industrial-grade steel products for machinery, equipment, and manufacturing facility construction.'
  },
  {
    icon: Hammer,
    name: 'Fabrication',
    description: 'Custom steel fabrication services for specialized industrial and construction applications.'
  },
  {
    icon: Home,
    name: 'Real Estate',
    description: 'Reliable steel solutions for housing projects, townships, and real estate developments.'
  },
  {
    icon: Drill,
    name: 'Mining & Heavy Industry',
    description: 'Heavy-duty steel products designed for demanding mining and industrial operations.'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted partner across diverse sectors with specialized steel solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
