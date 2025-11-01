import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Manufacturing Plant',
    category: 'Factory'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Construction Site',
    category: 'Projects'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Steel Structure',
    category: 'Projects'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Steel Products',
    category: 'Products'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Steel Sheets',
    category: 'Products'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Quality Control',
    category: 'Factory'
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Bridge Construction',
    category: 'Projects'
  },
  {
    id: 8,
    url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Industrial Complex',
    category: 'Projects'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our manufacturing facilities and completed projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-blue-300 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <div className="max-w-5xl w-full">
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="w-full h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-2xl font-semibold">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-blue-300">{filteredImages[selectedImage].category}</p>
              </div>
            </div>

            <div className="absolute left-4 right-4 flex justify-between items-center">
              <button
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) =>
                    prev === 0 ? filteredImages.length - 1 : prev! - 1
                  );
                }}
              >
                ←
              </button>
              <button
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) =>
                    prev === filteredImages.length - 1 ? 0 : prev! + 1
                  );
                }}
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
