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
    },

    getEvent: function (event) {
        return event ? event : window.event;
    },

    getTarget: function (event) {
        return event.target || event.srcElement;
    }

    preventDefault: function (event) {
        if(event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    stopPropagation: function (event) {
        if(event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
    //Example
    // node.onclick = function (event) {
    //     event = EventUtil.getEvent(event);
    //     var target = EventUtil.getTarget(event);
    // };
};



//get the window size
var getClientSize = function(){
    if(document.compatMode == "BackCompact"){
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    }
};
