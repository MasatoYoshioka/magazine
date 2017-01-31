export const INIT_CONTENT = "INIT_CONTENT"
export const NEXT_CONTENT = "NEXT_CONTENT"
export const PREV_CONTENT = "PREV_CONTENT"

export function init_content(){
  return {
    type: INIT_CONTENT
  }
}

export function next_content(){
  return {
    type: NEXT_CONTENT
  }
}

export function prev_content(){
  return {
    type: PREV_CONTENT
  }
}
