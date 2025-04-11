document.addEventListener("DOMContentLoaded", () => {
  // This script handles the scroll animation functionality
  // It's loaded dynamically by the ScrollAnimation component

  // Define CSS properties for the animation
  if ("registerProperty" in CSS) {
    try {
      CSS.registerProperty({
        name: "--progress",
        syntax: "<integer>",
        inherits: true,
        initialValue: "0",
      });

      CSS.registerProperty({
        name: "--measure",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
      });

      CSS.registerProperty({
        name: "--lh",
        syntax: "<integer>",
        inherits: true,
        initialValue: "0",
      });
    } catch (e) {
      console.warn("CSS Properties already registered or not supported");
    }
  }
});
