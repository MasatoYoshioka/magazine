export const ORIENTATION = "ORIENTATION";

export function orientation(width, height){
  return {
    type: ORIENTATION,
    width: width,
    height: height
  }
}
