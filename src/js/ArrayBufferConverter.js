/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default class ArrayBufferConverter {
    load(value) {
      this.buffer = value;
    }
  
    toString() {
      const view = new Uint16Array(this.buffer);
      return String.fromCharCode(...view);
    }
  }