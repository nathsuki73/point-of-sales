setInterval(() => {
    const now = new Date;
    let hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours: 0;

    document.getElementById('time').childNodes[1].textContent = `${hours}:${minutes} ${ampm}`
}, 1000)