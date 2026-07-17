import { test } from 'node:test'
import assert from 'node:assert/strict'
import { validateSignup } from './waitlist.js'

test('accepts and normalizes a real email', () => {
  const r = validateSignup({ email: '  Ada@Example.COM ' })
  assert.equal(r.ok, true)
  assert.equal(r.email, 'ada@example.com')
})

test('rejects malformed / empty / missing addresses', () => {
  assert.equal(validateSignup({ email: 'not-an-email' }).ok, false)
  assert.equal(validateSignup({ email: 'a@b' }).ok, false) // no domain dot
  assert.equal(validateSignup({ email: '' }).ok, false)
  assert.equal(validateSignup({ email: undefined }).ok, false)
})

test('rejects oversized input', () => {
  const huge = 'a'.repeat(250) + '@x.com' // 256 chars
  assert.equal(validateSignup({ email: huge }).ok, false)
})

test('honeypot marks a filled field as a bot', () => {
  const r = validateSignup({ email: 'real@example.com', hp: 'gotcha' })
  assert.equal(r.ok, false)
  assert.equal(r.error, 'bot')
})
