// Function to fetch dog breeds and populate the dropdown
function fetchDogBreeds() {
    var request = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breeds/list/all";
    request.open('GET', url, true);
    request.send();

    request.onload = function() {
        if (request.status == 200 && request.readyState == 4) {
            var data = JSON.parse(this.response);
            var breeds = data.message;
            var breedSelect = document.getElementById('breed');

            for (var breed in breeds) {
                var option = document.createElement('option');
                option.value = breed;
                option.text = breed.charAt(0).toUpperCase() + breed.slice(1); // Capitalize first letter
                breedSelect.appendChild(option);
            }
        } else {
            alert("Failed to fetch dog breeds. Status: " + request.status);
            console.log("Failed to fetch dog breeds. Status: " + request.status);
        }
    }

    request.onerror = function() {
        console.log("Connection failed");
        alert("Connection failed");
    }
}

// Function to fetch a random image of the selected dog breed
function fetchRandomDogImage() {
    var breed = document.getElementById('breed').value;
    var request = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breed/" + breed + "/images/random";
    request.open('GET', url, true);
    request.send();

    request.onload = function() {
        if (request.status == 200 && request.readyState == 4) {
            var data = JSON.parse(this.response);
            var dogImage = document.getElementById('dogImage');
            dogImage.src = data.message;
            dogImage.style.display = 'block';
        } else {
            alert("Failed to fetch dog image. Status: " + request.status);
            console.log("Failed to fetch dog image. Status: " + request.status);
        }
    }

    request.onerror = function() {
        console.log("Connection failed");
        alert("Connection failed");
    }
}

// Initialize the dropdown with dog breeds on page load
document.addEventListener('DOMContentLoaded', function() {
    fetchDogBreeds();
});
