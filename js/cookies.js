function setCookies(e) {
    document.cookie = "visitSite=" + e + "; path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let status = getCookie("visitSite");
    let visitedTimes = getCookie("visitedTimes");
    times = 1;
    setTimes = document.cookie = "visitedTimes=" + times + "; path=/";
    if (status != "") {
        let currentUrl = location.href;
        console.log(currentUrl.search("mywords.html"));

        if (currentUrl.search("mywords.html") != -1) {
            document.cookie = "visitedTimes=" + 2 + "; path=/"
            if (visitedTimes == 2) {
                window.location.href = "index.html";
            }

        }

    } else {
        status = "mywords"
        if (status != "" && status != null) {
            if (times != 2) {
                setCookies(status);
                setTimes;
            }
            window.location.href = "mywords.html";
        }
    }
}

//window.location.href = "index.html";
checkCookie();
