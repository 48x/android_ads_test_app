function isAlertEnabled() {
    return document.getElementById("alert-enabled").checked;
}

function isAdsEnabled() {
    result = OKApp.isAdsEnabled();
    document.getElementById("chatlog").textContent += getCurrentTime() + " [isAdsEnalbed] " + "[" + result + "]\n";
    if (isAlertEnabled()) {
        alert("[isAdsEnalbed] " + "[" + result + "]");
    }
}

function requestAds() {
    result = OKApp.requestAds("callbackForAds");
    document.getElementById("chatlog").textContent += getCurrentTime() + " [requestAds] " + "[" + result + "]\n";
    if (isAlertEnabled()) {
        alert("[requestAds] " + "[" + result + "]");
    }
}

function fapiIsAdsEnabled() {
    result = FAPI.UI.isNativeAdSupported();
    document.getElementById("chatlog").textContent += getCurrentTime() + " [fapiIsAdsEnalbed] " + "[" + result + "]\n";
    if (isAlertEnabled()) {
        alert("[fapIsAdsEnalbed] " + "[" + result + "]");
    }
}

function fapiRequestAds() {
    result = FAPI.UI.requestNativeAd();
    document.getElementById("chatlog").textContent += getCurrentTime() + " [fapiRequestAds] " + "[" + result + "]\n";
    if (isAlertEnabled()) {
        alert("[fapiRequestAds] " + "[" + result + "]");
    }
}

function requestManualAds() {
    result = FAPI.UI.requestManualAd();
    document.getElementById("chatlog").textContent += getCurrentTime() + " [requestManualAds] " + "[" + result + "]\n";
    if (isAlertEnabled()) {
        alert("[requestManualAds] " + "[" + result + "]");
    }
}

function showLoadedAd() {
    result = FAPI.UI.showLoadedAd();
    document.getElementById("chatlog").textContent += getCurrentTime() + " [showLoadedAd] " + "[" + result + "]\n";
    if (isAlertEnabled()) {
        alert("[showLoadedAd] " + "[" + result + "]");
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

function customBackHandler() {
    window.alert("customBackHandler invoked successfully");
}