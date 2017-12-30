/*
Code by: Daniel D.
11/22/17
*/
var bars = [];
var counter = 0;
var fixes = 0;
var correct = 0;
var cycles = 0;
//stores the bar object being moved, acts as a memory.
var mover;

//sorts bars
function cycle() {
  //if counter exceeds the highest index in array, set to 0
  if (counter >= bars.length || bars[counter + 1] === undefined) {
    counter = 0;
    cycles++;
  }
  bars[counter].fill = [255, 0, 0];
  //if first bar is taller than second bar
  if (bars[counter].val > bars[counter + 1].val) {
    correct = 0;
    //Mover stores and remembers object being moved
    mover = bars[counter + 1];
    //Moves bar
    bars[counter + 1] = bars[counter];
    //Sets first bar to stored object
    bars[counter] = mover;
    counter++;
    fixes++;
  } else {
    //if sorted in correct order, move along.

    if (correct != bars.length) {
      correct++;
    } else {
      return;
    }
    counter++;
  }
}
//populates array with objects
function generate() {
  counter = 0;
  for (var i = 0; i < 60; i++) {
    bars[i] = new Bar();
  }
}

function setup() {
  createCanvas(600, 600);
  //Initially Populating Array
  for (var i = 0; i < 60; i++) {
    bars[i] = new Bar();
  }
}

function draw() {
  background(51);
  for (let v in bars) {
    bars[v].fill = [255, 255, 255];
  }
  cycle();
  text('Fixes: ' + fixes, 20, 20);
  text('Cycles: ' + cycles, 20, 30);
  text('Fixes per Cycle: ' + floor(fixes / cycles), 20, 40);
  for (let n in bars) {
    bars[n].show();
  }
}
