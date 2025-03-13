document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rsvp-form');
    const attending = document.getElementById('attending');
    const branchingQuestions = document.getElementById('branching-questions');
    const message = document.getElementById('form-message');

    // Show/hide branching questions based on attendance
    attending.addEventListener('change', () => {
        branchingQuestions.style.display = attending.value === 'yes' ? 'block' : 'none';
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
            name: document.getElementById('name').value,
            attending: attending.value,
            guests: document.getElementById('guests')?.value || null,
            meal: document.getElementById('meal')?.value || null,
        };

        // Save to localStorage (temporary storage for demo)
        localStorage.setItem('rsvp_' + data.name, JSON.stringify(data));
        
        // Optionally, send to Google Sheets (requires setup, see below)
        // sendToGoogleSheets(data);

        message.textContent = 'Thank you for your RSVP!';
        form.reset();
        branchingQuestions.style.display = 'none';
    });
});

// Optional: Function to send RSVP to Google Sheets (requires setup)
function sendToGoogleSheets(data) {
    // Use a service like Google Apps Script or a free API endpoint
    console.log('RSVP Data:', data);
}
