export default function GalleryPage() {
  const photos = [
    { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500", title: "Setup" },
    { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500", title: "Coding" },
    { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500", title: "Design" },
    { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500", title: "Terminal" },
  ];

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <h1 className="text-4xl font-bold mb-12 text-center">My World</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <div key={i} className="relative aspect-square overflow-hidden rounded-2xl group">
            <img 
              src={photo.src} 
              alt={photo.title} 
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-medium">{photo.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}