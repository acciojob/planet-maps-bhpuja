// Tooltip element
const tooltip = document.getElementById('tooltip');
const image = document.getElementById('solar-system-image');

// Attach event listeners to each area
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('mouseover', event => {
        const name = event.target.dataset.name;
        const coords = event.target.coords.split(',').map(Number);
        const shape = event.target.shape;

        // Calculate tooltip position
        let x, y;
        if (shape === 'circle') {
            [x, y] = coords;
        } else if (shape === 'rect') {
            x = (coords[0] + coords[2]) / 2;
            y = coords[1];
        }

        // Adjust tooltip position based on the image position
        const rect = image.getBoundingClientRect();
        tooltip.style.left = `${rect.left + x}px`;
        tooltip.style.top = `${rect.top + y - 30}px`;

        // Show tooltip with the name
        tooltip.textContent = name;
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    area.addEventListener('mouseout', () => {
        // Hide the tooltip
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});

