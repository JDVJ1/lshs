// Student data - could be fetched from a server
const student = {
    name: "CHAX",
    section: "STEM-12A",
    year: "Grade 12"
};

// Initialize student data when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeStudentData();
});

// Set student information in the DOM
function initializeStudentData() {
    document.getElementById('studentName').textContent = student.name;
    document.getElementById('studentSection').textContent = student.section;
    document.getElementById('studentYear').textContent = student.year;
}

// Navigation function
function navigateTo(destination) {
    // You can replace these with your actual URLs
    const routes = {
        'lesson-library': '/lib/library.html',
        'quiz': '/quiz/quiz.html',
        'lesson-discussion': '/profile/thread/thread.html'
    };

    // Add animation class for feedback
    const button = event.currentTarget;
    button.style.transform = 'scale(0.95)';
    
    // Reset animation after short delay
    setTimeout(() => {
        button.style.transform = '';
    }, 100);

    // Navigate to the destination
    if (routes[destination]) {
        window.location.href = routes[destination];
    }
}

// Optional: Add loading state
function showLoading(button) {
    const originalContent = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    return originalContent;
}