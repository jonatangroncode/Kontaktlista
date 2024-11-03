const registerForm = document.getElementById('add-contact-form');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    addContact(); 
});

function addContact() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('telefone');
    const contactList = document.getElementById('contactList');

    // Skapa dom nya HTML-elementen för kontakten som hamnar inne i listan
    const listItem = document.createElement('li');
    listItem.className = 'contact-item';

    const nameField = document.createElement('input');
    nameField.type = 'text';
    nameField.value = nameInput.value;
    nameField.disabled = true;

    const phoneField = document.createElement('input');
    phoneField.type = 'text';
    phoneField.value = phoneInput.value;
    phoneField.disabled = true;

    const editButton = document.createElement('button');
    editButton.innerText = 'Ändra';
    editButton.onclick = () => editContact(nameField, phoneField, editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Radera';
    deleteButton.onclick = () => contactList.removeChild(listItem);


    listItem.appendChild(nameField);
    listItem.appendChild(phoneField);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    contactList.appendChild(listItem);

    nameInput.value = '';
    phoneInput.value = '';
}

