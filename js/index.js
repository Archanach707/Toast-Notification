const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const massages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
  'Message Five',
]

button.addEventListener('click', () => createNotification())

function createNotification() {
  const notif = document.createElement('div')
  notif.classList.add('toast')

  notif.innerText = getRandomMessage()
}

function getRandomMessage() {
  return massages[Math.floor(Math.random() * massages.length)]
}


