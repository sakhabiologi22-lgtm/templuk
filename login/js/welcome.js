document.addEventListener("DOMContentLoaded", function () {

    const user = localStorage.getItem("username");

    const usernameDisplay = document.getElementById("usernameDisplay");
    const authArea = document.getElementById("authArea");

    // kalau user sudah login
    if (user) {

        // tampilkan username
        if (usernameDisplay) {
            usernameDisplay.innerText = "Halo, " + user;
        }

        // ubah tombol login jadi logout
        if (authArea) {

            authArea.innerHTML = `
                <a href="#" id="logoutBtn" class="btn-login">
                    Logout
                </a>
            `;

            // fungsi logout
            document.getElementById("logoutBtn")
                .addEventListener("click", function (e) {

                    e.preventDefault();

                    localStorage.removeItem("username");

                    window.location.reload();
                });
        }
    }

});
