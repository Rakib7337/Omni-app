export interface ContactFormValues {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: ContactFormErrors;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactForm(values: ContactFormValues): ContactValidationResult {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const topic = values.topic.trim();
  const message = values.message.trim();

  if (name.length < 2) {
    errors.name = 'Enter your name (at least 2 characters).';
  } else if (name.length > 80) {
    errors.name = 'Name must be 80 characters or fewer.';
  }

  if (!email) {
    errors.email = 'Enter an email address so Rakib can reply.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address (e.g. alex@domain.com).';
  }

  if (!topic) {
    errors.topic = 'Select a message topic.';
  }

  if (message.length < 15) {
    errors.message = 'Provide at least 15 characters describing your request or feedback.';
  } else if (message.length > 1500) {
    errors.message = 'Message must be 1,500 characters or fewer.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface SectionPosition {
  id: string;
  top: number;
}

export function resolveActiveSection(
  sections: SectionPosition[],
  scrollY: number,
  offset = 140
): string {
  if (sections.length === 0) return '';
  const targetY = scrollY + offset;
  let active = sections[0].id;
  for (const section of sections) {
    if (section.top <= targetY) {
      active = section.id;
    }
  }
  return active;
}

export function shouldShowScrollTop(scrollY: number, threshold = 320): boolean {
  return scrollY > threshold;
}
