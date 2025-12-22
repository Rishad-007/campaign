import { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "সম্প্রদায় প্রচার",
      category: "অনুষ্ঠান",
      image: "/gallery-1.JPG",
    },
    {
      id: 2,
      title: "স্বাস্থ্যসেবা পরিদর্শন",
      category: "সেবা",
      image: "/gallery-1.JPG",
    },
    {
      id: 3,
      title: "স্কুল উদ্বোধন",
      category: "শিক্ষা",
      image: "/gallery-1.JPG",
    },
    {
      id: 4,
      title: "টাউন হল সভা",
      category: "অনুষ্ঠান",
      image: "/gallery-1.JPG",
    },
    {
      id: 5,
      title: "পরিবেশ উদ্যোগ",
      category: "পরিবেশ",
      image: "/gallery-1.JPG",
    },
    {
      id: 6,
      title: "যুব কর্মসূচি",
      category: "শিক্ষা",
      image: "/gallery-1.JPG",
    },
    {
      id: 7,
      title: "অবকাঠামো প্রকল্প",
      category: "উন্নয়ন",
      image: "/gallery-1.JPG",
    },
    {
      id: 8,
      title: "বয়োজ্যেষ্ঠ নাগরিক সভা",
      category: "সেবা",
      image: "/gallery-1.JPG",
    },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="section-header">
          <span className="section-label">কর্মে</span>
          <h2 className="section-title">গ্যালারি</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            আমাদের সেবা, সম্প্রদায় যুক্ততা এবং ইতিবাচক পরিবর্তনের যাত্রার
            একঝলক।
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
                src={item.image}
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
          <h3>সংযুক্ত থাকুন</h3>
          <p>
            দৈনিক আপডেট এবং পর্দার আড়ালে ঘটনার জন্য সোশ্যাল মিডিয়ায় আমাদের
            অনুসরণ করুন
          </p>
          <div className="social-links">
            <a href="#facebook" className="social-btn">
              ফেসবুক
            </a>
            <a href="#twitter" className="social-btn">
              টুইটার
            </a>
            <a href="#instagram" className="social-btn">
              ইনস্টাগ্রাম
            </a>
            <a href="#youtube" className="social-btn">
              ইউটিউব
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
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
