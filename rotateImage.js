let img; // 회전시킬 이미지
let angle = -21; // 회전 각도

function setup() {
  createCanvas(700, 500);
  img = loadImage('doc1.jpg');
  imageMode(CENTER);
}

function draw() {
  image(img, width / 4, height / 2);
  translate(width / 6*4, height / 2); // 회전 중심을 캔버스 중앙으로 이동
  rotateImage(img, angle);
}

function rotateImage(img, a) {
  // 수학적 회전 공식을 적용하기 위해 행렬 변환 사용
  let c = cos(radians(a));
  let s = sin(radians(a));
  applyMatrix(c, -s, s, c, 0, 0); // 회전 행렬을 적용
  // 이미지 그리기
  image(img, 0, 0);
  resetMatrix(); // 행렬을 원래대로 복원
}
