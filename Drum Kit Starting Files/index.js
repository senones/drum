
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // Determine the letter associated with the clicked drum button
        var drumLetter = this.textContent;

        // Call a function to play the corresponding audio file
        playDrumSound(drumLetter);
        this.style.color = "white";
    });
}

// Function to play the corresponding audio file based on the drum letter
function playDrumSound(drumLetter) {
    switch (drumLetter) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            break;
        // Add cases for other drum letters and their corresponding audio files
        // ...
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            break;
            case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            break;
            case "j":
            var audio = new Audio('sounds/snare.mp3');
            break;
            case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            break;
            case "l":
            var audio = new Audio('sounds/crash.mp3');
            break;
        default:
            console.error("Invalid drum letter: " + drumLetter);
            return;
    }

    // Play the audio
    audio.play();
}

