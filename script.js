const app = document.getElementById('root')


const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:5050/', true)
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    const p = document.createElement('pre')
    p.textContent = this.response
    container.appendChild(p)
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Not Working!`
    app.appendChild(errorMessage)
  }
}

request.send()