function isAlertEnabled() {
    return document.getElementById("alert-enabled").checked;
}

function isAdsEnabled() {
    result = OKApp.isAdsEnabled();
    document.getElementById("chatlog").textContent += getCurrentTime() + " [isAdsEnalbed] " + "[" + result + "]\n";
    if (isAlertEnabled()) {
        alert("[isAdsEnalbed] " + "[" + result + "]")
    }
}

function requestAds() {
    result = OKApp.requestAds(document.getElementById("request-ads-callback").value.trim());
    document.getElementById("chatlog").textContent += getCurrentTime() + " [requestAds] " + "[" + result + "]\n";
    if (isAlertEnabled()) {
        alert("[requestAds] " + "[" + result + "]")
    }
}

function callbackForAds(adState) {
    document.getElementById("chatlog").textContent += getCurrentTime() + " [adState] " + "[" + adState + "]\n";
    if (isAlertEnabled()) {
        alert("[adState] " + "[" + adState + "]");
    }
}

function evalScript() {
    eval(document.getElementById("eval-script").value.trim());
}

function getCurrentTime() {
    var now = new Date();
    return ("[" + new Date().toLocaleString() + "]");
}