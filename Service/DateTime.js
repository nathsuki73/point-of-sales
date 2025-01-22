let now = new Date;

setInterval(() => {
    now = new Date
    updateTime();
    updateDate();

}, 1000)

const updateDate = () => {
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }

    const formattedDate = now.toLocaleDateString('en-GB', options)

    document.getElementById('date').childNodes[1].textContent = `${formattedDate}`

}

const updateTime = () => {
    let hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours: 0;

    document.getElementById('time').childNodes[1].textContent = `${hours}:${minutes} ${ampm}`


}

