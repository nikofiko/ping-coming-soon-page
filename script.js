const btn1 = document.querySelector('.btn-1')
const input = document.querySelector('input')
const h2 = document.querySelector('h2')

btn1.addEventListener('click', function (event) {
    if (validateEmail(input.value)){
        event.preventDefault()
        input.style.borderColor = "hsl(0, 0%, 85%)"
        h2.style.display = "none"
    }else{
        event.preventDefault()
        input.style.borderColor = "hsl(354, 100%, 66%)"
        h2.style.display = "block"
    }
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
