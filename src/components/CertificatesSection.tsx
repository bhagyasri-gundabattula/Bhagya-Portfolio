// src/components/CertificatesSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { certificates } from '../data/certificates';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const CertificatesSection: React.FC = () => {
  return (
    <section
      id="certificates"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-24 sm:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Ambience Blurs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#8C6D4F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / CERTIFICATIONS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                ACADEMIC &amp;
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                TECHNICAL CREDENTIALS.
              </span>
            </h2>
          </div>

          <p
            className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Verified technical accreditations, industry job simulations, and specialized engineering competencies earned through rigorous practical application.
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {certificates.map((cert, idx) => {
            const hasCustomImage =
              cert.image &&
              cert.image !== 'MY_CERTIFICATE_IMAGE' &&
              cert.image.trim() !== '';

            return (
              <motion.div
                key={cert.title + idx}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="relative flex flex-col justify-between rounded-sm border border-[#8C6D4F]/35 bg-[#0C0A08] p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.9)] group overflow-hidden transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]"
              >
                {/* Top Subtle Border Highlight Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 4 Precision Corner Crosshairs */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />

                <div>
                  {/* Minimized Clean Certificate Preview Box */}
                  <div className="relative w-full h-20 sm:h-22 rounded-sm overflow-hidden mb-4 border border-[#8C6D4F]/25 bg-[#070605] flex items-center justify-center group-hover:border-[#D4AF37]/40 transition-colors">
                    {hasCustomImage ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Clean Minimalist Emblem Container (No fake IDs, no fake numbers) */
                      <div className="relative w-full h-full flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_70%)] select-none">
                        {/* Micro Corner Guides */}
                        <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-[#8C6D4F]/40" />
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-[#8C6D4F]/40" />
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-[#8C6D4F]/40" />
                        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-[#8C6D4F]/40" />

                        {/* Subtle Laurel/Certificate Emblem */}
                        <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#120F0C] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all duration-300">
                          <svg
                            className="w-5 h-5 text-[#D4AF37]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.004 0H9.496m5.004 0a3 3 0 002.996-3V6.75A2.25 2.25 0 0015.25 4.5h-6.5A2.25 2.25 0 006.5 6.75v5.625a3 3 0 002.996 3m5.004 0h-5.004"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Organization */}
                  <div
                    className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] font-semibold mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {cert.organization}
                  </div>

                  {/* Category Badge */}
                  <div className="mb-2.5">
                    <span
                      className="inline-block text-[9px] font-mono tracking-wider px-2 py-0.5 border border-[#8C6D4F]/35 text-[#C4B5A5] bg-[#14100D] group-hover:border-[#D4AF37]/50 group-hover:text-white transition-all uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {cert.category}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3
                    className="text-xl sm:text-2xl tracking-tight uppercase leading-[0.95] text-white group-hover:text-[#F7E7C4] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {cert.title}
                  </h3>
                </div>

                {/* View Certificate Action Button */}
                <div className="mt-5 pt-3.5 border-t border-[#8C6D4F]/15">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 border border-[#8C6D4F]/40 hover:border-[#D4AF37] bg-[#120F0C] hover:bg-[#1A1510] text-[#D5CBC0] hover:text-[#FFF5EB] text-[10px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)] group/btn"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span>VIEW CERTIFICATE</span>
                    <span className="text-[#D4AF37] transform transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-xs">
                      ↗
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default CertificatesSection;