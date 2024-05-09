let skillSet = document.querySelectorAll('.skill').length;
let blevel = document.querySelector('.blevel');
let bhp = document.querySelector('.bhp');

let bossLevel = 1;
let bossHealth = 100;

blevel.innerHTML = "Boss Level: " + bossLevel;
bhp.innerHTML = bossHealth;

let skillClickable = true;

for(let i = 0; i < skillSet; i++) {
    document.querySelectorAll('.skill')[i].addEventListener("click", function () {
        let skillData = this.getAttribute('data');
        getDamage(skillData);
        animation(skillData);
        console.log(bossHealth);
    });
}

function getDamage(key) {

    switch(key) {
        case "skill-1":
            bossHealth = bossHealth - 3;
            bhp.innerHTML = bossHealth;
            checkHealth();
            // console.log(document.querySelectorAll('.skill')[0].innerHTML);
            break;
        case "skill-2":
            bossHealth = bossHealth - 5;
            bhp.innerHTML = bossHealth;
            checkHealth();
            // console.log(document.querySelectorAll('.skill')[1].innerHTML);
            break;
        case "skill-3":
            bossHealth = bossHealth - 10;
            bhp.innerHTML = bossHealth;
            checkHealth();
            // console.log(document.querySelectorAll('.skill')[2].innerHTML);
            break;
        case "skill-4":
            bossHealth = bossHealth - 15;
            bhp.innerHTML = bossHealth;
            checkHealth();
            // console.log(document.querySelectorAll('.skill')[3].innerHTML);
            break;
        default:
            console.log(key);
            break;  
    }
}


function checkHealth() {
    if(bossHealth <= 0) {
        alert("BOSS IS DEFEATED MOVING TO THE NEXT LEVEL");
        bossHealth = 100;
        bhp.innerHTML = bossHealth;
        bossLevel++;
        blevel.innerHTML = "Boss Level: " + bossLevel;
    }

}

function cheat() {
    alert("BOSS IS DEFEATED MOVING TO THE NEXT LEVEL");
    bossHealth = 100;
    bhp.innerHTML = bossHealth;
    bossLevel++;
    blevel.innerHTML = "Boss Level: " + bossLevel;
    console.log(bossHealth);
    console.log(bossLevel);
}

function alertAndWait(seconds, callback) {
    alert("Please wait for 5 seconds before clicking again.");
    setTimeout(callback, seconds * 1000);
}

function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("hover");
    setTimeout(function() {
        activeButton.classList.remove("hover");
    }, 100);
}


