const socket = io('http://localhost:3000');

socket.on('receive_message', (msg) => {
  const messagesDiv = document.getElementById('messages');
  const div = document.createElement('div');

  // Utiliser createdAt au lieu de date
  const date = msg.createdAt
    ? new Date(msg.createdAt).toLocaleString('fr-FR')
    : '';

  div.innerText = `${msg.content} (${date})`;
  messagesDiv.appendChild(div);
});

document.getElementById('send').addEventListener('click', () => {
  const contentInput = document.getElementById('content');
  const content = contentInput.value.trim();

  if (!content) return;

  socket.emit('send_message', { content });

  contentInput.value = '';
});
