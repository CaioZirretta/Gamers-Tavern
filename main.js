function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function minimizeNav(){
  const liA = document.querySelectorAll('.nav li')
  for(let i of liA){
    i.classList.toggle('hide')
  }
  const navUser = document.querySelector('.nav .user')
  navUser.classList.toggle('show')

  const navLogOut = document.querySelector('.nav .logout')
  navLogOut.classList.toggle('show')
}

const messages = document.querySelectorAll('.message button')

for(let message of messages){
  message.addEventListener('click', () => {
    const messageContainer = message.parentNode.parentNode.parentNode
    messageContainer.classList.toggle('expand')
    console.log(messageContainer)
  })
}