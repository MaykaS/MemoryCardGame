
const cards = document.getElementsByClassName("card"); 
let allImages = document.getElementsByClassName("card-image"); 
let movesDisplay = document.querySelector(".move-counter"); 
let toggledCardsArray = []; 
let winCount = 0; 
const restart = document.getElementById("restart"); 

const imgesArray = [
    { id: 1, image: "../img/1.png", newAlt: "one" },
    { id: 2, image: "../img/2.png", newAlt: "two" },
    { id: 3, image: "../img/3.jpeg", newAlt: "three" },
    { id: 4, image: "../img/4.png", newAlt: "four" },
    { id: 5, image: "../img/5.jpeg", newAlt: "five" },
    { id: 6, image: "../img/6.jpeg", newAlt: "six" },
    { id: 7, image: "../img/1.png", newAlt: "one" },
    { id: 8, image: "../img/2.png", newAlt: "two" },
    { id: 9, image: "../img/3.jpeg", newAlt: "three" },
    { id: 10, image: "../img/4.png", newAlt: "four" },
    { id: 11, image: "../img/5.jpeg", newAlt: "five" },
    { id: 12, image: "../img/6.jpeg", newAlt: "six" }
]

const restartGame=()=>{
    imgesArray.sort(() => Math.random() - 0.5); // Shuffle images

    toggledCardsArray.length = 0;
    winCount = 0;
    // Update card images and add backface
    for (let i = 0; i < allImages.length; i++) {
        cards[i].classList.remove("toggled"); // Remove toggled class to show backface
        setTimeout(() => {
            allImages[i].src = imgesArray[i].image;
            allImages[i].alt = imgesArray[i].newAlt;
            allImages[i].id = imgesArray[i].id;
        }, 0); 
    }
}
restart.addEventListener("click", restartGame);

for (let i = 0; i < cards.length; i++) { 
    cards[i].addEventListener("click", function () { 
        if (!this.classList.contains("toggled")) {
            this.classList.add("toggled"); 
            toggledCardsArray.push(this); 

            if (toggledCardsArray.length === 2) {
                let firstCard = toggledCardsArray[0];
                let secondCard = toggledCardsArray[1];
                let firstImgSrc = firstCard.querySelector(".card-image").src; 
                let secondImgSrc = secondCard.querySelector(".card-image").src; 

                if (firstImgSrc !== secondImgSrc) { 
                    setTimeout(() => { 
                        firstCard.classList.remove("toggled"); 
                        secondCard.classList.remove("toggled"); 
                        toggledCardsArray = []; 
                    }, 1000); 
                } 
                else { 
                    toggledCardsArray = []; 
                    winCount++; 
                    if (winCount === 6) { 
                        setTimeout(() => { 
                            alert("Congratulations!!! You won the game!"); 
                        }, 1000); 
                    } 
                }
            }
        }
    });
}
