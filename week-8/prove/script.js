// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();

// DOM elements
const nameEl = document.querySelector("#characterName");
const classEl = document.querySelector("#characterClass");
const levelEl = document.querySelector("#characterLevel");
const healthEl = document.querySelector("#characterHealth");
const statusEl = document.querySelector("#statusMessage");
const deadBanner = document.querySelector("#deadBanner");

const attackBtn = document.querySelector("#attackBtn");
const levelUpBtn = document.querySelector("#levelUpBtn");
const resetBtn = document.querySelector("#resetBtn");

// Character object with properties + methods
const character = {
    name: "Emberfang Sentinel",
    class: "Fire Guardian",
    level: 1,
    health: 100,
    image: "images/ender.jpg",

    attacked() {
        if (this.health <= 0) return;

        this.health -= 20;
        if (this.health < 0) this.health = 0;

        if (this.health === 0) {
            setStatus(`${this.name} has died.`);
            setButtonsDisabled(true);
        } else {
            setStatus(`${this.name} was attacked! (-20 health)`);
        }

        render();
        deadBanner.style.display = character.health === 0 ? "block" : "none";
    },

    levelUp() {

        if (this.health <= 0) {
            statusEl.textContent = "Cannot level up. Character is dead."
            return
        }

        this.level += 1

        // every 5 levels restore health
        if (this.level % 5 === 0) {
            this.health = 100
            statusEl.textContent = `${this.name} reached level ${this.level}! Health restored to 100!`
        }
        else {
            statusEl.textContent = `${this.name} leveled up!`
        }

        render()

    }
};

function render() {
    nameEl.textContent = character.name;
    classEl.textContent = character.class;
    levelEl.textContent = character.level;
    healthEl.textContent = character.health;
}

function setStatus(message) {
    statusEl.textContent = message;
}

function setButtonsDisabled(isDisabled) {
    attackBtn.disabled = isDisabled;
    levelUpBtn.disabled = isDisabled;
}

function resetCharacter() {
    character.level = 1;
    character.health = 100;
    setButtonsDisabled(false);
    setStatus("Character reset.");
    render();
}

// Wire up events
attackBtn.addEventListener("click", () => character.attacked());
levelUpBtn.addEventListener("click", () => character.levelUp());
resetBtn.addEventListener("click", resetCharacter);

// Initial render
render();