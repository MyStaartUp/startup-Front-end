// Placeholder data (we'll fetch this from the backend later)
const startups = [
    { name: "Startup A", description: "Short description of Startup A", logo: "startup-a-logo.png" },
    { name: "Startup B", description: "Short description of Startup B", logo: "startup-b-logo.png" },
    // ... more startups
];

const startupGrid = document.querySelector('.startup-grid');

startups.forEach(startup => {
    const card = document.createElement('div');
    card.classList.add('startup-card');
    card.innerHTML = `
        <img src="${startup.logo}" alt="${startup.name} Logo">
        <h3>${startup.name}</h3>
        <p>${startup.description}</p>
        <a href="#">Learn More</a>
    `;
    startupGrid.appendChild(card);
});