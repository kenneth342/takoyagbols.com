function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', () => {
    const placeOrderButton = document.getElementById('place-order-btn');
    const form = document.querySelector('#add-order form');
    
    placeOrderButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get the values from the form
        const flavor = document.getElementById('flavor').value;
        const quantity = document.getElementById('quantity').value;

        // Check if the form is properly filled out (optional validation)
        if (flavor && quantity && quantity > 0) {
            const successMessage = document.createElement('p');
            successMessage.textContent = 'A successful order has been placed!';
            successMessage.style.color = 'green'; // Change the text color to green for success
            successMessage.style.fontWeight = 'bold';
            successMessage.style.fontSize = '20px';
            document.querySelector('#add-order').appendChild(successMessage);

            // Optionally reset the form (if you want)
            form.reset();
        } else {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Please fill out the form correctly.';
            errorMessage.style.color = 'red'; // Error message in red
            errorMessage.style.fontWeight = 'bold';
            errorMessage.style.fontSize = '20px';
            document.querySelector('#add-order').appendChild(errorMessage);
        }
    });
});
