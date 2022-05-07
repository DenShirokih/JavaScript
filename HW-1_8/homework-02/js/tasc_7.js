const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const login= prompt("Введите новый логин")


const isLoginValid = function(login){
    return login.length>=4 && login.length<=16;
};

const isLoginUnique = function(allLogins, login) {
    return !allLogins.includes(login);
};

function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return "Ошибка! Логин должен быть от 4 до 16 символов";
    }else if (!isLoginUnique(allLogins, login)){
        return "Такой логин уже используется!"
    }else{
        logins.push(login)
        return"Логин успешно добавлен!"
    }
}
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, login)); // 'Логин успешно добавлен!'
