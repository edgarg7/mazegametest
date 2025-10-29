// Detect input mode: desktops use keyboard; phones/tablets use swipe.
// Many laptops report "touch", so we prioritize OS desktop flag.
export function detectInputMode(game) {
  const isDesktop = !!game.device?.os?.desktop;
  return {
    isTouch: !isDesktop // only phones/tablets count as touch mode
  };
}
