
let bar = document.getElementById("bar");

bar.addEventListener('click', () => {
    popDiv.classList.toggle('show');
})



// Optional: Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!bar.contains(event.target) && !popDiv.contains(event.target)) {
      popDiv.classList.remove('show');
    }
  });



