'use client';

import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useAnimation } from 'framer-motion';

// Basic motion component exports
export const Motion = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  section: motion.section,
  button: motion.button,
  a: motion.a,
  img: motion.img,
  ul: motion.ul,
  li: motion.li
};

// Export named hooks and components
export { AnimatePresence, useScroll, useTransform, useAnimation };

export default Motion; 