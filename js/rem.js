(function (doc, win) {
    var docEl,
        clientWidth;
    docEl = doc.documentElement;
    resizeEvt = "orientationchange" in window
        ? "orientationchange"
        : "resize";
    recalc = function () {
        clientWidth = docEl.clientWidth;   
        if (!clientWidth)
            return;
        docEl.style.fontSize = 20 * (clientWidth / 375) + "px";
    };
    if (!doc.addEventListener)
        return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
