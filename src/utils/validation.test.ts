import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm, resolveActiveSection, shouldShowScrollTop } from './validation';

test('validateContactForm rejects empty and malformed inputs', () => {
  const result = validateContactForm({
    name: 'A',
    email: 'invalid-email',
    topic: '',
    message: 'Too short',
  });

  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.topic);
  assert.ok(result.errors.message);
});

test('validateContactForm accepts valid contact submission', () => {
  const result = validateContactForm({
    name: 'Samira Chen',
    email: 'samira.chen@example.org',
    topic: 'Bug Report / Device Compatibility',
    message: 'Testing HLS muxing on Pixel 8 Android 15 works great with preserved cookies.',
  });

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
