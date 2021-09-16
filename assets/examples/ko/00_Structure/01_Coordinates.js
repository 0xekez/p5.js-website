/*
 * @name 좌표
 * @description 모든 도형들은 좌표값으로 지정된 화면 위치에 나타납니다.
 * 모든 좌표값은 원점으로부터의 거리를 픽셀 단위로 측정합니다.
 * 원점 [0,0]는 화면 좌측 상단의 좌표이며, 우측 하단의 좌표는 [너비-1, 높이-1]에 해당합니다.
 */
function setup() {
  // 캔버스 크기를 너비 720픽셀, 높이 720픽셀로 설정
  createCanvas(720, 400);
}

function draw() {
  // 배경색을 검정색(0)으로 지정, noFill()로 면채우기 기능 해제
  background(0);
  noFill();
    
  // point()의 괄호 안 두 인수로 좌표값 지정
  // 첫번째 인수는 x값을, 두번째 인수는 y값 의미
  stroke(255);
  point(width * 0.5, height * 0.5);
  point(width * 0.5, height * 0.25);

  // 좌표를 활용해 점 뿐 아니라 모든 도형을 그릴 수 있습니다.
  // 각 함수별 괄호에 적힌 매개변수들은 각기 다른 목적을 위해 사용됩니다.
  // 예를들어 line()함수에 쓰인 처음 두 매개변수들은 각각 첫번째 그리고 두번째 끝점을 지정합니다.
  stroke(0, 153, 255);
  line(0, height * 0.33, width, height * 0.33);

  // rect()함수의 처음 두 매개변수는 상단 모서리의 좌표값을 의미하고,
  // 그 다음 두 매개변수는 너비와 높이를 지정합니다.
  stroke(255, 153, 0);
  rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);
}