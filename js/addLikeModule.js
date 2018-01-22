InLike.addLike = function (postId) {
    var coreSpriteHeartOpen = $(".coreSpriteHeartOpen");
    if (coreSpriteHeartOpen.length == 0) {
        var coreSpriteHeartFull = $(".coreSpriteHeartFull");
    } else {
        coreSpriteHeartOpen.click();
        coreSpriteHeartFull = $(".coreSpriteHeartFull");
        // if (coreSpriteHeartFull == 0) {
        //   InLikeHandler.onLikeError("can't like");
        // } else {
        //   InLikeHandler.onLikeSucceed();
        // }
    }
}
