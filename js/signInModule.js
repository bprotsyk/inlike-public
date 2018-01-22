InLike.signIn = function(login, password) {
  var sendLogin = function(login) {
    var usernameField = $("[name=username]");
    usernameField.focus();
    for (var i = 0; i < usernameField[0].defaultValue.length; i++) {
      usernameField.trigger({ type: "keydown", key: "Backspace" });
    }
    usernameField.sendkeys(login);
    usernameField.sendkeys("\n");
  };

  // TODO nullity checks for FUCKING EVERYTHING

  // TODO press Sign in if on sign up module, wait for fields to appear

  // think about waiting system

  var sendPassword = function(password) {
    var passwordField = $("[name=password]"); // null
    passwordField.focus();
    for (var i = 0; i < passwordField[0].defaultValue.length; i++) {
      passwordField.trigger({ type: "keydown", key: "Backspace" });
    }
    
    // if sendkeys is a function
    passwordField.sendkeys(password);
    passwordField.sendkeys("\n");
  };

  var checkIfOnSignUp = function() { 
    if ($(".coreSpriteFacebookIconInverted") != null) {
      $("._g9ean")[0].children[0].click(); // null
    }
  };

  var signIn = function() {
    var firstParentClass = $("[name=password]")[0].parentNode.className.replace(
      /\W/g,
      "."
    );
    var secondParentClass = $(
      "." + firstParentClass
    )[0].parentNode.className.replace(/\W/g, ".");

    //REFACTOR!!!!

    var passwordContainer = $("." + secondParentClass)[1];
    var signInContainerClass;
    if (passwordContainer.nextSibling != null) {
      signInContainerClass = nextSibling.className.replace(/\W/g, ".");
    } else {
      signInContainerClass = passwordContainer.parentNode.nextSibling.className.replace(
        /\W/g,
        "."
      );
    }

    var signInButton = $("." + signInContainerClass)[0].children[0];
    signInButton.click();
  };

  checkIfOnSignUp();
  setTimeout(function() {
    sendLogin(login);
    setTimeout(function() {
      sendPassword(password);
      setTimeout(function() {
        signIn();
      }, 100);
    }, 100);
  }, 100);
};
