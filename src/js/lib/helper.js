import { PORTRAIT, LANDSCAPE } from "../config/magazine.js"
export function getOrientation(height, width)
{
  return (height > width)? LANDSCAPE : PORTRAIT;
}
