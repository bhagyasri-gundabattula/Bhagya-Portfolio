// src/components/ContactSection.tsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ─── EmailJS config pulled from Vite env vars ────────────────────────────────
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL as string;

type SendState = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sendState, setSendState] = useState<SendState>('idle');

  // ─── Field change ───────────────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // ─── Validation ────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format.';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ─── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (sendState === 'sending') return;

    setSendState('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSendState('success');
    } catch (err) {
      console.error('[ContactSection] EmailJS error:', err);
      setSendState('error');
    }
  };

  // ─── Reset form ─────────────────────────────────────────────────────────────
  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSendState('idle');
  };

  // ─── Shared input class builder ─────────────────────────────────────────────
  const inputCls = (field: keyof FormErrors) =>
    `w-full bg-[#120F0C] border ${errors[field] ? 'border-red-500/70' : 'border-[#8C6D4F]/30 focus:border-[#D4AF37]'
    } text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors`;

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  06 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIATE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    COLLABORATION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an ambitious system to architect, an engineering opportunity, or a collaborative inquiry? Send a direct dispatch below.
              </p>

              {/* Direct email fallback */}
              {CONTACT_EMAIL && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-8"
                >
                  <span
                    className="text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] block mb-2"
                  >
                    {'// OR REACH ME DIRECTLY'}
                  </span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-xs text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors underline underline-offset-4 decoration-[#D4AF37]/30 hover:decoration-[#D4AF37]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            <AnimatePresence mode="wait">

              {/* SUCCESS STATE */}
              {sendState === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] text-sm">
                    ✓
                  </div>
                  <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    PACKET DELIVERED
                  </h3>
                  <p className="text-xs text-[#A8988B] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {"Message sent successfully! I'll get back to you soon."}
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] hover:text-[#D4AF37] transition-colors"
                  >
                    ↩ SEND ANOTHER
                  </button>
                </motion.div>
              )}

              {/* FORM (idle / sending / error) */}
              {sendState !== 'success' && (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Error banner */}
                  {sendState === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-red-500/40 bg-red-950/30 px-4 py-3 rounded-sm"
                    >
                      <p className="text-[10px] font-mono tracking-wide text-red-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {'\u2715'}&nbsp;Unable to send your message. Please try again or email me directly.
                      </p>
                    </motion.div>
                  )}

                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                        {'// SENDER'}
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        disabled={sendState === 'sending'}
                        className={inputCls('name')}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[9px] text-red-400 font-mono">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                        {'// CHANNEL'}
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        disabled={sendState === 'sending'}
                        className={inputCls('email')}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[9px] text-red-400 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Subject */}
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      {'// SUBJECT'}
                    </span>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      disabled={sendState === 'sending'}
                      className={inputCls('subject')}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[9px] text-red-400 font-mono">{errors.subject}</p>
                    )}
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      {'// PAYLOAD'}
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter transmission payload..."
                      disabled={sendState === 'sending'}
                      className={`${inputCls('message')} resize-none p-4`}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[9px] text-red-400 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sendState === 'sending'}
                    className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-[#8C6D4F]/50 disabled:hover:bg-[#14100D]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {sendState === 'sending' ? (
                      <span className="inline-flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-3 w-3 text-[#D4AF37]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        SENDING...
                      </span>
                    ) : (
                      'EXECUTE DISPATCH \u2197'
                    )}
                  </button>

                </motion.form>
              )}

            </AnimatePresence>
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            PORTFOLIO // BHAGYASRI
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            {`\u00a9 ${new Date().getFullYear()} PRECISION BY DESIGN`}
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;