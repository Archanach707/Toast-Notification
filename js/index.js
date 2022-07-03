const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const massages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
  'Message Five',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification
('This is invalid data', 'success'))

function createNotification(massage = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = massage ? massage : getRandomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return massages[Math.floor(Math.random() * massages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}

