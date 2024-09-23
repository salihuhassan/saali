const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
});



// JavaScript to toggle the live event indicator
function toggleLive() {
    const liveIndicator = document.getElementById('live-indicator');
    if (liveIndicator.style.visibility === 'visible') {
      liveIndicator.style.visibility = 'hidden';
    } else {
      liveIndicator.style.visibility = 'visible';
    }
  }
  


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);




const categoriesGrid = document.getElementById('categoriesGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Scroll to previous category on mobile view
prevBtn.addEventListener('click', () => {
    categoriesGrid.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

// Scroll to next category on mobile view
nextBtn.addEventListener('click', () => {
    categoriesGrid.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});









const featuredPostGrid = document.getElementById('featuredPostGrid');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// Scroll to previous post on mobile view
prevBtn.addEventListener('click', () => {
    featuredPostGrid.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

// Scroll to next post on mobile view
nextBtn.addEventListener('click', () => {
    featuredPostGrid.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});










// Form Validation and Submission Feedback
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const emailInput = document.getElementById('email');
    const feedbackMessage = document.getElementById('feedback-message');

    if (validateEmail(emailInput.value)) {
        feedbackMessage.style.color = 'green';
        feedbackMessage.textContent = 'Thank you for subscribing!';
        emailInput.value = ''; // Clear the input field after successful submission
    } else {
        feedbackMessage.style.color = 'red';
        feedbackMessage.textContent = 'Please enter a valid email address.';
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Interactive Hover Animation for Social Icons
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseover', function() {
        const platform = this.getAttribute('data-platform');
        console.log(`You hovered over ${platform} icon!`); // Log hover activity
    });
});










// Function to upload and preview video with details
function uploadVideo() {
    const videoInput = document.getElementById('video-upload');
    const dateInput = document.getElementById('upload-date').value;
    const timeInput = document.getElementById('upload-time').value;
    const typeInput = document.getElementById('video-type').value;
    const videoElement = document.getElementById('uploaded-video');
    const videoDetails = document.getElementById('video-details');
  
    // Check if a video file is selected
    if (videoInput.files && videoInput.files[0]) {
      const file = videoInput.files[0];
      const videoURL = URL.createObjectURL(file);
      videoElement.src = videoURL;
      videoElement.style.display = 'block'; // Show the video element
  
      // Display video details
      videoDetails.innerHTML = `
        <strong>Date:</strong> ${dateInput}<br>
        <strong>Time:</strong> ${timeInput}<br>
        <strong>Type:</strong> ${typeInput}<br>
        <strong>File Name:</strong> ${file.name}<br>
        <strong>File Size:</strong> ${(file.size / (1024 * 1024)).toFixed(2)} MB
      `;
    } else {
      alert("Please select a video to upload.");
    }
  }
  