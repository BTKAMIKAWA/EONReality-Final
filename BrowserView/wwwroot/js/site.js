const app = document.getElementById('root')


var request = new XMLHttpRequest()
request.open('GET', 'https://localhost:44331/api/user', true)
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(user => {
            const row = document.createElement('tr')

            const nametd = document.createElement('td')
            nametd.textContent = user.name
            nametd.setAttribute('scope', 'col')

            const emailtd = document.createElement('td')
            emailtd.textContent = user.email
            emailtd.setAttribute('scope', 'col')

            const gendertd = document.createElement('td')
            gendertd.textContent = user.gEnder
            gendertd.setAttribute('scope', 'col')

            const datertd = document.createElement('td')
            datertd.textContent = user.dateRegistered
            datertd.setAttribute('scope', 'col')

            const addr = document.createElement('td')
            addr.textContent = user.additionalRequest
            addr.setAttribute('scope', 'col')

            app.appendChild(row)
            row.appendChild(nametd)
            row.appendChild(emailtd)
            row.appendChild(gendertd)
            row.appendChild(datertd)
            row.appendChild(addr)
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

request.send()


const uri = 'https://localhost:44331/api/user/';
function addUser() {
    const namebox = document.getElementById('add-name');
    const emailbox = document.getElementById('add-email');
    const malebox = document.getElementById('add-male');
    const femalebox = document.getElementById('add-female')
    const datebox = document.getElementById('add-date');
    const requestbox = document.getElementById('add-request');

    const user = {
        name: namebox.value,
        email: emailbox.value,
        gEnder: malebox.value && femalebox.value,
        dateRegistered: datebox.value,
        additionalRequest: requestbox.value
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    console.log(user)
        .then(response => response.json())
        .catch(error => console.error('Unable to Add user', error));

}