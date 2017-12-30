/*
Code by: Daniel D.
11/22/17
*/
function Bar() {
  this.val = floor(random(20, height));
  this.width = width / 60;
  this.fill = 255;
  this.show = function() {
    fill(this.fill[0], this.fill[1], this.fill[2]);
    rect(bars.indexOf(this) * this.width, height - this.val, this.width, this.val);
  }
}
