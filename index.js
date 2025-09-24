// JS 담당자 작업 공간
const input = document.getElementById('todo-input');
const button = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

button.addEventListener('click', () => {
  const task = input.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);
    input.value = '';
  }
});

// 엔터키로도 추가 가능
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    button.click();
  }
});