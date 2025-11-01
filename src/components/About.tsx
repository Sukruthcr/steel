import { Award, Target, Eye, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Manufacturing Plant"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Building Strong Foundations Since 2003</h3>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Swastik Steel Works has been a trusted name in the steel industry for over 20 years. We specialize in both trading and manufacturing high-quality steel products that meet the demanding requirements of modern construction and industrial applications.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Our state-of-the-art manufacturing facilities, combined with our commitment to quality and customer satisfaction, have made us the preferred choice for contractors, builders, and industries across the region.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0" size={24} />
                <span className="text-slate-700">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0" size={24} />
                <span className="text-slate-700">20+ Years of Industry Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0" size={24} />
                <span className="text-slate-700">500+ Satisfied Clients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0" size={24} />
                <span className="text-slate-700">Premium Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h4>
            <p className="text-slate-700 leading-relaxed">
              To provide superior quality steel products and exceptional service that exceeds our clients' expectations while maintaining sustainable and ethical business practices.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h4>
            <p className="text-slate-700 leading-relaxed">
              To be the leading steel trading and manufacturing company recognized for innovation, quality, and reliability in serving the construction and industrial sectors.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h4>
            <p className="text-slate-700 leading-relaxed">
              Quality, integrity, and customer satisfaction are at the core of everything we do. We believe in building lasting relationships through trust and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
