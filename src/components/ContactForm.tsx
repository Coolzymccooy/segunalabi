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
    window.location.href = `mailto:segun@tiwaton.co.uk?subject=Website%20Enquiry&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="border-t border-gold pt-4 text-sm text-ink/70">
        Your email client should now be open. I will respond as soon as possible.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-ink/65">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 w-full border-0 border-b border-ink/20 bg-transparent px-0 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-ink/65">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full border-0 border-b border-ink/20 bg-transparent px-0 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-ink/65">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={3}
          className="mt-1 w-full resize-y border-0 border-b border-ink/20 bg-transparent px-0 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none"
          placeholder="What are you building, who is it for, and what needs to change?"
        />
      </div>
      <button
        type="submit"
        className="button-primary inline-flex"
      >
        Send message
      </button>
    </form>
  );
}
