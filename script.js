document.getElementById('signInBtn').addEventListener('click', function() {
    document.getElementById('loginPage').classList.remove('hidden');
});

document.querySelector('#loginPage .login-container .login-form a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginPage').classList.add('hidden');
});
