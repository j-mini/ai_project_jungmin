// HTML에서 필요한 요소를 가져옵니다.
const nameInput   = document.getElementById("nameInput");   // 이름 입력창
const startButton = document.getElementById("startButton"); // 실습 시작 버튼
const messageArea = document.getElementById("resultArea");  // 메시지 출력 영역

// 요소를 제대로 찾지 못했을 때 바로 에러가 나지 않도록 확인합니다.
if (!nameInput || !startButton || !messageArea) {
  console.error("필요한 HTML 요소를 찾지 못했습니다. id 값을 확인해주세요.");
}

// 화면에 메시지를 보여주는 함수입니다.
// text: 출력할 문장, type: "success"(성공) 또는 "warning"(경고)
function showMessage(text, type) {
  const messageBox = document.createElement("div");
  messageBox.className = "message-box " + type; // CSS 클래스: message-box success / message-box warning
  messageBox.textContent = text;

  messageArea.innerHTML = "";        // 이전 메시지를 지웁니다.
  messageArea.appendChild(messageBox); // 새 메시지를 추가합니다.
}

// 버튼을 클릭했을 때 실행되는 함수입니다.
function handleStartClick() {
  const name = nameInput.value.trim(); // 앞뒤 공백을 제거한 입력값

  if (name) {
    // 이름이 있으면 환영 메시지를 초록색으로 출력합니다.
    showMessage(name + "님, 환영합니다! AI 협업 개발 실습을 시작합니다.", "success");
  } else {
    // 이름이 없으면 경고 메시지를 노란색으로 출력합니다.
    showMessage("이름을 입력한 뒤 다시 시도해주세요", "warning");
  }
}

// 버튼에 클릭 이벤트를 연결합니다.
if (startButton) {
  startButton.addEventListener("click", handleStartClick);
}
