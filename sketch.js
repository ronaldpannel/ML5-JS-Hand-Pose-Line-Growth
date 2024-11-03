//ml5.js
let video;
let handPose;
let hands = [];
let lines = [];
let num = 1;

function preload() {
  // Load the handPose model
  handPose = ml5.handPose({ flipped: true });
}
// function mousePressed() {
//   console.log(hands);
// }

function getHands(results) {
  hands = results;
}

function setup() {
  createCanvas(640, 480);
  colorMode(HSB);
  // Create the webcam video and hide it
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, getHands);
}

function draw() {
  image(video, 0, 0);
  if (hands.length > 1) {
    let leftHand = hands[0];
    let rightHand = hands[1];

    let leftIndex = leftHand.index_finger_tip;
    let rightIndex = rightHand.index_finger_tip;
    let leftThumb = leftHand.thumb_tip;
    let rightThumb = rightHand.thumb_tip;
    // strokeWeight(8);
    // line(leftIndex.x, leftIndex.y, rightIndex.x, rightIndex.y);
    // stroke(255);
    for (let i = 0; i < num; i++) {
      lines.push(
        new Line(leftIndex.x, leftIndex.y, rightIndex.x, rightIndex.y)
      );

      if (lines.length > 2) {
        lines.splice(i, 1);
      }
    }
  }
  for (let i = lines.length - 1; i > 0; i--) {
    lines[i].update();
    lines[i].draw();
  }
}

function windowResized() {
  resizeCanvas(400, 400);
}
