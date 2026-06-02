"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { fadeUp, staggerContainer, slideLeft, slideRight } from "@/lib/motion-config";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: "📍", label: "Location", value: "Karachi, Pakistan" },
  { icon: "📱", label: "Phone", value: "+92 310 1201414" },
  { icon: "✉️", label: "Email", value: "aunmohammad254@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/aun-abbas-847234254" },
  { icon: "🐙", label: "GitHub", value: "github.com/AunMohammad254" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    setSubmitting(true);
    try {
      if (
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        const emailjs = await import("@emailjs/browser");
        await emailjs.default.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: _data.name,
            from_email: _data.email,
            subject: _data.subject || "No subject",
            message: _data.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
      } else {
        window.location.href = `mailto:aunmohammad254@gmail.com?subject=${encodeURIComponent(_data.subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${_data.name} (${_data.email})\n\n${_data.message}`)}`;
      }
      setSubmitted(true);
      reset();
    } catch {
      window.location.href = `mailto:aunmohammad254@gmail.com?subject=${encodeURIComponent(_data.subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${_data.name} (${_data.email})\n\n${_data.message}`)}`;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
            Let&apos;s Work Together
          </h2>
          <p className="text-text-muted mt-3 max-w-lg mx-auto">
            Open to freelance projects, full-time roles, and interesting collabs.
          </p>
          <div className="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full p-12 rounded-2xl bg-surface border border-border"
              >
                <span className="text-5xl mb-4">✓</span>
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-muted text-center">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 rounded-full border border-primary/30 text-text-primary hover:bg-primary/10 transition-all"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <input
                    {...register("name")}
                    placeholder="Name *"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="text-red-400 text-xs mt-1"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email")}                    suppressHydrationWarning                    placeholder="Email *"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="text-red-400 text-xs mt-1"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <input
                    {...register("subject")}
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    placeholder="Message *"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="text-red-400 text-xs mt-1"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-3 rounded-full bg-primary text-white font-medium hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 disabled:opacity-60"
                >
                  {submitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Send Message →"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4"
          >
            <motion.div variants={slideRight} className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border mb-2">
              <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-text-muted">Available for work</span>
            </motion.div>

            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                variants={slideRight}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">
                  {info.icon}
                </span>
                <div>
                  <p className="text-xs text-text-muted">{info.label}</p>
                  <p className="text-sm text-text-primary">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
