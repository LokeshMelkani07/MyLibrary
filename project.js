console.log('Library');

// Constructor
function books(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add Methods to display Prototype

// implement the validation before adding a book
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

// Implement whether the validation was a success or not
Display.prototype.show = function (type, msg) {
    let message = document.getElementById('message');
    message.innerHTML = `
   <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Message !</strong> ${msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
    // To make the message blank after 2sec we use setTimeout function
    setTimeout(function () {
        msg.innerHTML = "";
    }, 2000);
}


// Implement the add book function
Display.prototype.add = function (book) {
    console.log('Adding');
    let tableBody = document.getElementById('tableBody');
    let uiString = ` <tr>
   <td>${book.name}</td>
   <td>${book.author}</td>
   <td>${book.type}</td>
   </tr>`;
    tableBody.innerHTML += uiString;

}

// Implement the clear text function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}



// Add submit Event Listener to libraryForm
let submitButton = document.getElementById('btnAddBook');
// console.log(LibraryForm);
submitButton.addEventListener('click', buttonOnClick);

function buttonOnClick(e) {
    console.log('Your Book has been added to the Library');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let fiction = document.getElementById('fiction');
    let selfGrowth = document.getElementById('selfGrowth');
    let academic = document.getElementById('academic');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (selfGrowth.checked) {
        type = selfGrowth.value;
    }
    else if (academic.checked) {
        type = academic.value;
    }
    let book = new books(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your Book has been successfully Added');
    }
    else {
        display.show('danger', 'Sorry ! Your book has not been added');
    }


}
