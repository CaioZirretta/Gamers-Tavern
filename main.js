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

  const navMinimize = document.querySelector('.nav li button i')
  navMinimize.classList.toggle('rotate')

  const navLogOut = document.querySelector('.nav .logout')
  navLogOut.classList.toggle('show')
}