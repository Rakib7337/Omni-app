import test from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveActiveSection,
  resolveInitialLanguage,
  resolveInitialTheme,
  shouldShowScrollTop,
  validateContactForm,
} from './validation';

test('resolveInitialTheme defaults to light and respects dark override', () => {
  assert.equal(resolveInitialTheme(null), 'light');
  assert.equal(resolveInitialTheme(undefined), 'light');
  assert.equal(resolveInitialTheme('light'), 'light');
  assert.equal(resolveInitialTheme('dark'), 'dark');
});

test('resolveInitialLanguage defaults to bn and respects en override', () => {
  assert.equal(resolveInitialLanguage(null), 'bn');
  assert.equal(resolveInitialLanguage(undefined), 'bn');
  assert.equal(resolveInitialLanguage('bn'), 'bn');
  assert.equal(resolveInitialLanguage('en'), 'en');
});

test('validateContactForm rejects empty and malformed inputs in both en and bn', () => {
  const enResult = validateContactForm(
    {
      name: 'A',
      email: 'invalid-email',
      topic: '',
      message: 'Too short',
    },
    'en'
  );

  assert.equal(enResult.valid, false);
  assert.ok(enResult.errors.name);
  assert.ok(enResult.errors.email);
  assert.ok(enResult.errors.topic);
  assert.ok(enResult.errors.message);

  const bnResult = validateContactForm(
    {
      name: 'ক',
      email: 'bad',
      topic: '',
      message: 'ছোট',
    },
    'bn'
  );

  assert.equal(bnResult.valid, false);
  assert.match(bnResult.errors.name ?? '', /নাম/);
  assert.match(bnResult.errors.email ?? '', /ইমেইল/);
  assert.match(bnResult.errors.topic ?? '', /বিষয়/);
  assert.match(bnResult.errors.message ?? '', /বার্তা|১৫/);
});

test('validateContactForm accepts valid contact submission', () => {
  const result = validateContactForm(
    {
      name: 'Samira Chen',
      email: 'samira.chen@example.org',
      topic: 'Feature Request / Feedback',
      message: 'Testing HLS muxing on Pixel 8 Android 15 works great with preserved cookies.',
    },
    'bn'
  );

  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
});

test('resolveActiveSection picks last section past scroll offset', () => {
  const sections = [
    { id: 'why-switch', top: 500 },
    { id: 'comparison', top: 1200 },
    { id: 'download', top: 2000 },
    { id: 'faq', top: 2800 },
  ];

  assert.equal(resolveActiveSection(sections, 0), 'why-switch');
  assert.equal(resolveActiveSection(sections, 1100), 'comparison');
  assert.equal(resolveActiveSection(sections, 2750), 'faq');
});

test('shouldShowScrollTop returns true only past threshold', () => {
  assert.equal(shouldShowScrollTop(0), false);
  assert.equal(shouldShowScrollTop(320), false);
  assert.equal(shouldShowScrollTop(321), true);
});
