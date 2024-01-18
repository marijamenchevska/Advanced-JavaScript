/* 1. Movies renting App
 - Create a movie renting app.
 - There should be an array of movie names.
 - There should be an input and a search button.
 - When the person enters a name of a movie it should search the array.
 - If the name exists it should show an H1 element that says: "The movie can be rented" in green text.
 - If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text.
 - The input should not be case sensitive ( it should find the movie regardless of capital or small letters ).
*/

let storedMovies = ["The Shawshank Redemption", "Schindler's List", "Fight Club", "The Matrix", "Up", "Shutter Island", "No Country for Old Men", "Vertigo", "Titanic", "Parasite", "Avatar", "Hangover", "The Platform", "Pirates of the Caribbean", "Harry Potter", "Dune", "Saw", "Hunger Games", "The Mummy", "Kill Bill"];

let movieInputField = document.getElementById("movieInput");
let searchButton = document.getElementById("movieSearch");
let messageField = document.getElementById("messageField");

// I

searchButton.addEventListener("click", function() {
    let missedMovie = 0;

    for (let movie of storedMovies) {
        if (movieInputField.value.toLowerCase() === movie.toLowerCase()) {
            messageField.innerHTML = "<h1 style='color: green'>The movie can be rented.</h1>";
            break;
        }
        else {
            missedMovie++;
        }
    };

    if(missedMovie === storedMovies.length) {
        messageField.innerHTML = "<h1 style='color: red'>The movie can't be rented.</h1>";
    };
});

// II

searchButton.addEventListener("click", function() {
    let missedMovie = true;

    for (let movie of storedMovies) {
        if (movieInputField.value.toLowerCase() === movie.toLowerCase()) {
            messageField.innerHTML = "<h1 style='color: green'>The movie can be rented.</h1>";
            missedMovie = false;
            break;
        }
    };

    if(missedMovie === true) {
        messageField.innerHTML = "<h1 style='color: red'>The movie can't be rented.</h1>";
    };
});

// III

searchButton.addEventListener("click", function() {
    let changedArray = storedMovies;

    for (let i = 0; i < changedArray.length; i++) {
        changedArray.splice(i, 1, changedArray[i].toLowerCase());
    };

    if (changedArray.includes(movieInputField.value.toLowerCase())) {
        messageField.innerHTML = "<h1 style='color: green'>The movie can be rented.</h1>";
    }
    else {
        messageField.innerHTML = "<h1 style='color: red'>The movie can't be rented.</h1>";
    }
});



/* 2. Reminder App
 - Create a reminder app.
 - There should be:
   * An input for entering the title
   * An input for entering priority
   * An input for color
   * A textarea for adding a description
   * A button for adding the reminder
   * A button for showing all reminders.
 - When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description ).
 - The object should then be added to an array of reminders.
 - When the button for showing all reminders is clicked it should show a table with title, priority, and description columns.
 - The title should be the color of the "color" property.
*/

let titleInputField = document.getElementById("titleInput");
let priorityInputField = document.getElementById("priorityInput");
let colorInputField = document.getElementById("colorInput");
let descriptionInputField = document.getElementById("descriptionInput");
let addButton = document.getElementById("add");
let showAllButton = document.getElementById("showAll");
let tableField = document.getElementById("generatedTable");
let remindersArray = [];

function CreateReminderObject (title, priority, color, description) {
    this.title = title,
    this.priority = priority,
    this.color = color,
    this.description = description
}

// I

function tableCreation (element, objectArray) {
    let table = "<table style='border: 2px solid black; border-spacing: 0'><tbody>";
    table += `<th style='border: 1px solid black'>No.</th>  
              <th style='border: 1px solid black'>Title</th>  
              <th style='border: 1px solid black'>Priority</th>  
              <th style='border: 1px solid black'>Description</th>`;

    for (let object of objectArray) {
        table += "<tr>";

        table += `<td style="border: 1px solid black; text-align: center;">${objectArray.indexOf(object) + 1}</td>  
                  <td style="color: ${object.color}; border: 1px solid black; text-align: center;">${object.title}</td>  
                  <td style="border: 1px solid black; text-align: center;">${object.priority}</td>  
                  <td style="border: 1px solid black; text-align: center;">${object.description}</td>`;

        table += "</tr>";
    };

    table += "</tbody></table>";

    element.innerHTML = table;
}

addButton.addEventListener("click", function() {
    let newReminder = new CreateReminderObject(titleInputField.value, priorityInputField.value, colorInputField.value, descriptionInputField.value);
    remindersArray.push(newReminder);

    titleInputField.value = "";
    priorityInputField.value = "";
    colorInputField.value = "";
    descriptionInputField.value = "";
});

showAllButton.addEventListener("click", function() {
    // tableField.replaceChildren(); or tableField.innerHTML = "" -> needed for III and IV
    tableCreation(tableField, remindersArray);
});

