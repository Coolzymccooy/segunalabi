"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    // Use mailto to open default mail client
    window.location.href = `mailto:coolshegz@gmail.com?subject=Website%20Enquiry&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-white/70">Thank you for reaching out! I will get back to you soon.</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-white/70">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-2 text-sm text-white placeholder-white/40 focus:border-white/30 focus:outline-none"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-white/70">
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-2 text-sm text-white placeholder-white/40 focus:border-white/30 focus:outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-white/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-2 text-sm text-white placeholder-white/40 focus:border-white/30 focus:outline-none"
          placeholder="Tell me about your project, role, or any question..."
        />
      </div>
      <button
        type="submit"
        className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
      >
        Send message
      </button>
    </form>
  );
}