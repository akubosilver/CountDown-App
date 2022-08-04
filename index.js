
const dateToLunch = new Date().setMonth(new Date().getMonth() + 1, 0)
setInterval(() => {
    const currentDate = new Date()
    const dateBtw = Math.ceil((dateToLunch - currentDate) / 1000)
    lunchTime(dateBtw)
}, 250)

function lunchTime(dateBtw) {
    const seconds = dateBtw % 60
    const minutes = Math.floor(dateBtw / 60) % 60
    const hours = Math.floor(dateBtw / 3600)
    const days = Math.floor(hours / 24)

    flip((document.querySelector('[data-days]')), days)
    flip((document.querySelector('[data-hours]')), hours)
    flip((document.querySelector('[data-minutes]')), minutes)
    flip((document.querySelector('[data-seconds]')), seconds)
}

function flip(countDown, newNumber) {
    const topHalf = countDown.querySelector('.top')
    const startNumber = parseInt(topHalf.textContent);
    if(newNumber === startNumber) return

    const bottomHalf = countDown.querySelector('.bottom')
    const topFlip = document.createElement('div')
    topFlip.classList.add('top-flip')
    const bottomFlip = document.createElement('div')
    bottomFlip.classList.add('bottom-flip')

    topHalf.textContent = startNumber
    bottomHalf.textContent = startNumber
    topFlip.textContent = startNumber
    bottomFlip.textContent = newNumber

    topFlip.addEventListener('animationstart', (e) => {
        topHalf.textContent = newNumber
    })
    topFlip.addEventListener('animationend', (e) => {
        topFlip.remove()
    })
    bottomFlip.addEventListener('animationstart', (e) => {
        bottomHalf.textContent = newNumber 
    })
    bottomFlip.addEventListener('animationend', (e) => {
        bottomFlip.remove()
    })
    countDown.append(topFlip, bottomFlip);
}