const contacts = []; 


const registerForm = document.getElementById('add-contact-form');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addContact();
});

function addContact() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('telefone');
    
    const contact = {
        name: nameInput.value,
        phone: phoneInput.value
    };
    contacts.push(contact); // Lägg till kontakten i arrayen


    console.log(contacts); // kontakten har laggts in i arrayen 

    // Töm input-fälten
    nameInput.value = '';
    phoneInput.value = '';
}

