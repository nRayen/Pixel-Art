let cases = document.querySelectorAll('td')

for (let c of cases) {
    c.addEventListener("onclick", (e) => {
        console.log(e.currentTarget)
    }, false)
}

cases.forEach(c => {
    c.addEventListener('click', () => {
        c.style.backgroundColor = "red";
    }, true)
})


