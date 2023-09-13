const chatMessages = document.getElementById('chat-messages');
const nameInput = document.getElementById('name-input');
const roomInput = document.getElementById('room-input');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

let currentUser;
let currentRoom = [];

nameInput.addEventListener('change', () => {
  currentUser = { name: nameInput.value };
});

roomInput.addEventListener('change', () => {
  currentRoom = [];
  updateMessages();
});

sendButton.addEventListener('click', () => {
  const messageText = messageInput.value;
  if (messageText.trim() !== '') {
    const message = { sender: currentUser, text: messageText };
    currentRoom.push(message);
    updateMessages();
    messageInput.value = '';
  }
});

function updateMessages() {
  chatMessages.innerHTML = '';
  currentRoom.forEach(message => {
    appendMessage(message.sender.name, message.text);
  });
}

function appendMessage(sender, text) {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${text}`;
  chatMessages.appendChild(messageElement);
}
