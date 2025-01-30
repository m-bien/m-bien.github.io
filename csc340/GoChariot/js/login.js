function login() {
    localStorage.setItem("loggedIn", true);
    let email = $("#email")[0].value.toLowerCase();
    console.log(email);
    if (email.includes("admin")) {
        localStorage.setItem("admin", true);
        window.location.href = 'admin_dashboard.html';
    } else if (email.includes("driver")) {
        window.location.href = 'driver_dashboard.html';
    } else {
        window.location.href = 'student_dashboard.html';
    }
}

function signup() {
    window.location.href = 'student_dashboard.html';
}



function checkLocalStorage() {
    // if loggedIn true, update the client side
    const loggedOutItems = document.querySelectorAll('.logged-out');
    const loggedInItems = document.querySelectorAll('.logged-in');
    const adminLoggedInItems = document.querySelectorAll('.admin-logged-in');
    console.log(localStorage.getItem("loggedIn"))
    if (localStorage.getItem("loggedIn")) {
        console.log('DETECTED TO E LOGGED IN')
        loggedOutItems.forEach(item => item.classList.add('d-none'));
        loggedInItems.forEach(item => item.classList.remove('d-none'));
        if (localStorage.getItem("admin")) {
            adminLoggedInItems.forEach(item => item.classList.remove('d-none'));
        }
    } else {
        console.log('logged otu');
        loggedOutItems.forEach(item => item.classList.remove('d-none'));
        loggedInItems.forEach(item => item.classList.add('d-none'));
        adminLoggedInItems.forEach(item => item.classList.add('d-none'));
    }
}


// absoltuely terribnle way of handling this
// but i can't think of any other way without a proper server renderinG
// prototype moment?
const observer = new MutationObserver((mutations, mutationInstance) => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        checkLocalStorage();
        $("#logout").on('click', () => {
            localStorage.removeItem("loggedIn");
            localStorage.removeITem("admin");
            window.location.href = 'index.html'
            console.log('test');
        });
        mutationInstance.disconnect();
    }
});


observer.observe(document, {
    childList: true,
    subtree:   true
});

checkLocalStorage();