// II

function tableCreation (element, objectArray) {
    let table = "<table style='border: 2px solid black; border-spacing: 0'><tbody>";
    table += "<th>No.</th>  <th>Title</th> <th>Priority</th>  <th>Description</th>";

    for (let object of objectArray) {
        table += "<tr>";

        table += `<td class='cell'>${objectArray.indexOf(object) + 1}</td>  
                  <td class='cell' style="color: ${object.color}">${object.title}</td>  
                  <td class='cell'>${object.priority}</td>  
                  <td class='cell'>${object.description}</td>`;

        table += "</tr>";
    };

    let cells = document.getElementsByClassName("cell");

    for (let cell of cells) {
        cell.setAttribute = ("style", "border: 1px solid black; text-align: center");
    };

    table += "</tbody></table>";

    element.innerHTML = table;
}

// III

function tableCreation (element, objectArray) {
    let table = document.createElement("table");
    table.setAttribute("style", "border: 2px solid black; border-spacing: 0");

    let tbody = document.createElement("tbody");

    let headerText = ["No.", "Title", "Priority", "Description"];

    for (let htext of headerText) {
        let theader = document.createElement("th");
        theader.setAttribute("style", "border: 1px solid black");

        let headerCellText = document.createTextNode(htext);
        theader.appendChild(headerCellText);
        table.appendChild(theader);
    };

    for (let object of objectArray) {
        let row = document.createElement("tr");
        let objectProperties = [objectArray.indexOf(object) + 1, object.title, object.priority, object.description];

        for (let property of objectProperties) {
            let rowCell = document.createElement("td");
            rowCell.setAttribute("style", "border: 1px solid black; text-align: center");

            // change of title color // concatenation of 'color' with getAttribute is also possible
            // if(property === object.title) {
            //     rowCell.style.color = `${object.color}`; // setAttribute would rewrite the previous style
            // }

            let cellText = document.createTextNode(property);
            rowCell.appendChild(cellText);
            row.appendChild(rowCell);
        };

        tbody.appendChild(row);
    };

    table.appendChild(tbody);
    element.appendChild(table);
}

// IV

function cellAppendage (childElement, textArray, parentElement) {
    for (let item of textArray) {
        let rowCell = document.createElement(childElement);
        rowCell.setAttribute("style", "border: 1px solid black; text-align: center");

        let cellText = document.createTextNode(item);
        rowCell.appendChild(cellText);
        parentElement.appendChild(rowCell);
    };
}

function tableCreation (element, objectArray) {
    let table = document.createElement("table");
    table.setAttribute("style", "border: 2px solid black; border-spacing: 0");

    let tbody = document.createElement("tbody");

    let headerText = ["No.", "Title", "Priority", "Description"];

    cellAppendage("th", headerText, table);

    for (let object of objectArray) {
        let row = document.createElement("tr");
        let objectValues = [objectArray.indexOf(object) + 1, object.title, object.priority, object.description];

        cellAppendage("td", objectValues, row);

        tbody.appendChild(row);
    };

    table.appendChild(tbody);
    element.appendChild(table);
}



/* 3. StarWars Person Stats
 - Create a button. 
 - When the button is clicked, call the StarWars api for the first person.
 - Print the person name in an h1 tag.
 - Print the person stats in a table:
   * Height
   * Weight
   * Eye color
   * Hair color
  URL: https://swapi.dev/api/people/1 
*/

let requestButton = document.getElementById("getAPI");
let printField = document.getElementById("personStats");

function personStats (APIobject) {
    let table = "<table style='border: 2px solid black; border-spacing: 0'><tbody>";
    table += `<th style="border: 1px solid black">Height</th>  
              <th style="border: 1px solid black">Weight</th>  
              <th style="border: 1px solid black">Eye color</th>  
              <th style="border: 1px solid black">Hair color</th>`;

    table += "<tr>";

    table += `<td style="border: 1px solid black; text-align: center">${APIobject.height}</td>  
              <td style="border: 1px solid black; text-align: center">${APIobject.mass}</td>  
              <td style="border: 1px solid black; text-align: center">${APIobject.eye_color}</td>  
              <td style="border: 1px solid black; text-align: center">${APIobject.hair_color}</td>`;

    table += "</tr>";
    table += "</tbody></table>"; 

    printField.innerHTML += table;
}

requestButton.addEventListener("click", function() {
    fetch("https://swapi.dev/api/people/1")
    .then (function(response) {
        if(!response.ok) {
            throw new Error("There is something wrong with the network or the server.");
        }
        return response.json();
    })
    .then (function(response) {
        printField.innerHTML = `<h1>${response.name}</h1>`;
        personStats(response);
    })
    .catch(function(response) {
        console.log(response);
    });
})

