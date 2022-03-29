// api.data.ts
// a file ending with data.(j|t)s will be evaluated in Node.js
export interface APIGroup {
  text: string
  items: {
    text: string
    link: string
    headers: string[]
  }[]
}

// declare resolved data type
export declare const data: APIGroup[]

export default {
  // declare files that should trigger HMR
  watch: './*.md',
  // read from fs and generate the data
  load(): APIGroup[] {
    return []
  }
}
