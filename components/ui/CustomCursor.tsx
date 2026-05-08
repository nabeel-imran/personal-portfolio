// Custom cursor removed for performance — the constant requestAnimationFrame
// loop and global mouse event listeners caused noticeable input lag on lower-end
// devices and on long pages. The site uses standard system cursors now.
//
// Kept as a no-op export so existing imports continue to work without code-splits.
export function CustomCursor() {
  return null
}
