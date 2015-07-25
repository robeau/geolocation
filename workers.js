/**
 * Created by natalie on 7/22/2015.
 */
self.addEventListener('message', function (event) {
    var str = event.data;

    self.postMessage(str.toUpperCase());
});