var symbol = "";

function refreshInformation() {
    if (!symbol) {
        throw "No symbol set!";
    }

    var fullUrl =
        "http://quote.yahoo.com/d/quotes.csv?f=sl1d1t1c1ohgv&e=.csv&s=" + symbol;

    function infoReceived()
    {
        var output = httpRequest.responseText;
        if (output) {
            postMessage(output.trim());
        }
        httpRequest = null;
    }

    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", fullUrl, true);
    httpRequest.onload = infoReceived;
    httpRequest.send(null);
}

setInterval(function() {
    refreshInformation();
}, 10*60*1000);

onmessage = function(event) {
    if (event.data) {
        symbol = event.data.toUpperCase();
    }
    refreshInformation();
}