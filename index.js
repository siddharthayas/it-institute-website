// ============ Preloader ==================

window.addEventListener("load", function () {
	// Hide the preloader when the page finishes loading
	var preloader = document.querySelector(".preloader");
	preloader.style.opacity = "0";
	setTimeout(function () {
		preloader.style.display = "none";
	}, 500); // Adjust the delay (in milliseconds) as needed
});

//=================== Nabvar ====================

const nav_icon = document.querySelector(".navbar-btn");
const forToggle = document.querySelector(".main-menu");
const forBlur = document.querySelector(".toggle-blur");
const messageSection = document.querySelector("#message");
const heroSection = document.querySelector("#hero-section");

const toggleNavbar = () => {
	forToggle.classList.toggle("active");
};
function toggleBlur() {
	forBlur.classList.toggle("blur");
}

nav_icon.addEventListener("click", () => toggleNavbar());
nav_icon.addEventListener("click", () => toggleBlur());

window.addEventListener("scroll", function () {
	var header = document.querySelector(".s-header");
	var scrollPosition = window.scrollY;

	if (scrollPosition > 0) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
});

//=================== Counter Section ====================

const counterSec = document.querySelector("#counter-num");
const counterObserver = new IntersectionObserver(
	(entries, observer) => {
		const [entry] = entries;
		console.log(entry);
		if (entry.isIntersecting == false) return;

		// Number Animator

		const counterNum = document.querySelectorAll(".counter-number");
		const speed = 100;

		counterNum.forEach((curElem, index) => {
			const updateNumber = () => {
				const targetNumber = parseInt(curElem.dataset.number);
				const initialNum = parseInt(curElem.innerText);

				const incrementNumber = targetNumber / speed;

				if (initialNum < targetNumber) {
					curElem.innerText = `${initialNum + incrementNumber}+`;
					setTimeout(updateNumber, 30);
				}
			};

			updateNumber();
		});
		observer.unobserve(counterSec);
	},
	{
		root: null,
		threshold: 0,
	}
);
counterObserver.observe(counterSec);

// ======================= Slider ======================

const slides = document.querySelectorAll(".slider");
var counter = 0;

slides.forEach((slide, index) => {
	slide.style.left = `${index * 100}%`;
});

const slideright = () => {
	if (counter < slides.length - 1) {
		counter++;
		slideImage();
	}
};

const slideleft = () => {
	if (counter > 0) {
		counter--;
		slideImage();
	}
};

const slideImage = () => {
	slides.forEach((slide) => {
		slide.style.transform = `translateX(-${counter * 100}%)`;
	});
};

// ====================== search Filter ===========================
function filterCourses() {
	const searchInput = document.getElementById("searchInput");
	const filterValue = searchInput.value.toLowerCase();
	const courses = document.querySelectorAll(".course");

	courses.forEach((course) => {
		const courseName = course.querySelector("h5").textContent.toLowerCase();
		const courseDescription = course
			.querySelector("p")
			.textContent.toLowerCase();

		// Check if the filter value matches the course name or description
		if (
			courseName.includes(filterValue) ||
			courseDescription.includes(filterValue)
		) {
			course.style.display = "block"; // Show the course
		} else {
			course.style.display = "none"; // Hide the course
		}
	});
}
