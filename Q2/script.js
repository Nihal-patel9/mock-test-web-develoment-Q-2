        // Get references to the input elements
        const inputBox = document.getElementById("inputBox");
        const submitButton = document.getElementById("submitButton");
        const listContainer = document.getElementById("listContainer");

        // Add a click event listener to the submit button
        submitButton.addEventListener("click", function () {
            // Get the input value
            const inputValue = inputBox.value;

            // Create a new list item
            const listItem = document.createElement("li");
            listItem.textContent = inputValue;

            // Append the new list item to the list container
            listContainer.appendChild(listItem);

            // Clear the input box
            inputBox.value = "";
        });
