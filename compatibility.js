//Compatible coding of original javascript

//event handler
EventUtil = {
    addHandler: function (obj, event, handler) {
        if (obj.addEventListener) {
            obj.addEventListener(event, handler, false);
        } else if (obj.attachEvent) {//IE
            obj.attachEvent('on' + event, handler);
        } else {
            obj['on' + event] = handler;
        }
    },
    removeHandler: function (obj, event, handler) {
        if (obj.removeEventListener) {
            obj.removeEventListener(event, handler, false);
        } else if (obj.detachEvent) {//IE
            obj.detachEvent('on' + event, handler);
        } else {
            obj['on' + event] = null;
        }
    }
};
