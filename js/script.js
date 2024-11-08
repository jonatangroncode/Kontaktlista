const contacts = []; 


const registerForm = document.getElementById('add-contact-form');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addContact();
});

const deleteAllBtn = document.getElementById('deleteAllButton');
deleteAllBtn.addEventListener('click', deleteAllContacts);

function addContact() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('telefone');

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameInput.classList.add('invalid');
        nameInput.placeholder = '* Skriv ett namn';
        isValid = false; 
    } else {
        nameInput.classList.remove('invalid');
    }

    if (phoneInput.value.trim() === '') {
        phoneInput.classList.add('invalid');
        phoneInput.placeholder = '* Skriv telefonnummer';
        isValid = false; 
    } else {
        phoneInput.classList.remove('invalid');
    }

    if (!isValid) {
        return;
    }

    const contact = {
        name: nameInput.value,
        phone: phoneInput.value
    };
    contacts.push(contact);

    updateContactList();

    nameInput.placeholder = 'Namn';
    phoneInput.placeholder = 'Telefon nummer';
    nameInput.value = '';
    phoneInput.value = '';
}


function updateContactList() {

    const contactList = document.getElementById('contactList');
    contactList.innerHTML = ''; 

   
    contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'contact-item';

        const nameField = document.createElement('input');
        nameField.type = 'text';
        nameField.value = contact.name;
        nameField.disabled = true;

        const phoneField = document.createElement('input');
        phoneField.type = 'text';
        phoneField.value = contact.phone;
        phoneField.disabled = true;

        const editButton = document.createElement('button');
        editButton.innerText = 'Ändra';
        editButton.onclick = () => editContact(index, nameField, phoneField, editButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Radera';
        deleteButton.onclick = () => deleteContact(index); 

        listItem.appendChild(nameField);
        listItem.appendChild(phoneField);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        contactList.appendChild(listItem);
    });
}

function editContact(index, nameField, phoneField, editButton) {

    if (editButton.innerText === 'Ändra') {
        nameField.disabled = false;
        phoneField.disabled = false;
        editButton.innerText = 'Spara';
    } else {
        if (nameField.value.trim() === '') {
            nameField.classList.add('invalid');
            nameField.placeholder = '* Skriv ett namn';
            return; 
        } else {
            nameField.classList.remove('invalid');
        }

        if (phoneField.value.trim() === '') {
            phoneField.classList.add('invalid');
            phoneField.placeholder = '* Skriv telefonnummer';
            return; 
        } else {
            phoneField.classList.remove('invalid');
        }

        contacts[index].name = nameField.value;
        contacts[index].phone = phoneField.value;

        nameField.disabled = true;
        phoneField.disabled = true;
        editButton.innerText = 'Ändra';

        updateContactList(); 
    }
}


function deleteContact(index) {

    contacts.splice(index, 1); // Ta bort kontakten från arrayen
    updateContactList();
}


function deleteAllContacts() {
    if (confirm('Är du säker på att du vill radera alla kontakter?')) {
        contacts.length = 0; // Töm arrayen
        updateContactList(); 
        alert('Alla kontakter har raderats.');
    } else {
        alert('Radering avbröts.');
    }
}

//TODO: validering ifyllda fält på editContact()
//TODO: lägg till validering att telefonnummer måste ha en viss struktur xxx-xxxxxxx
//TODO: Ändra required på input för spara till snyggare validering
//TODO: ändra alert till snyggare validering i deleteAllContacts()