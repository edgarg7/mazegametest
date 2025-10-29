export const CELL_SIZE = 24;         // Maze cell size in pixels
export const START_COLS = 25;        // Use odd numbers for perfect mazes
export const START_ROWS = 19;

export const PLAYER_SPEED = 120;
export const ENEMY_SPEED  = 105;

// Make the player smaller than the corridor so turns aren’t pixel-perfect.
// Try 4–8px. Increase if you still feel snagging.
export const PLAYER_MARGIN = 6;      // pixels trimmed off total width/height

// Swipe detection (mobile)
export const SWIPE_MIN_DIST = 28;    // px
export const SWIPE_MAX_TIME = 320;   // ms

// Turning tolerance when checking “am I centered in a cell?”
export const CENTER_EPSILON = 3;     // px (was 2; a little extra helps corners)

export const MAX_LEVELS = 3;         // generate up to 3 levels for now
