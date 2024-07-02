const assertEqual = require("../assertEqual");
const head = require("../head");

// assertEqual("test", "test");
// This is a function that checks if values are equal.
assertEqual(1, 1);
assertEqual("zero", 0);

// head test
// head returns the first item in the array.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hey", "Test"]), "Hey");
