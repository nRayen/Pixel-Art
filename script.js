let cases = document.querySelectorAll('.box')
let selector = document.querySelector('#color-input')
let last = document.querySelectorAll('.last-color')
let color = selector.value
let history = []

// Changer la couleur sélectionnée
selector.addEventListener('change', () => {
    color = selector.value
    history.push(color)

    for(let i=0; i<5; i++) {
        last[i].style.backgroundColor = history[history.length-i-1];
        last[i].dataset.color = history[history.length-i-1]

        history[history.length-i-1] != null ? last[i].style.visibility = 'visible' : 'hidden'
    }
})

// Changer couleur des cases
cases.forEach(c => {
    c.addEventListener('click', () => {
        c.style.backgroundColor = color;
    })
})

// Historique couleurs
last.forEach(btn => {
    btn.addEventListener('click', () => {
        selector.value = btn.dataset.color
        color = btn.dataset.color
        history.push(color)
    })
})
