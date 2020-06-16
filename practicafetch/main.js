const userImage = document.getElementById("data-userimage")
const userName = document.getElementById("js-name");
const userLocation = document.getElementById("js-location");
const userRepo = document.getElementById("js-publicrepo")
const userFollowers = document.getElementById("js-followers");
const searchButton = document.getElementById("js-search");
let usernameInput = document.getElementById("js-input")


searchButton.addEventListener("click",apiRequest);



async function apiRequest() {
    const userRequest= await fetch(`https://api.github.com/users/${usernameInput.value}`);
    //console.log(userRequest);
    const responseRequest = await userRequest.json();
    //console.log(responseRequest);


    userName.innerHTML= responseRequest.name;
    userImage.src = responseRequest.avatar_url;
    userLocation.innerHTML= responseRequest.location;
    userRepo.innerHTML = responseRequest.public_repos;
    userFollowers.innerHTML = responseRequest.followers;

    usernameInput.value="";
}

