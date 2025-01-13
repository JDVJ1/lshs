document.addEventListener("DOMContentLoaded", () => {
    // Lesson Data
    const lessons = [
        { id: 1, title: "Inquaries, Investigations, and Immersion", description: "1", category: "Specialized" , link: "lesson1.html"},
        { id: 2, title: "General Chemistry 2", description: "1", category: "Specialized", link: "lesson2.html" },
        { id: 3, title: "Contemporary Philippine Arts fron the Region", description: "A1", category: "Core", link: "lesson3.html" },
        { id: 4, title: "Empowerment Technologies", description: "1.", category: "Contextualized", link: "lesson4.html" },
        { id: 5, title: "General Physics 2", description: "Calculate the electric field due to a system of point charges using Coulomb’s law and the superposition principle", category: "Specialized", link: "physles1.html"},
        { id: 6, title: "Physical Education and Health", description: "1", category: "Core", link: "lesson5.html" }
    ];


    const lessonContainer = document.getElementById("lesson-container");
    const categoryFilter = document.getElementById("category-filter");
    const lessonModal = document.getElementById("lesson-modal");
    const closeModal = document.getElementById("close-modal");
    const modalTitle = document.getElementById("lesson-title");
    const modalDescription = document.getElementById("lesson-description");

    // Render Lessons
    function renderLessons(filter = "all") {
        lessonContainer.innerHTML = ""; // Clear container
        const filteredLessons = filter === "all" ? lessons : lessons.filter(lesson => lesson.category === filter);

        filteredLessons.forEach(lesson => {
            const lessonCard = document.createElement("div");
            lessonCard.className = "lesson-card";
            lessonCard.innerHTML = `
                <p>${lesson.title}</p>
                <a href="${lesson.link}" target="_blank" class="lesson-title">${lesson.description}</a>
                <button onclick="viewLesson(${lesson.id})">View Details</button>
            `;
            lessonContainer.appendChild(lessonCard);
        });
    }

    // Open Lesson Modal
    window.viewLesson = (id) => {
        const lesson = lessons.find(lesson => lesson.id === id);
        modalTitle.textContent = lesson.title;
        modalDescription.textContent = lesson.description;
        lessonModal.style.display = "block";
    };

    // Close Modal
    closeModal.addEventListener("click", () => {
        lessonModal.style.display = "none";
    });

    // Category Filter Event
    categoryFilter.addEventListener("change", (e) => {
        renderLessons(e.target.value);
    });

    // Initialize Page
    renderLessons();
});