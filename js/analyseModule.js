InLike.isBodyLoaded = function() {
  return typeof document.getElementsByTagName("body")[0] != "undefined";
};

//in future implement timer (to track if page didn't load)
InLike.analyse = function() {
  var isNotLoggedIn = function() {
    return $("html.not-logged-in")[0] != null; 
  };

  if (!InLike.isBodyLoaded()) {
    setTimeout(function() {
      InLike.analyse();
    }, 300); // waiting 300 ms for body to load
  } else {
    if (isNotLoggedIn()) {
      console.log("Not logged in!");
    } else {
      console.log("Logged in");
    }

    // if (document.getElementById("mainFeed") != null) {
    //   InLikeHandler.onPageLoaded("main");
    // } else if (document.getElementsByName("emailOrPhone").length > 0) {
    //   InLikeHandler.onPageLoaded("sign_up");
    // } else {
    //   InLikeHandler.onPageLoaded("log_in");
    // }
  }
};

if (!InLike.isBodyLoaded()) {
  window.onload = function() {
    InLike.analyse();
  };
} else InLike.analyse();
