import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  grade: string;
  image: string;
  specs: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'TMT Steel Bars',
    category: 'Bars',
    grade: 'Fe 500D',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: ['High Strength', 'Corrosion Resistant', 'Earthquake Resistant', 'Sizes: 8mm to 32mm']
  },
  {
    id: 2,
    name: 'Mild Steel Rods',
    category: 'Rods',
    grade: 'MS Grade',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: ['Versatile Usage', 'Easy to Weld', 'Cost Effective', 'Custom Lengths Available']
  },
  {
    id: 3,
    name: 'Steel Sheets',
    category: 'Sheets',
    grade: 'CR/HR',
    image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: ['Galvanized Options', 'Various Thicknesses', 'Rust Resistant', 'Custom Cutting']
  },
  {
    id: 4,
    name: 'Steel Pipes',
    category: 'Pipes',
    grade: 'IS 1239',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: ['Seamless & Welded', 'Multiple Diameters', 'High Durability', 'For Plumbing & Structure']
  },
  {
    id: 5,
    name: 'Structural Steel',
    category: 'Structural',
    grade: 'IS 2062',
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: ['I-Beams & H-Beams', 'Channels & Angles', 'Heavy Load Bearing', 'Custom Fabrication']
  },
  {
    id: 6,
    name: 'Steel Plates',
    category: 'Plates',
    grade: 'ASTM A36',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: ['Heavy Duty', 'Various Sizes', 'Heat Treated', 'Industrial Grade']
  },
  {
    id: 7,
    name: 'Wire Rods',
    category: 'Rods',
    grade: 'SAE 1006',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: ['Flexible', 'High Tensile Strength', 'For Wire Drawing', 'Various Diameters']
  },
  {
    id: 8,
    name: 'Steel Channels',
    category: 'Structural',
    grade: 'ISMC',
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=400',
    specs: ['Standard Sizes', 'Load Bearing', 'Construction Grade', 'Precise Dimensions']
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGrade, setSelectedGrade] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const grades = ['All', ...Array.from(new Set(products.map(p => p.grade)))];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const gradeMatch = selectedGrade === 'All' || product.grade === selectedGrade;
    return categoryMatch && gradeMatch;
  });

  const handleQuoteRequest = (productName: string) => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Premium quality steel products for all your construction and industrial needs
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2">
            <label className="text-slate-700 font-medium">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-slate-700 font-medium">Grade:</label>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {grades.map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.grade}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{product.category}</p>

                <ul className="space-y-1 mb-4">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleQuoteRequest(product.name)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">No products found matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
