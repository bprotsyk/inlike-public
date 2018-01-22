InLike.isBodyLoaded = function() {
  return typeof document.getElementsByTagName("body")[0] != "undefined";
};

//in future implement timer (to track if page didn't load)
InLike.analyse = function() {
  var isNotLoggedIn = function() {
    return $("html.not-logged-in")[0] != null;
  };

  var isLoggedIn = function() {
    return $("html.logged-in")[0] != null;
  };

  var isHostCorrect = function() {
    return window.location.href.match(".*instagram.com/") != null;
  };

  if (!InLike.isBodyLoaded()) {
    setTimeout(function() {
      InLike.analyse();
    }, 300); // waiting 300 ms for body to load
  } else {
    if (!isHostCorrect()) {
      console.log(InLike.STATUS_WRONG_HOST);
      return;
    }

    if (isNotLoggedIn()) {
      console.log(InLike.STATUS_NOT_LOGGED_IN);
      return;
    }

    if (isLoggedIn()) {
      console.log(InLike.STATUS_LOGGED_IN);
      return;
    }

    console.log(InLike.STATUS_UNKNOWN);
  }
};
