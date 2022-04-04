const checkForSpam = function(message) {
    let check;
    check=message.includes('spam') || message.includes('sale');
    return check
    };
    console.log(checkForSpam("Get best sale offers now!"));