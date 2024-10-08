const tg = window.Telegram.WebApp;

tg.ready();

document.getElementById('user-info').innerText = `Hello, ${tg.initDataUnsafe.user.first_name}!`;

function loadAds() {
    fetch('/api/ads')
        .then(response => response.json())
        .then(ads => {
            const adsList = document.getElementById('ads-list');
            adsList.innerHTML = ads.map(ad => `
                <div class="ad">
                    <h3>${ad.title}</h3>
                    <p>${ad.description}</p>
                    <p>Price: $${ad.price}</p>
                    <p>Contact: ${ad.contact}</p>
                </div>
            `).join('');
        });
}

window.onload = loadAds;
