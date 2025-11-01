import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Kumar Construction Pvt. Ltd.',
    role: 'Managing Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Swastik Steel Works has been our trusted steel supplier for over 5 years. Their product quality is exceptional, and delivery timelines are always met. Highly recommended for large-scale construction projects.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'Metro Infrastructure Ltd.',
    role: 'Procurement Head',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Outstanding service and premium quality steel products. Their technical team is knowledgeable and always ready to help with product specifications. A reliable partner for all our infrastructure projects.'
  },
  {
    id: 3,
    name: 'Amit Patel',
    company: 'Patel Industries',
    role: 'Owner',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'The best steel trading company we have worked with. Their prices are competitive, quality is top-notch, and customer service is excellent. They understand our requirements perfectly.'
  },
  {
    id: 4,
    name: 'Sunita Desai',
    company: 'Skyline Builders',
    role: 'Project Manager',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'We have been associated with Swastik Steel for multiple residential projects. Their TMT bars are of superior quality and meet all IS standards. Very professional team to work with.'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    company: 'Singh Fabricators',
    role: 'Founder',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Excellent range of steel products with customization options. Their fabrication support has been invaluable for our specialized projects. Great experience working with them.'
  },
  {
    id: 6,
    name: 'Meera Reddy',
    company: 'Urban Housing Corporation',
    role: 'Chief Engineer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Swastik Steel Works delivers consistent quality across all orders. Their logistics and supply chain management ensure we never face delays. A dependable partner for our housing projects.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied clients across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={60} className="text-blue-600" />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.role}</p>
                  <p className="text-sm text-slate-600">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star key={idx} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-blue-50 px-8 py-6 rounded-xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-blue-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="h-12 w-px bg-blue-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
