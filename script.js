const username = document.getElementById("userName");
const getdetails = document.getElementById("getDetails");
const profileDetails = document.getElementById("info");

//Using async fn to fetch details
getdetails.addEventListener("click", async () => {
  const uname = username.value;

  //Using Github API to fetch details
  const result = await fetch(`https://api.github.com/users/${uname}`);
  const data = await result.json();

  getProfileDetails(data);
});

//function to get profile details
function getProfileDetails(data) {
  profileDetails.innerHTML = `<div class = "card">
       <div class="card-img">
           <img src="${data.avatar_url}" alt="${data.name}">
       </div>
       <div class="card-body">
           <span class="card-title">${data.name}</span>
           <div class="card-subheading">${data.login}</div>
           <div class="card-text">
               <p>${data.bio}</p>
               <p><i class="fa-solid fa-circle-user"></i>${data.followers} Followers ${data.following} Following</p> 
               <p><i class="fa-solid fa-location-dot"></i>Location: ${data.location}</p> 
               <button>
                   <a href=${data.html_url} target="_blank">Click to visit my profile</a>
           </div>
       </div>
       </div>
       `;
}
