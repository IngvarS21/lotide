const head = require ('../head');
const assertEqual = require('../assertEqual');
// Test Case 1: Check the returned array elements

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");