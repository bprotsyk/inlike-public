InLike.processEvent = function(jsonEvent) {
    var event = JSON.parse(jsonEvent);

    InLike.currentEvent = event;
    switch (event.type){
        case InLike.TYPE_ADD_LIKE:
            console.error("add like :)");
            break;
        case InLike.TYPE_LOG_IN:
            InLike.signIn(event.login, event.password)
            break;
        default: // throw an exception
    }
}

InLike.onEventSuccess  = function(event) {//?
    InLikeHandler.onEventSuccess(event.type, JSON.stringify(event));
}

InLike.onEventFailure = function(event, reason) {
    InLikeHandler.onEventFailure(event.type, JSON.stringify(event), reason);
}