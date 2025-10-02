const dogMatchesImageContainerDiv = document.getElementById("dog-matches");

// function getMatches() {   her er den lavet i frontend
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result.message)
//     const dog = {
//         imageURL: result.message
//     }
//     createMatchesProfile(dog);
//   });
// }

// getMatches();

  function createMatchesProfile(dog) {

    const dogMatchesImageImg = document.createElement("img");
    dogMatchesImageImg.src = dog.imageURL;
    dogMatchesImageImg.alt = "dog matches profile picture";
    dogMatchesImageImg.id = "dog-matches-image";

    dogMatchesImageContainerDiv.innerHTML = ""; //fjerner indhold

    dogMatchesImageContainerDiv.appendChild(dogMatchesImageImg)

  }