#!/usr/bin/env node

/**
 * concatArrays- main function
 * @param {*} array1 
 * @param {*} array2 
 * @param {*} string 
 * @returns 
 */
export default function concatArrays(array1, array2, string) {
    return [...array1, ...array2, ...string];
  }
