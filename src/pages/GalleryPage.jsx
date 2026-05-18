// import React, { useState } from "react";
// import { Icon, Eyebrow } from "../components/ui/index";
// import { useReveal } from "../hooks/index";
// import { GALLERY, GALLERY_CATS } from "../data/index";

// const PageHero = () => (
//   <section className="hero-bg pt-32 pb-16 relative overflow-hidden">
//     <div className="hero-geo" />
//     <div className="noise-overlay" />
//     <div className="container-wide relative z-10">
//       <div className="max-w-3xl">
//         <div className="mb-6"><Eyebrow>Our Portfolio</Eyebrow></div>
//         <h1 className="h-display text-[#19184C] dark:text-[#E8EDF2] mb-6" style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)" }}>
//           Work That<br />
//           <span style={{ color: "#C8963E" }}>Speaks for Itself.</span>
//         </h1>
//         <p className="text-lg leading-relaxed max-w-xl text-[#5A6A7A] dark:text-[#8B9BB0]" style={{ fontWeight: 300 }}>
//           A curated showcase of completed projects across all our service verticals.
//         </p>
//       </div>
//     </div>
    
//   </section>
// );

// const GalleryGrid = () => {
//   const [filter, setFilter] = useState("All");
//   const { ref, visible } = useReveal();
//   const filtered = filter === "All" ? GALLERY : GALLERY.filter(g => g.cat === filter);
//   return (
//     <section className="section bg-white dark:bg-[#171648]">
//       <div className="container-wide">
//         <div className="flex flex-wrap gap-2 mb-12 justify-center">
//           {GALLERY_CATS.map(cat => (
//             <button key={cat} onClick={() => setFilter(cat)} className={`filter-btn ${filter === cat ? "active" : ""}`}>
//               {cat}
//             </button>
//           ))}
//         </div>
//         <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {filtered.map((g, i) => (
//             <div key={`${g.title}-${i}`} className={`gallery-thumb h-60 transition-all duration-600 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${i * 60}ms` }}>
//               <div className={`thumb-img w-full h-full bg-gradient-to-br ${g.bg} flex items-center justify-center`}>
//                 <Icon name={g.icon} size={48} style={{ color: "rgba(255,255,255,0.25)" }} />
//               </div>
//               <div className="overlay">
//                 <div>
//                   <p className="text-[10px] tracking-[0.15em] uppercase mb-1" style={{ color: "#C8963E", fontFamily: "'DM Mono', monospace" }}>{g.cat}</p>
//                   <p className="font-semibold text-white text-sm">{g.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {filtered.length === 0 && (
//           <div className="text-center py-20 text-muted">No items in this category.</div>
//         )}
//       </div>
//     </section>
//   );
// };

// const GalleryPage = () => (
//   <main className="page">
//     <PageHero />
//     <GalleryGrid />
//   </main>
// );
// export default GalleryPage;
