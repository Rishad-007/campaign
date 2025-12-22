import { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, title: "Community Outreach", category: "events" },
    { id: 2, title: "Healthcare Visit", category: "service" },
    { id: 3, title: "School Inauguration", category: "education" },
    { id: 4, title: "Town Hall Meeting", category: "events" },
    { id: 5, title: "Environmental Initiative", category: "environment" },
    { id: 6, title: "Youth Program", category: "education" },
    { id: 7, title: "Infrastructure Project", category: "development" },
    { id: 8, title: "Senior Citizens Meeting", category: "service" },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="section-header">
          <span className="section-label">In Action</span>
          <h2 className="section-title">Gallery</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            A glimpse into our journey of service, community engagement, and
            positive change.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={`/gallery-${item.id}.jpg`}
                alt={item.title}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=" + item.title;
                }}
              />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <span className="category-badge">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <h3>Stay Connected</h3>
          <p>
            Follow us on social media for daily updates and behind-the-scenes
            moments
          </p>
          <div className="social-links">
            <a href="#facebook" className="social-btn">
              Facebook
            </a>
            <a href="#twitter" className="social-btn">
              Twitter
            </a>
            <a href="#instagram" className="social-btn">
              Instagram
            </a>
            <a href="#youtube" className="social-btn">
              YouTube
            </a>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={`/gallery-${selectedImage.id}.jpg`}
              alt={selectedImage.title}
            />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
