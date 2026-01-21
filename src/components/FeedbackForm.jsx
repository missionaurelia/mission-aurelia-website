import { useState } from 'react';
import { Send } from 'lucide-react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build mailto link
    const subject = encodeURIComponent('Feedback from Mission: Aurelia Website');
    const body = encodeURIComponent(
      `Name: ${formData.name || 'Anonymous'}\n` +
      `Email: ${formData.email || 'Not provided'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:julie@missionaurelia.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-3">
          💬 Send Feedback
        </h3>
        <p className="text-[var(--color-text)]/70">
          Share your thoughts, ideas, or any feedback you'd like to leave with us.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="block text-sm text-[var(--color-text)]/70"
          >
            Your Name (optional)
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                     text-[var(--color-text)] placeholder:text-[var(--color-text)]/40
                     focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-transparent
                     transition-all"
          />
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className="block text-sm text-[var(--color-text)]/70"
          >
            Your Email (optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                     text-[var(--color-text)] placeholder:text-[var(--color-text)]/40
                     focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-transparent
                     transition-all"
          />
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="message" 
            className="block text-sm text-[var(--color-text)]"
          >
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us what you think..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                     text-[var(--color-text)] placeholder:text-[var(--color-text)]/40
                     focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-transparent
                     transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={!formData.message.trim()}
          className="w-full px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg
                   font-semibold flex items-center justify-center gap-2
                   hover:bg-[var(--color-primary)]/90 transition-all
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={18} />
          Send Feedback
        </button>
      </form>
    </div>
  );
}
