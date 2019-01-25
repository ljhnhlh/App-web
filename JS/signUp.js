function login() {
    document.getElementById('act').action = '/login';
    alert(document.getElementById('act').action);
    return true;
}

function register() {
    document.getElementById('act').action = '/register';
    alert(document.getElementById('act').action);
    return true;
}