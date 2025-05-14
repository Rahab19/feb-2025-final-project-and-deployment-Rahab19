const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill"
];

const facts = [
  "Honey never spoils. Archaeologists have found 3,000-year-old jars of honey in Egyptian tombs that still taste good.",
  "Bananas are berries, but strawberries aren't.",
  "Octopuses have three hearts and blue blood."
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('quote').textContent = getRandomItem(quotes);
  document.getElementById('fact').textContent = getRandomItem(facts);
});

document.getElementById('contactForm')?.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    event.preventDefault();
  } else {
    alert("Message sent!");
  }
});
