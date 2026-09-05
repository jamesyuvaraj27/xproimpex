/** Section 9.1 — contrast obligations are verified, never assumed. */
const T = {
  'ink.900': '#0A1A22',
  'ink.600': '#4A6169',
  'brine.700': '#0E3F52',
  'brine.500': '#146A80',
  'brine.100': '#E7EFEE',
  'stamp.600': '#8B6914',
  'stamp.100': '#F6ECD8',
  'paper.50': '#FAF8F3',
  'paper.0': '#FFFFFF',
  'rule.300': '#D8D2C4',
  'rule.500': '#8A8578',
  success: '#1E7A4B',
  danger: '#B3261E',
}
const lin = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
const L = (hex) => {
  const n = parseInt(hex.slice(1), 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => lin(v / 255))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const ratio = (a, b) => {
  const [x, y] = [L(T[a]), L(T[b])].sort((p, q) => q - p)
  return (x + 0.05) / (y + 0.05)
}
const checks = [
  ['ink.900', 'paper.50', 4.5, 'body text'],
  ['ink.900', 'paper.0', 4.5, 'body text on white'],
  ['ink.600', 'paper.50', 4.5, 'secondary text'],
  ['ink.600', 'paper.0', 4.5, 'secondary text on white'],
  ['brine.700', 'paper.50', 4.5, 'headings and links'],
  ['brine.700', 'paper.0', 4.5, 'headings on white'],
  ['brine.700', 'brine.100', 4.5, 'headings on tint'],
  ['paper.0', 'brine.700', 4.5, 'primary button label'],
  ['paper.0', 'brine.500', 4.5, 'primary button hover label'],
  ['stamp.600', 'paper.0', 4.5, 'accent text'],
  ['stamp.600', 'paper.50', 4.5, 'accent text on canvas'],
  ['stamp.600', 'brine.100', 3, 'accent rule on tint'],
  ['brine.100', 'brine.700', 4.5, 'footer/vision inverted body'],
  ['paper.50', 'ink.900', 4.5, 'footer text'],
  ['rule.500', 'paper.0', 3, 'meaningful rules (card borders, table separators)'],
  ['rule.500', 'paper.50', 3, 'meaningful rules on canvas'],
  ['rule.500', 'brine.100', 3, 'meaningful rules on tint'],
  ['stamp.600', 'paper.50', 3, 'focus ring vs canvas'],
  // The focus ring is two-tone: violet outline + paper.0 halo. Either edge
  // satisfies 1.4.11 on any surface, so both halves are checked.
  ['paper.0', 'brine.700', 3, 'focus ring halo vs primary surface'],
  ['paper.0', 'stamp.600', 3, 'focus ring halo vs accent'],
  ['success', 'paper.0', 4.5, 'benefit check icon'],
  ['danger', 'paper.0', 4.5, 'gap marker text'],
]
let fail = 0
for (const [a, b, min, note] of checks) {
  const r = ratio(a, b)
  const ok = r >= min
  if (!ok) fail++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2)}:1  (min ${min})  ${a} on ${b} — ${note}`)
}
console.log(fail === 0 ? '\nAll contrast obligations met.' : `\n${fail} pair(s) below requirement.`)
process.exit(fail === 0 ? 0 : 1)
