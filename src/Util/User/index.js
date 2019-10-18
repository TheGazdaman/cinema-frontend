export default class User { }

User.getUserId = function() {
    const user_id = window.localStorage.getItem('user_id');

    return user_id;
}

User.pretendLogin = function(id) {
    window.localStorage.setItem('user_id', id);
}

User.pretendLogout = function() {
    window.localStorage.removeItem('user_id');
}