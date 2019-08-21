const blocksTravels = document.querySelectorAll('.js-block-travel');

function filterBlocksTravels(even) {
    const value = event.target.value.toLowerCase();

    blocksTravels.forEach(travel => {
        const title = travel.querySelector('.title-travel').innerText.toLowerCase();
        if (title.includes(value)) { travel.classList.remove('hidden'); }
        else { travel.classList.add('hidden'); }
    })

}

const search = document.querySelector('.search');
if (search) search.addEventListener('keyup', filterBlocksTravels)