import { useState } from 'react';
import { Check, ChevronDown, Copy, Mail, Send } from 'lucide-react';
import { FAQ_ITEMS } from '../data/omniData';
import {
  ContactFormErrors,
  ContactFormValues,
  validateContactForm,
} from '../utils/validation';

const INITIAL_FORM: ContactFormValues = {
  name: '',
  email: '',
  topic: 'Feature Request / Feedback',
  message: '',
};

export function DeveloperFaqSection() {
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([FAQ_ITEMS[0].id]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formValues, setFormValues] = useState<ContactFormValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedRecord, setSubmittedRecord] = useState<ContactFormValues | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('rhpro111@gmail.com');
    } catch {
      // Clipboard fallback ignored in restricted sandboxes
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (
    field: keyof ContactFormValues,
    value: string
  ) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateContactForm(formValues);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmittedRecord({ ...formValues });
    setFormValues(INITIAL_FORM);
  };

  return (
    <section className="border-b border-slate-200/60 py-16 sm:py-24 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* FAQ Accordion */}
        <div id="faq" className="scroll-mt-24">
          <div className="max-w-2xl" data-aos="fade-up">
            <p className="bg-gradient-to-r from-[#0288D1] to-[#06B6D4] bg-clip-text text-xs font-semibold tracking-wide text-transparent">
              Frequently Asked Questions
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F172A] sm:text-4xl dark:text-[#F8FAFC]"
              style={{ textWrap: 'balance' }}
            >
              Helpful answers on saving, watching ad-free, and editing.
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="glass-surface mt-8 divide-y divide-slate-200/70 rounded-2xl border dark:divide-white/10"
          >
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqIds.includes(item.id);
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    id={`faq-trigger-${item.id}`}
                    onClick={() => toggleFaq(item.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/40 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0288D1] dark:hover:bg-white/5"
                  >
                    <span className="font-display text-base font-semibold text-[#0F172A] sm:text-lg dark:text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-150 dark:text-slate-400 ${
                        isOpen ? 'rotate-180 text-[#0288D1] dark:text-[#06B6D4]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      className="px-6 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Creator & Contact Section */}
        <div
          id="developer"
          data-aos="fade-up"
          className="glass-surface mt-20 scroll-mt-24 grid gap-8 rounded-2xl border p-6 sm:p-10 lg:grid-cols-12"
        >
          {/* Creator Profile Card */}
          <div className="flex min-w-0 flex-col justify-between lg:col-span-5">
            <div>
              <p className="bg-gradient-to-r from-[#0288D1] to-[#06B6D4] bg-clip-text text-xs font-semibold tracking-wide text-transparent">
                App Creator
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl dark:text-white">
                Built by Rakib Hasan
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Independent Android app creator designing clean, fast, ad-free mobile utilities
                built around smooth playback, effortless saving, and zero subscription clutter.
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
                <img
                  src="/src/assets/images/dev_workspace_mark_1795528291778.jpg"
                  alt="Workspace desk of OmniDownloader creator Rakib Hasan"
                  referrerPolicy="no-referrer"
                  className="aspect-square max-h-60 w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-200/70 pt-5 dark:border-white/10">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="glass-card-subtle inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border px-4 py-2.5 text-xs font-semibold text-[#0F172A] transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0288D1] dark:text-white dark:hover:bg-white/10"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#0288D1] dark:text-[#06B6D4]" />
                    <span>Copied rhpro111@gmail.com</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy rhpro111@gmail.com</span>
                  </>
                )}
              </button>

              <a
                href="mailto:rhpro111@gmail.com?subject=OmniDownloader%20Feedback"
                className="soft-gradient-cta inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 text-xs font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4]"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email Creator</span>
              </a>
            </div>
          </div>

          {/* Validated Feedback Form */}
          <div className="glass-card-subtle min-w-0 rounded-xl border p-6 lg:col-span-7">
            <h3 className="font-display text-lg font-bold text-[#0F172A] dark:text-white">
              Send Feedback or Feature Request
            </h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Share device feedback, request a website or format, or suggest your favorite new UI
              feature.
            </p>

            {submittedRecord ? (
              <div
                role="status"
                className="mt-6 rounded-xl border border-[#0288D1]/30 bg-[#0288D1]/10 p-5 dark:border-[#06B6D4]/30 dark:bg-[#06B6D4]/10"
              >
                <p className="font-display text-base font-semibold text-[#0288D1] dark:text-[#06B6D4]">
                  Message Ready for Rakib Hasan
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                  Thanks, {submittedRecord.name}. Your{' '}
                  <span className="font-medium">{submittedRecord.topic}</span> note has been
                  validated and prepared for <span className="font-mono">rhpro111@gmail.com</span>.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={`mailto:rhpro111@gmail.com?subject=${encodeURIComponent(
                      `[OmniDownloader] ${submittedRecord.topic}`
                    )}&body=${encodeURIComponent(
                      `From: ${submittedRecord.name} (${submittedRecord.email})\n\n${submittedRecord.message}`
                    )}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#0288D1] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0277BD]"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Open in Mail App
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedRecord(null)}
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-200"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formValues.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      placeholder="Alex Rivera"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400 focus:border-[#0288D1] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-[#06B6D4]"
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        className="mt-1 text-xs font-medium text-rose-600 dark:text-rose-400"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-200"
                    >
                      Reply Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      placeholder="alex@domain.com"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400 focus:border-[#0288D1] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-[#06B6D4]"
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className="mt-1 text-xs font-medium text-rose-600 dark:text-rose-400"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-200"
                  >
                    Topic
                  </label>
                  <select
                    id="contact-topic"
                    name="topic"
                    value={formValues.topic}
                    onChange={(e) => handleChange('topic', e.target.value)}
                    aria-invalid={Boolean(errors.topic)}
                    aria-describedby={errors.topic ? 'contact-topic-error' : undefined}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] focus:border-[#0288D1] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-[#06B6D4]"
                  >
                    <option value="Feature Request / Feedback">Feature Request / Feedback</option>
                    <option value="App Bug / Playback Issue">
                      App Bug / Playback Issue
                    </option>
                    <option value="Website Support Request">
                      Website Support Request
                    </option>
                    <option value="General Question">General Question</option>
                  </select>
                  {errors.topic && (
                    <p
                      id="contact-topic-error"
                      className="mt-1 text-xs font-medium text-rose-600 dark:text-rose-400"
                    >
                      {errors.topic}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formValues.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    placeholder="Share your Android version, phone model, or feature idea..."
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400 focus:border-[#0288D1] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-[#06B6D4]"
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="mt-1 text-xs font-medium text-rose-600 dark:text-rose-400"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Opens ready-to-send draft in your email app
                  </span>
                  <button
                    type="submit"
                    className="soft-gradient-cta inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#0288D1]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4]"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
