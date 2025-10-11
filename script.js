document.addEventListener('DOMContentLoaded', () => {
    // --- Firebase Initialization ---
    if (typeof firebase !== 'undefined') {
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };

        const app = firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();

        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.name.value;
            const email = contactForm.email.value;
            const message = contactForm.message.value;

            db.collection('contacts').add({
                name: name,
                email: email,
                message: message,
                timestamp: new Date()
            })
            .then(() => {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.style.color = '#FFD700';
                contactForm.reset();
                setTimeout(() => formStatus.textContent = '', 3000);
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
                formStatus.textContent = 'Error sending message. Please try again.';
                formStatus.style.color = 'red';
            });
        });
    } else {
        console.warn("Firebase is not available. Contact form will not work.");
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Dynamic Tile Catalog ---
    const collections = {
        "Italian": [
            { "name": "Italian Tile 1", "image": "images/italian1.jpg" },
            { "name": "Italian Tile 2", "image": "images/italian2.jpg" }
        ],
        "Chinese": [
            { "name": "Chinese Tile 1", "image": "images/chinese1.jpg" },
            { "name": "Chinese Tile 2", "image": "images/chinese2.jpg" }
        ],
        "Outdoor": [
            { "name": "Outdoor Tile 1", "image": "images/outdoor1.jpg" },
            { "name": "Outdoor Tile 2", "image": "images/outdoor2.jpg" }
        ]
    };

    const features = [
        { "name": "Scratch-Resistant", "description": "Durable and resistant to scratches." },
        { "name": "Heat-Proof", "description": "Withstands high temperatures." },
        { "name": "Slip-Proof", "description": "Safe for wet areas." }
    ];

    const applications = [
        { "name": "Hotels", "description": "Elegant solutions for hotels." },
        { "name": "Homes", "description": "Beautiful tiles for your home." },
        { "name": "Malls", "description": "Durable tiles for high-traffic areas." }
    ];

    function populateGallery(items) {
        const gallery = document.querySelector('.collection-gallery');
        let html = '';
        let resultsFound = false;

        for (const category in items) {
            const categoryItems = items[category].map(item => `
                <div class="tile-item">
                    <img src="${item.image}" alt="${item.name}" style="width:100px;height:100px;background:gold;">
                    <h4>${item.name}</h4>
                    <a href="https://wa.me/your-whatsapp-number?text=I'm%20interested%20in%20${item.name}" class="whatsapp-inquiry" target="_blank">Inquire on WhatsApp</a>
                </div>
            `).join('');

            if (items[category].length > 0) {
                resultsFound = true;
                html += `<div class="category-container"><h3>${category}</h3><div class="category-grid">${categoryItems}</div></div>`;
            }
        }

        if (!resultsFound) {
            html = '<p style="color: #000; text-align: center; font-size: 1.2em;">No results found.</p>';
        }

        gallery.innerHTML = html;
    }

    function populateList(selector, items) {
        const list = document.querySelector(selector);
        list.innerHTML = items.map(item => `
            <div class="list-item">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    populateGallery(collections);
    populateList('.feature-list', features);
    populateList('.application-list', applications);

    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCollections = {};

        for (const category in collections) {
            const filteredTiles = collections[category].filter(tile =>
                tile.name.toLowerCase().includes(searchTerm) ||
                category.toLowerCase().includes(searchTerm)
            );

            if (filteredTiles.length > 0) {
                filteredCollections[category] = filteredTiles;
            }
        }

        populateGallery(filteredCollections);
    });
});