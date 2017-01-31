export const ORIENTATION = "ORIENTATION";

export const TOUCH = "TOUCH"
export const TOUCH_MOVE= "TOUCH_MOVE"
export const TOUCH_END = "TOUCH_END"

export function orientation(width, height){
  return {
    type: ORIENTATION,
    width: width,
    height: height
  }
}

export function touch(touch){
  return {
    type: TOUCH,
    touch: touch
  }
}

export function touch_move(touch){
  return {
    type: TOUCH_MOVE,
    touch: touch
  }
}

export function touch_end(touch){
  return {
    type: TOUCH_END,
    touch: touch
  }
}
