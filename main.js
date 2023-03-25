// document.getElementById('navPanel').innerHTML="<ul><li>How It Works</li><li>For Office</li><li>Login</li><li>Icon badge</li></ul>"

const clearIcon = document.querySelector(".clear-icon");
  const searchBar = document.querySelector(".search");

  searchBar.addEventListener("keyup", () => {
    if(searchBar.value && clearIcon.style.visibility != "visible"){
      clearIcon.style.visibility = "visible";
    } else if(!searchBar.value) {
      clearIcon.style.visibility = "hidden";
    }
  });

  clearIcon.addEventListener("click", () => {
    searchBar.value = "";
    clearIcon.style.visibility = "hidden";
  });

  function login(){
    var question = prompt("What is your name ?");
    var reponse = "Francis";
    var statut;
    var nouveau = "yes";

// check if the name is in the database reponse
  
  if(question === reponse){
        parBis();
    }else{
        statut = prompt("Are you new here ?");
    }

// what i write if the name is recognized

    function parBis(){
        document.getElementsByClassName("button_par")[0].innerHTML = "Hey " + question + ", welcome back !";
    }  

// what i write if the name is new or there is an error
    
    if (question != reponse && statut === nouveau){
        document.getElementsByClassName("button_par")[0].innerHTML = "Welcome " + question + ", please create an account.";
    }else if(question === reponse){
        parBis(); 
    }else{
        document.getElementsByClassName("button_par")[0].innerHTML = "<span>There must be an error. Try to put your name again</span>";
    } 

}

// logout 

function logout(){

    // window.location.reload(); only works with your environnement or website
  document.getElementsByClassName("button_par")[0].innerHTML = "";
};


let vendor = ["Chilliz", "Chicken Republic", "Vegas", "Native"];
let favFood = ["Fries", "Rice", "Swallow"];

function isVendor(name) {
    for (let i = 0; i < vendor.length; i++) {
        if (name === vendor.length[i])
            return name
    };
};

console.log(isVendor("Chilliz"));