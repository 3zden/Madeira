// Inline SVG icon set — consistent 24x24, 1.75 stroke, currentColor.
// Kept local instead of pulling in an icon library for ~20 glyphs.
const paths = {
  photo: <><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="8.5" cy="8.5" r="1.6" /><path d="M21 15l-4.5-4.5L5 21" /></>,
  chat: <><path d="M21 11.5a8.4 8.4 0 0 1-11.9 7.6L4 21l1.9-5.1A8.4 8.4 0 1 1 21 11.5z" /><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" /></>,
  sparkle: <><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" /><path d="M18.5 15l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.5 3.8 5.6 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3z" /></>,
  map: <><path d="M9 4L3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4z" /><path d="M9 4v14M15 6v14" /></>,
  star: <path d="M12 3.5l2.6 5.2 5.8.9-4.2 4.1 1 5.8L12 16.8 6.9 19.5l1-5.8L3.6 9.6l5.8-.9L12 3.5z" />,
  users: <><path d="M15.5 20v-1.5a3.5 3.5 0 0 0-3.5-3.5H7a3.5 3.5 0 0 0-3.5 3.5V20" /><circle cx="9.5" cy="8" r="3.2" /><path d="M20.5 20v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.5 5.1a3.2 3.2 0 0 1 0 5.8" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /></>,
  receipt: <><path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21V3z" /><path d="M9 8h6M9 12h5" /></>,
  shield: <><path d="M12 3l7 3v5.2c0 4.4-3 8-7 9.8-4-1.8-7-5.4-7-9.8V6l7-3z" /><path d="M9 11.8l2 2 4-4" /></>,
  pin: <><path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  plane: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />,
  heart: <path d="M12 20s-6.8-4.3-9-8.8C1.5 8.4 2.7 5.3 5.6 5.3c1.8 0 3.1 1 4.4 2.5C11.3 6.3 12.6 5.3 14.4 5.3c2.9 0 4.1 3.1 2.6 5.9-2.2 4.5-9 8.8-9 8.8z" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></>,
  x: <path d="M4 3h4.2l4 5.6L16.8 3H20l-6.3 8L20.4 21H16l-4.4-6.1L6.4 21H3l6.6-8.4L4 3z" fill="currentColor" stroke="none" />,
  youtube: <><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10.5 9.3l5 2.7-5 2.7V9.3z" fill="currentColor" stroke="none" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10.5V17M7.5 7.4v.02M11.5 17v-3.6a2 2 0 0 1 4 0V17" /></>,
}

export function Icon({ name, size = 20, stroke = 1.75, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
