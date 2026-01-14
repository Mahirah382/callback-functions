function notifyUser () {
    console.log(`notifyUser function was called!`);
}

function myAwesomeFunction(notifyUserCallback) {
    console.log(`Running myAwesomeFunction...doing complex tasks...`);
    console.log(`complex tasks complete. I will notify the user`);
    notifyUserCallback();
}

myAwesomeFunction(notifyUser);