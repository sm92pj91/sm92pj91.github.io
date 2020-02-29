function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/confirm/confirmRegistration.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/confirm/confirmRegistration.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicAuthConfirmConfirmRegistrationHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\n    <div class=\"form-group\">\n        <h2>Confirm Registration</h2>\n    </div>\n    <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\n        {{ errorMessage }}\n    </div>\n    <div class=\"form-group\" *ngIf=\"email===null\">\n        <label class=\"control-label\" for=\"confirmationCode\">Email</label>\n        <input id=\"email\" type=\"email\" maxlength=\"50\" class=\"form-control\"\n               [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"confirmationCode\">Confirmation Code</label>\n        <input id=\"confirmationCode\" type=\"text\" maxlength=\"50\" class=\"form-control\"\n               [(ngModel)]=\"confirmationCode\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <button (click)=\"onConfirmRegistration()\" id=\"confirmRegistration\" type=\"submit\"\n                class=\"btn btn-info btn-block\">Confirm\n        </button>\n    </div>\n    <hr>\n    <p>Can't find your code? <a [routerLink]=\"['/home/resendCode']\"> <i class=\"fa fa-fw fa-group\"></i> Resend\n        Code</a>\n        <a [routerLink]=\"['/home/register']\"> <i class=\"fa fa-fw fa-group\"></i> Register</a> <a\n                [routerLink]=\"['/home/login']\"> <i class=\"fa fa-fw fa-user\"></i> Login</a>\n    </p>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/forgot/forgotPassword.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/forgot/forgotPassword.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicAuthForgotForgotPasswordHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\n    <div class=\"form-group\">\n        <h2>Forgot Password</h2>\n    </div>\n    <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\n        {{ errorMessage }}\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"signupEmail\">Email</label>\n        <input id=\"signupEmail\" type=\"email\" maxlength=\"50\" class=\"form-control\" [(ngModel)]=\"email\"\n               [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <button (click)=\"onNext()\" id=\"nextPage\" type=\"submit\" class=\"btn btn-info btn-block\">Next\n        </button>\n    </div>\n\n    <hr>\n    <p><a [routerLink]=\"['/home/register']\"> <i class=\"fa fa-fw fa-group\"></i> Register</a> <a\n            [routerLink]=\"['/home/login']\"> <i class=\"fa fa-fw fa-user\"></i> Login</a>\n    </p>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/forgot/forgotPasswordStep2.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/forgot/forgotPasswordStep2.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicAuthForgotForgotPasswordStep2Html(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\n    <div class=\"form-group\">\n        <h2>Forgot Password</h2>\n    </div>\n    <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\n        {{ errorMessage }}\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"verificationCode\">Verification Code</label>\n        <input id=\"verificationCode\" type=\"verificationCode\" maxlength=\"50\" class=\"form-control\"\n               [(ngModel)]=\"verificationCode\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"newPassword\">New Password</label>\n        <input id=\"newPassword\" type=\"password\" maxlength=\"25\" class=\"form-control\"\n               length=\"40\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <button (click)=\"onNext()\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-info btn-block\">\n            Reset Password\n        </button>\n    </div>\n\n    <hr>\n    <p><a [routerLink]=\"['/home/resendCode']\"> <i class=\"fa fa-fw fa-group\"></i> Go back</a>\n    </p>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/login/login.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/login/login.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicAuthLoginLoginHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\n    <div class=\"form-group\">\n        <h2>Login</h2>\n    </div>\n    <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\n        {{ errorMessage }}\n    </div>\n    <div *ngIf=\"!mfaStep\">\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"signupEmail\">Email</label>\n            <input id=\"signupEmail\" required type=\"email\" maxlength=\"100\" class=\"form-control\" [(ngModel)]=\"email\"\n                   [ngModelOptions]=\"{standalone: true}\">\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"signupPassword\">Password</label>\n            <input id=\"signupPassword\" required type=\"password\" maxlength=\"25\" class=\"form-control\"\n                   length=\"40\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n            <button (click)=\"onLogin()\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-info btn-block\">\n                Login\n            </button>\n        </div>\n\n        <hr>\n        <p>\n            <a [routerLink]=\"['/home/register']\"> <i class=\"fa fa-fw fa-group\"></i> Register</a>\n            <a [routerLink]=\"['/home/forgotPassword']\"> <i class=\"fa fa-fw fa-group\"></i> Forgot Password?</a><br/>\n            <a [routerLink]=\"['/home/resendCode']\"> <i class=\"fa fa-fw fa-group\"></i> Resend Confirmation Code</a>\n        </p>\n\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"mfaStep\">\n        <awscognito-mfa [destination]=\"mfaData.destination\"\n                        [onSubmit]=\"mfaData.callback\"></awscognito-mfa>\n        <hr>\n        <a (click)=\"cancelMFA()\" href=\"\">Cancel</a>\n    </div>\n</form>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/mfa/mfa.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/mfa/mfa.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicAuthMfaMfaHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-group\">\n    <div>\n        Authentication code has been sent to: {{destination}}\n    </div>\n    <div class=\"form-group\">\n        <input id=\"mfaCode\" required type=\"text\" maxlength=\"10\" class=\"form-control\"\n               length=\"40\" #code>\n    </div>\n    <button (click)=\"onSubmit(code.value)\" type=\"submit\" class=\"btn btn-info btn-block\">\n        Submit code\n    </button>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/newpassword/newpassword.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/newpassword/newpassword.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicAuthNewpasswordNewpasswordHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\n    <div class=\"form-group\">\n        <h2>Set new password</h2>\n    </div>\n    <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\n        {{ errorMessage }}\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"signupEmail\">Username / Email</label>\n        <input id=\"signupEmail\" type=\"email\" maxlength=\"50\" class=\"form-control\"\n               [(ngModel)]=\"registrationUser.username\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"existingPassword\">Temporary Password</label>\n        <input id=\"existingPassword\" type=\"password\" maxlength=\"25\" class=\"form-control\"\n               placeholder=\"at least 8 characters\" length=\"40\" [(ngModel)]=\"registrationUser.existingPassword\"\n               [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"signupPassword\">New Password</label>\n        <input id=\"signupPassword\" type=\"password\" maxlength=\"25\" class=\"form-control\"\n               placeholder=\"at least 8 characters\" length=\"40\" [(ngModel)]=\"registrationUser.password\"\n               [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <button (click)=\"onRegister()\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-info btn-block\">\n            Set your password\n        </button>\n    </div>\n    <hr>\n    <p>Already have an account? <a [routerLink]=\"['/home/login']\"> <i class=\"fa fa-fw fa-lock\"></i>Login</a></p>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/register/registration.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/register/registration.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicAuthRegisterRegistrationHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\n    <div class=\"form-group\">\n        <h2>Create account</h2>\n    </div>\n    <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\n        {{ errorMessage }}\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"signupEmail\">Email</label>\n        <input id=\"signupEmail\" type=\"email\" maxlength=\"50\" class=\"form-control\"\n               [(ngModel)]=\"registrationUser.email\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"signupFirstname\">First Name</label>\n        <input id=\"signupFirstname\" type=\"text\" maxlength=\"50\" class=\"form-control\"\n               [(ngModel)]=\"registrationUser.given_name\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"signupSurname\">Surname</label>\n        <input id=\"signupSurname\" type=\"text\" maxlength=\"50\" class=\"form-control\"\n               [(ngModel)]=\"registrationUser.family_name\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"signupdob\">First Name</label>\n        <input id=\"signupdob\" type=\"text\" maxlength=\"50\" class=\"form-control\"\n               [(ngModel)]=\"registrationUser.birthdate\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"signupPassword\">DOB (dd-mm-yyy)</label>\n        <input id=\"signupPassword\" type=\"password\" maxlength=\"25\" class=\"form-control\"\n               placeholder=\"at least 8 characters\" length=\"40\" [(ngModel)]=\"registrationUser.password\"\n               [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <button (click)=\"onRegister()\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-info btn-block\">\n            Create your account\n        </button>\n    </div>\n    <hr>\n    <p>Already have an account? <a [routerLink]=\"['/home/login']\"> <i class=\"fa fa-fw fa-lock\"></i>Login</a></p>\n</form>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/resend/resendCode.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/resend/resendCode.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicAuthResendResendCodeHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\n    <div class=\"form-group\">\n        <h2>Resend Code</h2>\n    </div>\n    <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\n        {{ errorMessage }}\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"signupEmail\">Email</label>\n        <input id=\"signupEmail\" type=\"email\" maxlength=\"50\" class=\"form-control\" [(ngModel)]=\"email\"\n               [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n        <button (click)=\"resendCode()\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-info btn-block\">\n            Resend Code\n        </button>\n    </div>\n\n    <hr>\n    <p><a [routerLink]=\"['/home/register']\"> <i class=\"fa fa-fw fa-group\"></i> Register</a> <a\n            [routerLink]=\"['/home/login']\"> <i class=\"fa fa-fw fa-user\"></i> Login</a>\n    </p>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/home.html":
  /*!************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/home.html ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicHomeHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top topnav\" role=\"navigation\">\n    <div class=\"container topnav\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n                    data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand topnav\" href=\"#\">Cognito QuickStart</a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a [routerLink]=\"['/home']\">Home</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/home/login']\">Login</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>\n<div class=\"intro-header\">\n    <router-outlet></router-outlet>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/landinghome.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/landinghome.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicLandinghomeHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Header -->\n<a name=\"about\"></a>\n<div class=\"intro-header\">\n    <div class=\"container\">\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"intro-message\">\n                    <h1>Cognito QuickStart App</h1>\n                    <h3>Source code can be found <a href=\"https://github.com/awslabs/aws-cognito-angular2-quickstart\">here</a>\n                    </h3>\n                    <hr class=\"intro-divider\">\n                    <ul class=\"list-inline intro-social-buttons\">\n                        <li>\n                            <a\n                                    [routerLink]=\"['/home/login']\" class=\"btn btn-default btn-lg\"> <i\n                                    class=\"fa fa-lock fa-fw\"></i> <span class=\"network-name\">Cognito</span> Login</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!-- /.container -->\n\n</div>\n<!-- /.intro-header -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/secure/jwttokens/jwt.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/secure/jwttokens/jwt.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecureJwttokensJwtHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"page-header\">JWT Tokens</h1>\n<ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a data-toggle=\"tab\" href=\"#accesstoken\">Access Token</a></li>\n    <li><a data-toggle=\"tab\" href=\"#idtoken\">Id Token</a></li>\n</ul>\n\n<div class=\"tab-content\">\n    <div id=\"accesstoken\" class=\"tab-pane fade in active\">\n        <h3>Access Token</h3>\n        <p>{{ stuff.accessToken }}</p>\n    </div>\n    <div id=\"idtoken\" class=\"tab-pane fade\">\n        <h3>Id Token</h3>\n        <p>{{ stuff.idToken }}</p>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/secure/landing/secureHome.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/secure/landing/secureHome.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecureLandingSecureHomeHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\n\n    <!-- Navigation -->\n    <nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"index.html\">Cognito Startup</a>\n        </div>\n        <!-- /.navbar-header -->\n\n        <ul class=\"nav navbar-top-links navbar-right\">\n\n            <!-- /.dropdown -->\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                    <i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>\n                </a>\n                <ul class=\"dropdown-menu dropdown-user\">\n                    <li><a [routerLink]=\"['/securehome/myprofile']\"><i class=\"fa fa-user fa-fw\"></i> User\n                            Profile</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li><a [routerLink]=\"['/securehome/logout']\">Logout</a>\n                    </li>\n                </ul>\n                <!-- /.dropdown-user -->\n            </li>\n            <!-- /.dropdown -->\n        </ul>\n        <!-- /.navbar-top-links -->\n\n        <div class=\"navbar-default sidebar\" role=\"navigation\">\n            <div class=\"sidebar-nav navbar-collapse\">\n                <ul class=\"nav\" id=\"side-menu\">\n                    <li>\n                        <a [routerLink]=\"['/securehome/myprofile']\"><i class=\"fa fa-dashboard fa-fw\"></i> My Profile</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/securehome/jwttokens']\"><i class=\"fa fa-table fa-fw\"></i> JWT Tokens</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/securehome/useractivity']\"><i class=\"fa fa-table fa-fw\"></i> Login Data</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/challenges/view']\"><i class=\"fa fa-table fa-fw\"></i> Challenges</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/challenges/create']\"><i class=\"fa fa-table fa-fw\"></i> Create Challenge</a>\n                    </li>\n                </ul>\n            </div>\n            <!-- /.sidebar-collapse -->\n        </div>\n        <!-- /.navbar-static-side -->\n    </nav>\n\n    <!-- Page Content -->\n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n\n                    <router-outlet></router-outlet>\n                </div>\n                <!-- /.col-lg-12 -->\n            </div>\n            <!-- /.row -->\n        </div>\n        <!-- /.container-fluid -->\n    </div>\n    <!-- /#page-wrapper -->\n\n</div>\n<!-- /#wrapper -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/secure/profile/myprofile.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/secure/profile/myprofile.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecureProfileMyprofileHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"page-header\">My Profile Parameters</h1>\n\n<div class=\"table-responsive\">\n    <table class=\"table table-hover table-striped\">\n        <tr>\n            <th>Name</th>\n            <th>Value</th>\n        </tr>\n        <tr *ngFor=\"let parameter of parameters\" class=\"active\">\n            <td>{{ parameter.name }}</td>\n            <td>{{ parameter.value }}</td>\n        </tr>\n\n    </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/secure/useractivity/useractivity.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/secure/useractivity/useractivity.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecureUseractivityUseractivityHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"page-header\">My Login Activity</h1>\n\n<div class=\"table-responsive\">\n    <table class=\"table table-hover table-striped\">\n        <tr>\n            <th>Action</th>\n            <th>Date</th>\n        </tr>\n        <tr *ngFor=\"let item of logdata\" class=\"active\">\n            <td>{{ item.type }}</td>\n            <td>{{ item.date }}</td>\n        </tr>\n    </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/template/app.html":
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/template/app.html ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTemplateAppHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./secure/challenge/challenge.module": ["./src/app/secure/challenge/challenge.module.ts", "secure-challenge-challenge-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_aws_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service/aws.service */
    "./src/app/service/aws.service.ts");
    /* harmony import */


    var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/user-login.service */
    "./src/app/service/user-login.service.ts");
    /* harmony import */


    var _service_cognito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service/cognito.service */
    "./src/app/service/cognito.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /**
     * @author Vladimir Budilov
     *
     * This is the entry-way into the routing logic. This is the first component that's called when the app
     * loads.
     *
     */


    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(awsUtil, userService, cognito) {
        _classCallCheck(this, AppComponent);

        this.awsUtil = awsUtil;
        this.userService = userService;
        this.cognito = cognito;
        console.log("AppComponent: constructor");
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("AppComponent: Checking if the user is already authenticated");
          this.userService.isAuthenticated(this);
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn(message, _isLoggedIn) {
          console.log("AppComponent: the user is authenticated: " + _isLoggedIn);
          var mythis = this;
          this.cognito.getIdToken({
            callback: function callback() {},
            callbackWithParam: function callbackWithParam(token) {
              // Include the passed-in callback here as well so that it's executed downstream
              console.log("AppComponent: calling initAwsService in callback");
              mythis.awsUtil.initAwsService(null, _isLoggedIn, token);
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _service_aws_service__WEBPACK_IMPORTED_MODULE_1__["AwsUtil"]
      }, {
        type: _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]
      }, {
        type: _service_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoUtil"]
      }];
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./template/app.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/template/app.html")).default
    }), __metadata("design:paramtypes", [_service_aws_service__WEBPACK_IMPORTED_MODULE_1__["AwsUtil"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"], _service_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoUtil"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./service/user-registration.service */
    "./src/app/service/user-registration.service.ts");
    /* harmony import */


    var _service_user_parameters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service/user-parameters.service */
    "./src/app/service/user-parameters.service.ts");
    /* harmony import */


    var _service_user_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service/user-login.service */
    "./src/app/service/user-login.service.ts");
    /* harmony import */


    var _service_cognito_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./service/cognito.service */
    "./src/app/service/cognito.service.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _public_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./public/home.component */
    "./src/app/public/home.component.ts");
    /* harmony import */


    var _service_aws_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./service/aws.service */
    "./src/app/service/aws.service.ts");
    /* harmony import */


    var _secure_useractivity_useractivity_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./secure/useractivity/useractivity.component */
    "./src/app/secure/useractivity/useractivity.component.ts");
    /* harmony import */


    var _secure_profile_myprofile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./secure/profile/myprofile.component */
    "./src/app/secure/profile/myprofile.component.ts");
    /* harmony import */


    var _secure_landing_securehome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./secure/landing/securehome.component */
    "./src/app/secure/landing/securehome.component.ts");
    /* harmony import */


    var _secure_jwttokens_jwt_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./secure/jwttokens/jwt.component */
    "./src/app/secure/jwttokens/jwt.component.ts");
    /* harmony import */


    var _service_ddb_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./service/ddb.service */
    "./src/app/service/ddb.service.ts");
    /* harmony import */


    var _public_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./public/auth/login/login.component */
    "./src/app/public/auth/login/login.component.ts");
    /* harmony import */


    var _public_auth_register_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./public/auth/register/registration.component */
    "./src/app/public/auth/register/registration.component.ts");
    /* harmony import */


    var _public_auth_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./public/auth/forgot/forgotPassword.component */
    "./src/app/public/auth/forgot/forgotPassword.component.ts");
    /* harmony import */


    var _public_auth_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./public/auth/confirm/confirmRegistration.component */
    "./src/app/public/auth/confirm/confirmRegistration.component.ts");
    /* harmony import */


    var _public_auth_resend_resendCode_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./public/auth/resend/resendCode.component */
    "./src/app/public/auth/resend/resendCode.component.ts");
    /* harmony import */


    var _public_auth_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./public/auth/newpassword/newpassword.component */
    "./src/app/public/auth/newpassword/newpassword.component.ts");
    /* harmony import */


    var _public_auth_mfa_mfa_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./public/auth/mfa/mfa.component */
    "./src/app/public/auth/mfa/mfa.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _utils_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./utils/jwt.interceptor */
    "./src/app/utils/jwt.interceptor.ts");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/common/locales/en */
    "./node_modules/@angular/common/locales/en.js");
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_29___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_29__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_28__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_29___default.a);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_public_auth_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_22__["NewPasswordComponent"], _public_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _public_auth_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_20__["LogoutComponent"], _public_auth_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_20__["RegistrationConfirmationComponent"], _public_auth_resend_resendCode_component__WEBPACK_IMPORTED_MODULE_21__["ResendCodeComponent"], _public_auth_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPasswordStep1Component"], _public_auth_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPassword2Component"], _public_auth_register_registration_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"], _public_auth_mfa_mfa_component__WEBPACK_IMPORTED_MODULE_23__["MFAComponent"], _public_home_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"], _public_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeLandingComponent"], _public_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _secure_useractivity_useractivity_component__WEBPACK_IMPORTED_MODULE_12__["UseractivityComponent"], _secure_profile_myprofile_component__WEBPACK_IMPORTED_MODULE_13__["MyProfileComponent"], _secure_landing_securehome_component__WEBPACK_IMPORTED_MODULE_14__["SecureHomeComponent"], _secure_jwttokens_jwt_component__WEBPACK_IMPORTED_MODULE_15__["JwtComponent"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], _app_routes__WEBPACK_IMPORTED_MODULE_9__["routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_26__["NgZorroAntdModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"]],
      providers: [_service_cognito_service__WEBPACK_IMPORTED_MODULE_8__["CognitoUtil"], _service_aws_service__WEBPACK_IMPORTED_MODULE_11__["AwsUtil"], _service_ddb_service__WEBPACK_IMPORTED_MODULE_16__["DynamoDBService"], _service_user_registration_service__WEBPACK_IMPORTED_MODULE_5__["UserRegistrationService"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_7__["UserLoginService"], _service_user_parameters_service__WEBPACK_IMPORTED_MODULE_6__["UserParametersService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"],
        useClass: _utils_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__["JwtInterceptor"],
        multi: true
      }, {
        provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_26__["NZ_I18N"],
        useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_26__["en_GB"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: appRoutingProviders, routing */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function () {
      return appRoutingProviders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _public_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./public/home.component */
    "./src/app/public/home.component.ts");
    /* harmony import */


    var _secure_landing_securehome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./secure/landing/securehome.component */
    "./src/app/secure/landing/securehome.component.ts");
    /* harmony import */


    var _secure_profile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./secure/profile/myprofile.component */
    "./src/app/secure/profile/myprofile.component.ts");
    /* harmony import */


    var _secure_jwttokens_jwt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./secure/jwttokens/jwt.component */
    "./src/app/secure/jwttokens/jwt.component.ts");
    /* harmony import */


    var _secure_useractivity_useractivity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./secure/useractivity/useractivity.component */
    "./src/app/secure/useractivity/useractivity.component.ts");
    /* harmony import */


    var _public_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./public/auth/login/login.component */
    "./src/app/public/auth/login/login.component.ts");
    /* harmony import */


    var _public_auth_register_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./public/auth/register/registration.component */
    "./src/app/public/auth/register/registration.component.ts");
    /* harmony import */


    var _public_auth_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./public/auth/forgot/forgotPassword.component */
    "./src/app/public/auth/forgot/forgotPassword.component.ts");
    /* harmony import */


    var _public_auth_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./public/auth/confirm/confirmRegistration.component */
    "./src/app/public/auth/confirm/confirmRegistration.component.ts");
    /* harmony import */


    var _public_auth_resend_resendCode_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./public/auth/resend/resendCode.component */
    "./src/app/public/auth/resend/resendCode.component.ts");
    /* harmony import */


    var _public_auth_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./public/auth/newpassword/newpassword.component */
    "./src/app/public/auth/newpassword/newpassword.component.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var homeRoutes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _public_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
      children: [// {path: 'about', component: AboutComponent},
      {
        path: 'login',
        component: _public_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }, {
        path: 'register',
        component: _public_auth_register_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
      }, {
        path: 'confirmRegistration/:username',
        component: _public_auth_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationConfirmationComponent"]
      }, {
        path: 'resendCode',
        component: _public_auth_resend_resendCode_component__WEBPACK_IMPORTED_MODULE_10__["ResendCodeComponent"]
      }, {
        path: 'forgotPassword/:email',
        component: _public_auth_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPassword2Component"]
      }, {
        path: 'forgotPassword',
        component: _public_auth_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordStep1Component"]
      }, {
        path: 'newPassword',
        component: _public_auth_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_11__["NewPasswordComponent"]
      }, {
        path: '',
        component: _public_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeLandingComponent"]
      }]
    }];
    var secureHomeRoutes = [{
      path: '',
      redirectTo: '/securehome',
      pathMatch: 'full'
    }, {
      path: 'securehome',
      component: _secure_landing_securehome_component__WEBPACK_IMPORTED_MODULE_2__["SecureHomeComponent"],
      children: [{
        path: 'logout',
        component: _public_auth_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"]
      }, {
        path: 'jwttokens',
        component: _secure_jwttokens_jwt_component__WEBPACK_IMPORTED_MODULE_4__["JwtComponent"]
      }, {
        path: 'myprofile',
        component: _secure_profile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"]
      }, {
        path: 'useractivity',
        component: _secure_useractivity_useractivity_component__WEBPACK_IMPORTED_MODULE_5__["UseractivityComponent"]
      }, {
        path: '',
        component: _secure_profile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"]
      }]
    }, {
      path: 'challenges',
      loadChildren: './secure/challenge/challenge.module#ChallengeModule'
    }];
    var routes = [{
      path: '',
      children: [].concat(homeRoutes, secureHomeRoutes, [{
        path: '',
        component: _public_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }])
    }];
    var appRoutingProviders = [];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);
    /***/

  },

  /***/
  "./src/app/index.ts":
  /*!**************************!*\
    !*** ./src/app/index.ts ***!
    \**************************/

  /*! exports provided: AppComponent, AppModule */

  /***/
  function srcAppIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"];
    });
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/public/auth/confirm/confirmRegistration.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/public/auth/confirm/confirmRegistration.component.ts ***!
    \**********************************************************************/

  /*! exports provided: LogoutComponent, RegistrationConfirmationComponent */

  /***/
  function srcAppPublicAuthConfirmConfirmRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationConfirmationComponent", function () {
      return RegistrationConfirmationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../service/user-registration.service */
    "./src/app/service/user-registration.service.ts");
    /* harmony import */


    var _service_user_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../service/user-login.service */
    "./src/app/service/user-login.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent(router, userService) {
        _classCallCheck(this, LogoutComponent);

        this.router = router;
        this.userService = userService;
        this.userService.isAuthenticated(this);
      }

      _createClass(LogoutComponent, [{
        key: "isLoggedIn",
        value: function isLoggedIn(message, _isLoggedIn2) {
          if (_isLoggedIn2) {
            this.userService.logout();
            this.router.navigate(['/home']);
          }

          this.router.navigate(['/home']);
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _service_user_login_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"]
      }];
    };

    LogoutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: ''
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"]])], LogoutComponent);

    var RegistrationConfirmationComponent =
    /*#__PURE__*/
    function () {
      function RegistrationConfirmationComponent(regService, router, route) {
        _classCallCheck(this, RegistrationConfirmationComponent);

        this.regService = regService;
        this.router = router;
        this.route = route;
      }

      _createClass(RegistrationConfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this.email = params['username'];
          });
          this.errorMessage = null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "onConfirmRegistration",
        value: function onConfirmRegistration() {
          this.errorMessage = null;
          this.regService.confirmRegistration(this.email, this.confirmationCode, this);
        }
      }, {
        key: "cognitoCallback",
        value: function cognitoCallback(message, result) {
          if (message != null) {
            //error
            this.errorMessage = message;
            console.log("message: " + this.errorMessage);
          } else {
            //success
            //move to the next step
            console.log("Moving to securehome"); // this.configs.curUser = result.user;

            this.router.navigate(['/securehome']);
          }
        }
      }]);

      return RegistrationConfirmationComponent;
    }();

    RegistrationConfirmationComponent.ctorParameters = function () {
      return [{
        type: _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    RegistrationConfirmationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./confirmRegistration.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/confirm/confirmRegistration.html")).default
    }), __metadata("design:paramtypes", [_service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])], RegistrationConfirmationComponent);
    /***/
  },

  /***/
  "./src/app/public/auth/forgot/forgotPassword.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/public/auth/forgot/forgotPassword.component.ts ***!
    \****************************************************************/

  /*! exports provided: ForgotPasswordStep1Component, ForgotPassword2Component */

  /***/
  function srcAppPublicAuthForgotForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordStep1Component", function () {
      return ForgotPasswordStep1Component;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPassword2Component", function () {
      return ForgotPassword2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../service/user-login.service */
    "./src/app/service/user-login.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ForgotPasswordStep1Component =
    /*#__PURE__*/
    function () {
      function ForgotPasswordStep1Component(router, userService) {
        _classCallCheck(this, ForgotPasswordStep1Component);

        this.router = router;
        this.userService = userService;
        this.errorMessage = null;
      }

      _createClass(ForgotPasswordStep1Component, [{
        key: "onNext",
        value: function onNext() {
          this.errorMessage = null;
          this.userService.forgotPassword(this.email, this);
        }
      }, {
        key: "cognitoCallback",
        value: function cognitoCallback(message, result) {
          if (message == null && result == null) {
            //error
            this.router.navigate(['/home/forgotPassword', this.email]);
          } else {
            //success
            this.errorMessage = message;
          }
        }
      }]);

      return ForgotPasswordStep1Component;
    }();

    ForgotPasswordStep1Component.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]
      }];
    };

    ForgotPasswordStep1Component = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./forgotPassword.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/forgot/forgotPassword.html")).default
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]])], ForgotPasswordStep1Component);

    var ForgotPassword2Component =
    /*#__PURE__*/
    function () {
      function ForgotPassword2Component(router, route, userService) {
        _classCallCheck(this, ForgotPassword2Component);

        this.router = router;
        this.route = route;
        this.userService = userService;
        console.log("email from the url: " + this.email);
      }

      _createClass(ForgotPassword2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this2.email = params['email'];
          });
          this.errorMessage = null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "onNext",
        value: function onNext() {
          this.errorMessage = null;
          this.userService.confirmNewPassword(this.email, this.verificationCode, this.password, this);
        }
      }, {
        key: "cognitoCallback",
        value: function cognitoCallback(message) {
          if (message != null) {
            //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
          } else {
            //success
            this.router.navigate(['/home/login']);
          }
        }
      }]);

      return ForgotPassword2Component;
    }();

    ForgotPassword2Component.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]
      }];
    };

    ForgotPassword2Component = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./forgotPasswordStep2.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/forgot/forgotPasswordStep2.html")).default
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]])], ForgotPassword2Component);
    /***/
  },

  /***/
  "./src/app/public/auth/login/login.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/public/auth/login/login.component.ts ***!
    \******************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPublicAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../service/user-login.service */
    "./src/app/service/user-login.service.ts");
    /* harmony import */


    var _service_ddb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../service/ddb.service */
    "./src/app/service/ddb.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, ddb, userService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.ddb = ddb;
        this.userService = userService;
        this.mfaStep = false;
        this.mfaData = {
          destination: '',
          callback: null
        };
        console.log("LoginComponent constructor");
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.errorMessage = null;
          console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
          this.userService.isAuthenticated(this);
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          if (this.email == null || this.password == null) {
            this.errorMessage = "All fields are required";
            return;
          }

          this.errorMessage = null;
          this.userService.authenticate(this.email, this.password, this);
        }
      }, {
        key: "cognitoCallback",
        value: function cognitoCallback(message, result) {
          if (message != null) {
            //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);

            if (this.errorMessage === 'User is not confirmed.') {
              console.log("redirecting");
              this.router.navigate(['/home/confirmRegistration', this.email]);
            } else if (this.errorMessage === 'User needs to set password.') {
              console.log("redirecting to set new password");
              this.router.navigate(['/home/newPassword']);
            }
          } else {
            //success
            this.ddb.writeLogEntry("login");
            this.router.navigate(['/securehome']);
          }
        }
      }, {
        key: "handleMFAStep",
        value: function handleMFAStep(challengeName, challengeParameters, callback) {
          var _this3 = this;

          this.mfaStep = true;
          this.mfaData.destination = challengeParameters.CODE_DELIVERY_DESTINATION;

          this.mfaData.callback = function (code) {
            if (code == null || code.length === 0) {
              _this3.errorMessage = "Code is required";
              return;
            }

            _this3.errorMessage = null;
            callback(code);
          };
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn(message, _isLoggedIn3) {
          if (_isLoggedIn3) {
            this.router.navigate(['/securehome']);
          }
        }
      }, {
        key: "cancelMFA",
        value: function cancelMFA() {
          this.mfaStep = false;
          return false; //necessary to prevent href navigation
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _service_ddb_service__WEBPACK_IMPORTED_MODULE_3__["DynamoDBService"]
      }, {
        type: _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/login/login.html")).default
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_ddb_service__WEBPACK_IMPORTED_MODULE_3__["DynamoDBService"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/public/auth/mfa/mfa.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/public/auth/mfa/mfa.component.ts ***!
    \**************************************************/

  /*! exports provided: MFAComponent */

  /***/
  function srcAppPublicAuthMfaMfaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MFAComponent", function () {
      return MFAComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MFAComponent = function MFAComponent() {
      _classCallCheck(this, MFAComponent);

      console.log("MFAComponent constructor");
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], MFAComponent.prototype, "destination", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Function)], MFAComponent.prototype, "onSubmit", void 0);

    MFAComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-mfa',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./mfa.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/mfa/mfa.html")).default
    }), __metadata("design:paramtypes", [])], MFAComponent);
    /***/
  },

  /***/
  "./src/app/public/auth/newpassword/newpassword.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/public/auth/newpassword/newpassword.component.ts ***!
    \******************************************************************/

  /*! exports provided: NewPasswordUser, NewPasswordComponent */

  /***/
  function srcAppPublicAuthNewpasswordNewpasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPasswordUser", function () {
      return NewPasswordUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPasswordComponent", function () {
      return NewPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../service/user-registration.service */
    "./src/app/service/user-registration.service.ts");
    /* harmony import */


    var _service_user_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../service/user-login.service */
    "./src/app/service/user-login.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NewPasswordUser = function NewPasswordUser() {
      _classCallCheck(this, NewPasswordUser);
    };
    /**
     * This component is responsible for displaying and controlling
     * the registration of the user.
     */


    var NewPasswordComponent =
    /*#__PURE__*/
    function () {
      function NewPasswordComponent(userRegistration, userService, router) {
        _classCallCheck(this, NewPasswordComponent);

        this.userRegistration = userRegistration;
        this.userService = userService;
        this.router = router;
        this.onInit();
      }

      _createClass(NewPasswordComponent, [{
        key: "onInit",
        value: function onInit() {
          this.registrationUser = new NewPasswordUser();
          this.errorMessage = null;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.errorMessage = null;
          console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
          this.userService.isAuthenticated(this);
        }
      }, {
        key: "onRegister",
        value: function onRegister() {
          console.log(this.registrationUser);
          this.errorMessage = null;
          this.userRegistration.newPassword(this.registrationUser, this);
        }
      }, {
        key: "cognitoCallback",
        value: function cognitoCallback(message, result) {
          if (message != null) {
            //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
          } else {
            //success
            //move to the next step
            console.log("redirecting");
            this.router.navigate(['/securehome']);
          }
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn(message, _isLoggedIn4) {
          if (_isLoggedIn4) this.router.navigate(['/securehome']);
        }
      }]);

      return NewPasswordComponent;
    }();

    NewPasswordComponent.ctorParameters = function () {
      return [{
        type: _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }, {
        type: _service_user_login_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    NewPasswordComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./newpassword.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/newpassword/newpassword.html")).default
    }), __metadata("design:paramtypes", [_service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], NewPasswordComponent);
    /***/
  },

  /***/
  "./src/app/public/auth/register/registration.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/public/auth/register/registration.component.ts ***!
    \****************************************************************/

  /*! exports provided: RegistrationUser, RegisterComponent */

  /***/
  function srcAppPublicAuthRegisterRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationUser", function () {
      return RegistrationUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../service/user-registration.service */
    "./src/app/service/user-registration.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RegistrationUser = function RegistrationUser() {
      _classCallCheck(this, RegistrationUser);
    };
    /**
     * This component is responsible for displaying and controlling
     * the registration of the user.
     */


    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(userRegistration, router) {
        _classCallCheck(this, RegisterComponent);

        this.userRegistration = userRegistration;
        this.router = router;
        this.onInit();
      }

      _createClass(RegisterComponent, [{
        key: "onInit",
        value: function onInit() {
          this.registrationUser = new RegistrationUser();
          this.errorMessage = null;
        }
      }, {
        key: "onRegister",
        value: function onRegister() {
          this.errorMessage = null;
          this.userRegistration.register(this.registrationUser, this);
        }
      }, {
        key: "cognitoCallback",
        value: function cognitoCallback(message, result) {
          if (message != null) {
            //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
          } else {
            //success
            //move to the next step
            console.log("redirecting");
            this.router.navigate(['/home/confirmRegistration', result.user.username]);
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    RegisterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./registration.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/register/registration.html")).default
    }), __metadata("design:paramtypes", [_service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/public/auth/resend/resendCode.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/public/auth/resend/resendCode.component.ts ***!
    \************************************************************/

  /*! exports provided: ResendCodeComponent */

  /***/
  function srcAppPublicAuthResendResendCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResendCodeComponent", function () {
      return ResendCodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../service/user-registration.service */
    "./src/app/service/user-registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ResendCodeComponent =
    /*#__PURE__*/
    function () {
      function ResendCodeComponent(registrationService, router) {
        _classCallCheck(this, ResendCodeComponent);

        this.registrationService = registrationService;
        this.router = router;
      }

      _createClass(ResendCodeComponent, [{
        key: "resendCode",
        value: function resendCode() {
          this.registrationService.resendCode(this.email, this);
        }
      }, {
        key: "cognitoCallback",
        value: function cognitoCallback(error, result) {
          if (error != null) {
            this.errorMessage = "Something went wrong...please try again";
          } else {
            this.router.navigate(['/home/confirmRegistration', this.email]);
          }
        }
      }]);

      return ResendCodeComponent;
    }();

    ResendCodeComponent.ctorParameters = function () {
      return [{
        type: _service_user_registration_service__WEBPACK_IMPORTED_MODULE_1__["UserRegistrationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ResendCodeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./resendCode.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/auth/resend/resendCode.html")).default
    }), __metadata("design:paramtypes", [_service_user_registration_service__WEBPACK_IMPORTED_MODULE_1__["UserRegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ResendCodeComponent);
    /***/
  },

  /***/
  "./src/app/public/home.component.ts":
  /*!******************************************!*\
    !*** ./src/app/public/home.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent, HomeLandingComponent, HomeComponent */

  /***/
  function srcAppPublicHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeLandingComponent", function () {
      return HomeLandingComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AboutComponent = function AboutComponent() {
      _classCallCheck(this, AboutComponent);
    };

    AboutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: '<p>Hello and welcome!"</p>'
    })], AboutComponent);

    var HomeLandingComponent = function HomeLandingComponent() {
      _classCallCheck(this, HomeLandingComponent);

      console.log("HomeLandingComponent constructor");
    };

    HomeLandingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./landinghome.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/landinghome.html")).default
    }), __metadata("design:paramtypes", [])], HomeLandingComponent);

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        console.log("HomeComponent constructor");
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/home.html")).default
    }), __metadata("design:paramtypes", [])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/secure/jwttokens/jwt.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/secure/jwttokens/jwt.component.ts ***!
    \***************************************************/

  /*! exports provided: Stuff, JwtComponent, AccessTokenCallback, IdTokenCallback */

  /***/
  function srcAppSecureJwttokensJwtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Stuff", function () {
      return Stuff;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtComponent", function () {
      return JwtComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessTokenCallback", function () {
      return AccessTokenCallback;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdTokenCallback", function () {
      return IdTokenCallback;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_user_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/user-login.service */
    "./src/app/service/user-login.service.ts");
    /* harmony import */


    var _service_cognito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/cognito.service */
    "./src/app/service/cognito.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Stuff = function Stuff() {
      _classCallCheck(this, Stuff);
    };

    var JwtComponent =
    /*#__PURE__*/
    function () {
      function JwtComponent(router, userService, cognitoUtil) {
        _classCallCheck(this, JwtComponent);

        this.router = router;
        this.userService = userService;
        this.cognitoUtil = cognitoUtil;
        this.stuff = new Stuff();
        this.userService.isAuthenticated(this);
        console.log("in JwtComponent");
      }

      _createClass(JwtComponent, [{
        key: "isLoggedIn",
        value: function isLoggedIn(message, _isLoggedIn5) {
          if (!_isLoggedIn5) {
            this.router.navigate(['/home/login']);
          } else {
            this.cognitoUtil.getAccessToken(new AccessTokenCallback(this));
            this.cognitoUtil.getIdToken(new IdTokenCallback(this));
          }
        }
      }]);

      return JwtComponent;
    }();

    JwtComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]
      }, {
        type: _service_cognito_service__WEBPACK_IMPORTED_MODULE_2__["CognitoUtil"]
      }];
    };

    JwtComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./jwt.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/secure/jwttokens/jwt.html")).default
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"], _service_cognito_service__WEBPACK_IMPORTED_MODULE_2__["CognitoUtil"]])], JwtComponent);

    var AccessTokenCallback =
    /*#__PURE__*/
    function () {
      function AccessTokenCallback(jwt) {
        _classCallCheck(this, AccessTokenCallback);

        this.jwt = jwt;
      }

      _createClass(AccessTokenCallback, [{
        key: "callback",
        value: function callback() {}
      }, {
        key: "callbackWithParam",
        value: function callbackWithParam(result) {
          this.jwt.stuff.accessToken = result;
        }
      }]);

      return AccessTokenCallback;
    }();

    var IdTokenCallback =
    /*#__PURE__*/
    function () {
      function IdTokenCallback(jwt) {
        _classCallCheck(this, IdTokenCallback);

        this.jwt = jwt;
      }

      _createClass(IdTokenCallback, [{
        key: "callback",
        value: function callback() {}
      }, {
        key: "callbackWithParam",
        value: function callbackWithParam(result) {
          this.jwt.stuff.idToken = result;
        }
      }]);

      return IdTokenCallback;
    }();
    /***/

  },

  /***/
  "./src/app/secure/landing/securehome.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/secure/landing/securehome.component.ts ***!
    \********************************************************/

  /*! exports provided: SecureHomeComponent */

  /***/
  function srcAppSecureLandingSecurehomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecureHomeComponent", function () {
      return SecureHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/user-login.service */
    "./src/app/service/user-login.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SecureHomeComponent =
    /*#__PURE__*/
    function () {
      function SecureHomeComponent(router, userService) {
        _classCallCheck(this, SecureHomeComponent);

        this.router = router;
        this.userService = userService;
        this.userService.isAuthenticated(this);
        console.log("SecureHomeComponent: constructor");
      }

      _createClass(SecureHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn(message, _isLoggedIn6) {
          if (!_isLoggedIn6) {
            this.router.navigate(['/home/login']);
          }
        }
      }]);

      return SecureHomeComponent;
    }();

    SecureHomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]
      }];
    };

    SecureHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./secureHome.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/secure/landing/secureHome.html")).default // styleUrls: ['/assets/css/sb-admin.css']

    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]])], SecureHomeComponent);
    /***/
  },

  /***/
  "./src/app/secure/profile/myprofile.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/secure/profile/myprofile.component.ts ***!
    \*******************************************************/

  /*! exports provided: MyProfileComponent, Parameters, GetParametersCallback */

  /***/
  function srcAppSecureProfileMyprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Parameters", function () {
      return Parameters;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetParametersCallback", function () {
      return GetParametersCallback;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_user_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/user-login.service */
    "./src/app/service/user-login.service.ts");
    /* harmony import */


    var _service_cognito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/cognito.service */
    "./src/app/service/cognito.service.ts");
    /* harmony import */


    var _service_user_parameters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/user-parameters.service */
    "./src/app/service/user-parameters.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MyProfileComponent =
    /*#__PURE__*/
    function () {
      function MyProfileComponent(router, userService, userParams, cognitoUtil) {
        _classCallCheck(this, MyProfileComponent);

        this.router = router;
        this.userService = userService;
        this.userParams = userParams;
        this.cognitoUtil = cognitoUtil;
        this.parameters = [];
        this.userService.isAuthenticated(this);
        console.log("In MyProfileComponent");
      }

      _createClass(MyProfileComponent, [{
        key: "isLoggedIn",
        value: function isLoggedIn(message, _isLoggedIn7) {
          if (!_isLoggedIn7) {
            this.router.navigate(['/home/login']);
          } else {
            this.userParams.getParameters(new GetParametersCallback(this, this.cognitoUtil));
          }
        }
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _service_user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]
      }, {
        type: _service_user_parameters_service__WEBPACK_IMPORTED_MODULE_3__["UserParametersService"]
      }, {
        type: _service_cognito_service__WEBPACK_IMPORTED_MODULE_2__["CognitoUtil"]
      }];
    };

    MyProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./myprofile.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/secure/profile/myprofile.html")).default
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"], _service_user_parameters_service__WEBPACK_IMPORTED_MODULE_3__["UserParametersService"], _service_cognito_service__WEBPACK_IMPORTED_MODULE_2__["CognitoUtil"]])], MyProfileComponent);

    var Parameters = function Parameters() {
      _classCallCheck(this, Parameters);
    };

    var GetParametersCallback =
    /*#__PURE__*/
    function () {
      function GetParametersCallback(me, cognitoUtil) {
        _classCallCheck(this, GetParametersCallback);

        this.me = me;
        this.cognitoUtil = cognitoUtil;
      }

      _createClass(GetParametersCallback, [{
        key: "callback",
        value: function callback() {}
      }, {
        key: "callbackWithParam",
        value: function callbackWithParam(result) {
          for (var i = 0; i < result.length; i++) {
            var parameter = new Parameters();
            parameter.name = result[i].getName();
            parameter.value = result[i].getValue();
            this.me.parameters.push(parameter);
          }

          var param = new Parameters();
          param.name = "cognito ID";
          param.value = this.cognitoUtil.getCognitoIdentity();
          this.me.parameters.push(param);
        }
      }]);

      return GetParametersCallback;
    }();
    /***/

  },

  /***/
  "./src/app/secure/useractivity/useractivity.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/secure/useractivity/useractivity.component.ts ***!
    \***************************************************************/

  /*! exports provided: Stuff, UseractivityComponent */

  /***/
  function srcAppSecureUseractivityUseractivityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Stuff", function () {
      return Stuff;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UseractivityComponent", function () {
      return UseractivityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_user_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/user-login.service */
    "./src/app/service/user-login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_ddb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/ddb.service */
    "./src/app/service/ddb.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Stuff = function Stuff() {
      _classCallCheck(this, Stuff);
    };

    var UseractivityComponent =
    /*#__PURE__*/
    function () {
      function UseractivityComponent(router, ddb, userService) {
        _classCallCheck(this, UseractivityComponent);

        this.router = router;
        this.ddb = ddb;
        this.userService = userService;
        this.logdata = [];
        this.userService.isAuthenticated(this);
        console.log("in UseractivityComponent");
      }

      _createClass(UseractivityComponent, [{
        key: "isLoggedIn",
        value: function isLoggedIn(message, _isLoggedIn8) {
          if (!_isLoggedIn8) {
            this.router.navigate(['/home/login']);
          } else {
            console.log("scanning DDB");
            this.ddb.getLogEntries(this.logdata);
          }
        }
      }]);

      return UseractivityComponent;
    }();

    UseractivityComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_ddb_service__WEBPACK_IMPORTED_MODULE_3__["DynamoDBService"]
      }, {
        type: _service_user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]
      }];
    };

    UseractivityComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'awscognito-angular2-app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./useractivity.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/secure/useractivity/useractivity.html")).default
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_ddb_service__WEBPACK_IMPORTED_MODULE_3__["DynamoDBService"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]])], UseractivityComponent);
    /***/
  },

  /***/
  "./src/app/service/aws.service.ts":
  /*!****************************************!*\
    !*** ./src/app/service/aws.service.ts ***!
    \****************************************/

  /*! exports provided: AwsUtil */

  /***/
  function srcAppServiceAwsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AwsUtil", function () {
      return AwsUtil;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _cognito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cognito.service */
    "./src/app/service/cognito.service.ts");
    /* harmony import */


    var aws_sdk_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! aws-sdk/global */
    "./node_modules/aws-sdk/browser.js");
    /* harmony import */


    var aws_sdk_global__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(aws_sdk_global__WEBPACK_IMPORTED_MODULE_2__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AwsUtil_1;
    /**
     * Created by Vladimir Budilov
     */
    // declare var AMA: any;

    var AwsUtil = AwsUtil_1 =
    /*#__PURE__*/
    function () {
      function AwsUtil(cognitoUtil) {
        _classCallCheck(this, AwsUtil);

        this.cognitoUtil = cognitoUtil;
        aws_sdk_global__WEBPACK_IMPORTED_MODULE_2__["config"].region = _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]._REGION;
      }
      /**
       * This is the method that needs to be called in order to init the aws global creds
       */


      _createClass(AwsUtil, [{
        key: "initAwsService",
        value: function initAwsService(callback, isLoggedIn, idToken) {
          if (AwsUtil_1.runningInit) {
            // Need to make sure I don't get into an infinite loop here, so need to exit if this method is running already
            console.log("AwsUtil: Aborting running initAwsService()...it's running already."); // instead of aborting here, it's best to put a timer

            if (callback != null) {
              callback.callback();
              callback.callbackWithParam(null);
            }

            return;
          }

          console.log("AwsUtil: Running initAwsService()");
          AwsUtil_1.runningInit = true;
          var mythis = this; // First check if the user is authenticated already

          if (isLoggedIn) mythis.setupAWS(isLoggedIn, callback, idToken);
        }
        /**
         * Sets up the AWS global params
         *
         * @param isLoggedIn
         * @param callback
         */

      }, {
        key: "setupAWS",
        value: function setupAWS(isLoggedIn, callback, idToken) {
          console.log("AwsUtil: in setupAWS()");

          if (isLoggedIn) {
            console.log("AwsUtil: User is logged in"); // Setup mobile analytics

            var options = {
              appId: '32673c035a0b40e99d6e1f327be0cb60',
              appTitle: "aws-cognito-angular2-quickstart"
            }; // TODO: The mobile Analytics client needs some work to handle Typescript. Disabling for the time being.
            // var mobileAnalyticsClient = new AMA.Manager(options);
            // mobileAnalyticsClient.submitEvents();

            this.addCognitoCredentials(idToken);
            console.log("AwsUtil: Retrieving the id token");
          } else {
            console.log("AwsUtil: User is not logged in");
          }

          if (callback != null) {
            callback.callback();
            callback.callbackWithParam(null);
          }

          AwsUtil_1.runningInit = false;
        }
      }, {
        key: "addCognitoCredentials",
        value: function addCognitoCredentials(idTokenJwt) {
          var creds = this.cognitoUtil.buildCognitoCreds(idTokenJwt);
          aws_sdk_global__WEBPACK_IMPORTED_MODULE_2__["config"].credentials = creds;
          creds.get(function (err) {
            if (!err) {
              if (AwsUtil_1.firstLogin) {
                // save the login info to DDB
                this.ddb.writeLogEntry("login");
                AwsUtil_1.firstLogin = false;
              }
            }
          });
        }
      }], [{
        key: "getCognitoParametersForIdConsolidation",
        value: function getCognitoParametersForIdConsolidation(idTokenJwt) {
          console.log("AwsUtil: enter getCognitoParametersForIdConsolidation()");

          var url = 'cognito-idp.' + _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]._REGION.toLowerCase() + '.amazonaws.com/' + _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]._USER_POOL_ID;

          var logins = [];
          logins[url] = idTokenJwt;
          var params = {
            IdentityPoolId: _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]._IDENTITY_POOL_ID,
            Logins: logins
          };
          return params;
        }
      }]);

      return AwsUtil;
    }();

    AwsUtil.firstLogin = false;
    AwsUtil.runningInit = false;

    AwsUtil.ctorParameters = function () {
      return [{
        type: _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]
      }];
    };

    AwsUtil = AwsUtil_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]])], AwsUtil);
    /***/
  },

  /***/
  "./src/app/service/cognito.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/cognito.service.ts ***!
    \********************************************/

  /*! exports provided: CognitoUtil */

  /***/
  function srcAppServiceCognitoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CognitoUtil", function () {
      return CognitoUtil;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! amazon-cognito-identity-js */
    "./node_modules/amazon-cognito-identity-js/es/index.js");
    /* harmony import */


    var aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aws-sdk/global */
    "./node_modules/aws-sdk/browser.js");
    /* harmony import */


    var aws_sdk_global__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CognitoUtil_1;

    var CognitoUtil = CognitoUtil_1 =
    /*#__PURE__*/
    function () {
      function CognitoUtil() {
        _classCallCheck(this, CognitoUtil);
      }

      _createClass(CognitoUtil, [{
        key: "getUserPool",
        value: function getUserPool() {
          if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_idp_endpoint) {
            CognitoUtil_1._POOL_DATA.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_idp_endpoint;
          }

          return new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserPool"](CognitoUtil_1._POOL_DATA);
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.getUserPool().getCurrentUser();
        } // AWS Stores Credentials in many ways, and with TypeScript this means that
        // getting the base credentials we authenticated with from the AWS globals gets really murky,
        // having to get around both class extension and unions. Therefore, we're going to give
        // developers direct access to the raw, unadulterated CognitoIdentityCredentials
        // object at all times.

      }, {
        key: "setCognitoCreds",
        value: function setCognitoCreds(creds) {
          this.cognitoCreds = creds;
        }
      }, {
        key: "getCognitoCreds",
        value: function getCognitoCreds() {
          return this.cognitoCreds;
        } // This method takes in a raw jwtToken and uses the global AWS config options to build a
        // CognitoIdentityCredentials object and store it for us. It also returns the object to the caller
        // to avoid unnecessary calls to setCognitoCreds.

      }, {
        key: "buildCognitoCreds",
        value: function buildCognitoCreds(idTokenJwt) {
          var url = 'cognito-idp.' + CognitoUtil_1._REGION.toLowerCase() + '.amazonaws.com/' + CognitoUtil_1._USER_POOL_ID;

          if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_idp_endpoint) {
            url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_idp_endpoint + '/' + CognitoUtil_1._USER_POOL_ID;
          }

          var logins = {};
          logins[url] = idTokenJwt;
          var params = {
            IdentityPoolId: CognitoUtil_1._IDENTITY_POOL_ID,
            Logins: logins
          };
          var serviceConfigs = {};

          if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_identity_endpoint) {
            serviceConfigs.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_identity_endpoint;
          }

          var creds = new aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__["CognitoIdentityCredentials"](params, serviceConfigs);
          this.setCognitoCreds(creds);
          return creds;
        }
      }, {
        key: "getCognitoIdentity",
        value: function getCognitoIdentity() {
          return this.cognitoCreds.identityId;
        }
      }, {
        key: "getAccessToken",
        value: function getAccessToken(callback) {
          if (callback == null) {
            throw "CognitoUtil: callback in getAccessToken is null...returning";
          }

          if (this.getCurrentUser() != null) {
            this.getCurrentUser().getSession(function (err, session) {
              if (err) {
                console.log("CognitoUtil: Can't set the credentials:" + err);
                callback.callbackWithParam(null);
              } else {
                if (session.isValid()) {
                  callback.callbackWithParam(session.getAccessToken().getJwtToken());
                }
              }
            });
          } else {
            callback.callbackWithParam(null);
          }
        }
      }, {
        key: "getIdToken",
        value: function getIdToken(callback) {
          if (callback == null) {
            throw "CognitoUtil: callback in getIdToken is null...returning";
          }

          if (this.getCurrentUser() != null) this.getCurrentUser().getSession(function (err, session) {
            if (err) {
              console.log("CognitoUtil: Can't set the credentials:" + err);
              callback.callbackWithParam(null);
            } else {
              if (session.isValid()) {
                callback.callbackWithParam(session.getIdToken().getJwtToken());
              } else {
                console.log("CognitoUtil: Got the id token, but the session isn't valid");
              }
            }
          });else callback.callbackWithParam(null);
        }
      }, {
        key: "getRefreshToken",
        value: function getRefreshToken(callback) {
          if (callback == null) {
            throw "CognitoUtil: callback in getRefreshToken is null...returning";
          }

          if (this.getCurrentUser() != null) this.getCurrentUser().getSession(function (err, session) {
            if (err) {
              console.log("CognitoUtil: Can't set the credentials:" + err);
              callback.callbackWithParam(null);
            } else {
              if (session.isValid()) {
                callback.callbackWithParam(session.getRefreshToken());
              }
            }
          });else callback.callbackWithParam(null);
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.getCurrentUser().getSession(function (err, session) {
            if (err) {
              console.log("CognitoUtil: Can't set the credentials:" + err);
            } else {
              if (session.isValid()) {
                console.log("CognitoUtil: refreshed successfully");
              } else {
                console.log("CognitoUtil: refreshed but session is still not valid");
              }
            }
          });
        }
      }]);

      return CognitoUtil;
    }();

    CognitoUtil._REGION = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].region;
    CognitoUtil._IDENTITY_POOL_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].identityPoolId;
    CognitoUtil._USER_POOL_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].userPoolId;
    CognitoUtil._CLIENT_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientId;
    CognitoUtil._POOL_DATA = {
      UserPoolId: CognitoUtil_1._USER_POOL_ID,
      ClientId: CognitoUtil_1._CLIENT_ID
    };
    CognitoUtil = CognitoUtil_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], CognitoUtil);
    /***/
  },

  /***/
  "./src/app/service/ddb.service.ts":
  /*!****************************************!*\
    !*** ./src/app/service/ddb.service.ts ***!
    \****************************************/

  /*! exports provided: DynamoDBService */

  /***/
  function srcAppServiceDdbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamoDBService", function () {
      return DynamoDBService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _cognito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cognito.service */
    "./src/app/service/cognito.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aws-sdk/global */
    "./node_modules/aws-sdk/browser.js");
    /* harmony import */


    var aws_sdk_global__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var aws_sdk_clients_dynamodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! aws-sdk/clients/dynamodb */
    "./node_modules/aws-sdk/clients/dynamodb.js");
    /* harmony import */


    var aws_sdk_clients_dynamodb__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(aws_sdk_clients_dynamodb__WEBPACK_IMPORTED_MODULE_4__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /**
     * Created by Vladimir Budilov
     */


    var DynamoDBService =
    /*#__PURE__*/
    function () {
      function DynamoDBService(cognitoUtil) {
        _classCallCheck(this, DynamoDBService);

        this.cognitoUtil = cognitoUtil;
        console.log("DynamoDBService: constructor");
      }

      _createClass(DynamoDBService, [{
        key: "getAWS",
        value: function getAWS() {
          return aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__;
        }
      }, {
        key: "getLogEntries",
        value: function getLogEntries(mapArray) {
          console.log("DynamoDBService: reading from DDB with creds - " + aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__["config"].credentials);
          var params = {
            TableName: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ddbTableName,
            KeyConditionExpression: "userId = :userId",
            ExpressionAttributeValues: {
              ":userId": this.cognitoUtil.getCognitoIdentity()
            }
          };
          var clientParams = {};

          if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dynamodb_endpoint) {
            clientParams.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dynamodb_endpoint;
          }

          var docClient = new aws_sdk_clients_dynamodb__WEBPACK_IMPORTED_MODULE_4__["DocumentClient"](clientParams);
          docClient.query(params, onQuery);

          function onQuery(err, data) {
            if (err) {
              console.error("DynamoDBService: Unable to query the table. Error JSON:", JSON.stringify(err, null, 2));
            } else {
              // print all the movies
              console.log("DynamoDBService: Query succeeded.");
              data.Items.forEach(function (logitem) {
                mapArray.push({
                  type: logitem.type,
                  date: logitem.activityDate
                });
              });
            }
          }
        }
      }, {
        key: "writeLogEntry",
        value: function writeLogEntry(type) {
          try {
            var date = new Date().toString();
            console.log("DynamoDBService: Writing log entry. Type:" + type + " ID: " + this.cognitoUtil.getCognitoIdentity() + " Date: " + date);
            this.write(this.cognitoUtil.getCognitoIdentity(), date, type);
          } catch (exc) {
            console.log("DynamoDBService: Couldn't write to DDB");
          }
        }
      }, {
        key: "write",
        value: function write(data, date, type) {
          console.log("DynamoDBService: writing " + type + " entry");
          var clientParams = {
            params: {
              TableName: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ddbTableName
            }
          };

          if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dynamodb_endpoint) {
            clientParams.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dynamodb_endpoint;
          }

          var DDB = new aws_sdk_clients_dynamodb__WEBPACK_IMPORTED_MODULE_4__(clientParams); // Write the item to the table

          var itemParams = {
            TableName: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ddbTableName,
            Item: {
              userId: {
                S: data
              },
              activityDate: {
                S: date
              },
              type: {
                S: type
              }
            }
          };
          DDB.putItem(itemParams, function (result) {
            console.log("DynamoDBService: wrote entry: " + JSON.stringify(result));
          });
        }
      }]);

      return DynamoDBService;
    }();

    DynamoDBService.ctorParameters = function () {
      return [{
        type: _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]
      }];
    };

    DynamoDBService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]])], DynamoDBService);
    /***/
  },

  /***/
  "./src/app/service/user-login.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/service/user-login.service.ts ***!
    \***********************************************/

  /*! exports provided: UserLoginService */

  /***/
  function srcAppServiceUserLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoginService", function () {
      return UserLoginService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ddb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ddb.service */
    "./src/app/service/ddb.service.ts");
    /* harmony import */


    var _cognito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cognito.service */
    "./src/app/service/cognito.service.ts");
    /* harmony import */


    var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! amazon-cognito-identity-js */
    "./node_modules/amazon-cognito-identity-js/es/index.js");
    /* harmony import */


    var aws_sdk_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! aws-sdk/global */
    "./node_modules/aws-sdk/browser.js");
    /* harmony import */


    var aws_sdk_global__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(aws_sdk_global__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var aws_sdk_clients_sts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! aws-sdk/clients/sts */
    "./node_modules/aws-sdk/clients/sts.js");
    /* harmony import */


    var aws_sdk_clients_sts__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(aws_sdk_clients_sts__WEBPACK_IMPORTED_MODULE_6__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserLoginService =
    /*#__PURE__*/
    function () {
      function UserLoginService(ddb, cognitoUtil) {
        var _this4 = this;

        _classCallCheck(this, UserLoginService);

        this.ddb = ddb;
        this.cognitoUtil = cognitoUtil;

        this.onLoginSuccess = function (callback, session) {
          console.log("In authenticateUser onSuccess callback");
          aws_sdk_global__WEBPACK_IMPORTED_MODULE_5__["config"].credentials = _this4.cognitoUtil.buildCognitoCreds(session.getIdToken().getJwtToken()); // So, when CognitoIdentity authenticates a user, it doesn't actually hand us the IdentityID,
          // used by many of our other handlers. This is handled by some sly underhanded calls to AWS Cognito
          // API's by the SDK itself, automatically when the first AWS SDK request is made that requires our
          // security credentials. The identity is then injected directly into the credentials object.
          // If the first SDK call we make wants to use our IdentityID, we have a
          // chicken and egg problem on our hands. We resolve this problem by "priming" the AWS SDK by calling a
          // very innocuous API call that forces this behavior.

          var clientParams = {};

          if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].sts_endpoint) {
            clientParams.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].sts_endpoint;
          }

          var sts = new aws_sdk_clients_sts__WEBPACK_IMPORTED_MODULE_6__(clientParams);
          sts.getCallerIdentity(function (err, data) {
            console.log("UserLoginService: Successfully set the AWS credentials");
            callback.cognitoCallback(null, session);
          });
        };

        this.onLoginError = function (callback, err) {
          callback.cognitoCallback(err.message, null);
        };
      }

      _createClass(UserLoginService, [{
        key: "authenticate",
        value: function authenticate(username, password, callback) {
          var _this5 = this;

          console.log("UserLoginService: starting the authentication");
          var authenticationData = {
            Username: username,
            Password: password
          };
          var authenticationDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_4__["AuthenticationDetails"](authenticationData);
          var userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
          };
          console.log("UserLoginService: Params set...Authenticating the user");
          var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_4__["CognitoUser"](userData);
          console.log("UserLoginService: config is " + aws_sdk_global__WEBPACK_IMPORTED_MODULE_5__["config"]);
          cognitoUser.authenticateUser(authenticationDetails, {
            newPasswordRequired: function newPasswordRequired(userAttributes, requiredAttributes) {
              return callback.cognitoCallback("User needs to set password.", null);
            },
            onSuccess: function onSuccess(result) {
              return _this5.onLoginSuccess(callback, result);
            },
            onFailure: function onFailure(err) {
              return _this5.onLoginError(callback, err);
            },
            mfaRequired: function mfaRequired(challengeName, challengeParameters) {
              callback.handleMFAStep(challengeName, challengeParameters, function (confirmationCode) {
                cognitoUser.sendMFACode(confirmationCode, {
                  onSuccess: function onSuccess(result) {
                    return _this5.onLoginSuccess(callback, result);
                  },
                  onFailure: function onFailure(err) {
                    return _this5.onLoginError(callback, err);
                  }
                });
              });
            }
          });
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(username, callback) {
          var userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
          };
          var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_4__["CognitoUser"](userData);
          cognitoUser.forgotPassword({
            onSuccess: function onSuccess() {},
            onFailure: function onFailure(err) {
              callback.cognitoCallback(err.message, null);
            },
            inputVerificationCode: function inputVerificationCode() {
              callback.cognitoCallback(null, null);
            }
          });
        }
      }, {
        key: "confirmNewPassword",
        value: function confirmNewPassword(email, verificationCode, password, callback) {
          var userData = {
            Username: email,
            Pool: this.cognitoUtil.getUserPool()
          };
          var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_4__["CognitoUser"](userData);
          cognitoUser.confirmPassword(verificationCode, password, {
            onSuccess: function onSuccess() {
              callback.cognitoCallback(null, null);
            },
            onFailure: function onFailure(err) {
              callback.cognitoCallback(err.message, null);
            }
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          console.log("UserLoginService: Logging out");
          this.ddb.writeLogEntry("logout");
          this.cognitoUtil.getCurrentUser().signOut();
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated(callback) {
          if (callback == null) throw "UserLoginService: Callback in isAuthenticated() cannot be null";
          var cognitoUser = this.cognitoUtil.getCurrentUser();

          if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
              if (err) {
                console.log("UserLoginService: Couldn't get the session: " + err, err.stack);
                callback.isLoggedIn(err, false);
              } else {
                console.log("UserLoginService: Session is " + session.isValid());
                callback.isLoggedIn(err, session.isValid());
              }
            });
          } else {
            console.log("UserLoginService: can't retrieve the current user");
            callback.isLoggedIn("Can't retrieve the CurrentUser", false);
          }
        }
      }]);

      return UserLoginService;
    }();

    UserLoginService.ctorParameters = function () {
      return [{
        type: _ddb_service__WEBPACK_IMPORTED_MODULE_2__["DynamoDBService"]
      }, {
        type: _cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoUtil"]
      }];
    };

    UserLoginService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_ddb_service__WEBPACK_IMPORTED_MODULE_2__["DynamoDBService"], _cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoUtil"]])], UserLoginService);
    /***/
  },

  /***/
  "./src/app/service/user-parameters.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/service/user-parameters.service.ts ***!
    \****************************************************/

  /*! exports provided: UserParametersService */

  /***/
  function srcAppServiceUserParametersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserParametersService", function () {
      return UserParametersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _cognito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cognito.service */
    "./src/app/service/cognito.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserParametersService =
    /*#__PURE__*/
    function () {
      function UserParametersService(cognitoUtil) {
        _classCallCheck(this, UserParametersService);

        this.cognitoUtil = cognitoUtil;
      }

      _createClass(UserParametersService, [{
        key: "getParameters",
        value: function getParameters(callback) {
          var cognitoUser = this.cognitoUtil.getCurrentUser();

          if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
              if (err) console.log("UserParametersService: Couldn't retrieve the user");else {
                cognitoUser.getUserAttributes(function (err, result) {
                  if (err) {
                    console.log("UserParametersService: in getParameters: " + err);
                  } else {
                    callback.callbackWithParam(result);
                  }
                });
              }
            });
          } else {
            callback.callbackWithParam(null);
          }
        }
      }]);

      return UserParametersService;
    }();

    UserParametersService.ctorParameters = function () {
      return [{
        type: _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]
      }];
    };

    UserParametersService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]])], UserParametersService);
    /***/
  },

  /***/
  "./src/app/service/user-registration.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/service/user-registration.service.ts ***!
    \******************************************************/

  /*! exports provided: UserRegistrationService */

  /***/
  function srcAppServiceUserRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function () {
      return UserRegistrationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _cognito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cognito.service */
    "./src/app/service/cognito.service.ts");
    /* harmony import */


    var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! amazon-cognito-identity-js */
    "./node_modules/amazon-cognito-identity-js/es/index.js");
    /* harmony import */


    var aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aws-sdk/global */
    "./node_modules/aws-sdk/browser.js");
    /* harmony import */


    var aws_sdk_global__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserRegistrationService =
    /*#__PURE__*/
    function () {
      function UserRegistrationService(cognitoUtil) {
        _classCallCheck(this, UserRegistrationService);

        this.cognitoUtil = cognitoUtil;
      }

      _createClass(UserRegistrationService, [{
        key: "register",
        value: function register(user, callback) {
          console.log("UserRegistrationService: user is " + user);
          var attributeList = [];
          var dataEmail = {
            Name: 'email',
            Value: user.email
          };
          var dataGivenName = {
            Name: 'given_name',
            Value: user.given_name
          };
          var dataFamilyName = {
            Name: 'family_name',
            Value: user.family_name
          };
          var dataBirthdate = {
            Name: 'birthdate',
            Value: user.birthdate
          };
          attributeList.push(new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"](dataEmail));
          attributeList.push(new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"](dataGivenName));
          attributeList.push(new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"](dataFamilyName));
          attributeList.push(new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"](dataBirthdate));
          this.cognitoUtil.getUserPool().signUp(user.email, user.password, attributeList, null, function (err, result) {
            if (err) {
              callback.cognitoCallback(err.message, null);
            } else {
              console.log("UserRegistrationService: registered user is " + result);
              callback.cognitoCallback(null, result);
            }
          });
        }
      }, {
        key: "confirmRegistration",
        value: function confirmRegistration(username, confirmationCode, callback) {
          var userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
          };
          var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"](userData);
          cognitoUser.confirmRegistration(confirmationCode, true, function (err, result) {
            if (err) {
              callback.cognitoCallback(err.message, null);
            } else {
              callback.cognitoCallback(null, result);
            }
          });
        }
      }, {
        key: "resendCode",
        value: function resendCode(username, callback) {
          var userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
          };
          var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"](userData);
          cognitoUser.resendConfirmationCode(function (err, result) {
            if (err) {
              callback.cognitoCallback(err.message, null);
            } else {
              callback.cognitoCallback(null, result);
            }
          });
        }
      }, {
        key: "newPassword",
        value: function newPassword(newPasswordUser, callback) {
          console.log(newPasswordUser); // Get these details and call
          //cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, this);

          var authenticationData = {
            Username: newPasswordUser.username,
            Password: newPasswordUser.existingPassword
          };
          var authenticationDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["AuthenticationDetails"](authenticationData);
          var userData = {
            Username: newPasswordUser.username,
            Pool: this.cognitoUtil.getUserPool()
          };
          console.log("UserLoginService: Params set...Authenticating the user");
          var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"](userData);
          console.log("UserLoginService: config is " + aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__["config"]);
          cognitoUser.authenticateUser(authenticationDetails, {
            newPasswordRequired: function newPasswordRequired(userAttributes, requiredAttributes) {
              // User was signed up by an admin and must provide new
              // password and required attributes, if any, to complete
              // authentication.
              // the api doesn't accept this field back
              delete userAttributes.email_verified;
              cognitoUser.completeNewPasswordChallenge(newPasswordUser.password, requiredAttributes, {
                onSuccess: function onSuccess(result) {
                  callback.cognitoCallback(null, userAttributes);
                },
                onFailure: function onFailure(err) {
                  callback.cognitoCallback(err, null);
                }
              });
            },
            onSuccess: function onSuccess(result) {
              callback.cognitoCallback(null, result);
            },
            onFailure: function onFailure(err) {
              callback.cognitoCallback(err, null);
            }
          });
        }
      }]);

      return UserRegistrationService;
    }();

    UserRegistrationService.ctorParameters = function () {
      return [{
        type: _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]]
        }]
      }];
    };

    UserRegistrationService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"])), __metadata("design:paramtypes", [_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]])], UserRegistrationService);
    /***/
  },

  /***/
  "./src/app/utils/jwt.interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/utils/jwt.interceptor.ts ***!
    \******************************************/

  /*! exports provided: JwtInterceptor, IdTokenCallback */

  /***/
  function srcAppUtilsJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdTokenCallback", function () {
      return IdTokenCallback;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_cognito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/cognito.service */
    "./src/app/service/cognito.service.ts");
    /* harmony import */


    var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/user-login.service */
    "./src/app/service/user-login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var JwtInterceptor =
    /*#__PURE__*/
    function () {
      function JwtInterceptor(router, userService, cognitoUtil) {
        _classCallCheck(this, JwtInterceptor);

        this.router = router;
        this.userService = userService;
        this.cognitoUtil = cognitoUtil;
        this.userService.isAuthenticated(this);
        console.log("in Jwt Interceptor");
      }

      _createClass(JwtInterceptor, [{
        key: "isLoggedIn",
        value: function isLoggedIn(message, _isLoggedIn9) {
          if (!_isLoggedIn9) {
            this.router.navigate(['/home/login']);
          } else {
            this.cognitoUtil.getIdToken(new IdTokenCallback(this));
          }
        }
      }, {
        key: "intercept",
        value: function intercept(request, next) {
          // let currentUser = this.cognitoUtil.getCurrentUser().
          // if (currentUser && currentUser.token) {
          request = request.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(this.idToken)
            }
          }); // }
          // console.log(this.idToken)

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]
      }, {
        type: _service_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]
      }];
    };

    JwtInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"], _service_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]])], JwtInterceptor);

    var IdTokenCallback =
    /*#__PURE__*/
    function () {
      function IdTokenCallback(jwt) {
        _classCallCheck(this, IdTokenCallback);

        this.jwt = jwt;
      }

      _createClass(IdTokenCallback, [{
        key: "callback",
        value: function callback() {}
      }, {
        key: "callbackWithParam",
        value: function callbackWithParam(result) {
          this.jwt.idToken = result;
        }
      }]);

      return IdTokenCallback;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false,
      region: 'eu-west-1',
      identityPoolId: 'eu-west-1:0bf58654-f85a-4f19-97eb-27c63dab47df',
      userPoolId: 'eu-west-1_t8pZSNmmY',
      clientId: '5o27hpnvud73r9c0sh338v6pkb',
      rekognitionBucket: 'rekognition-pics',
      albumName: "usercontent",
      bucketRegion: 'eu-west-1',
      ddbTableName: 'LoginTrail',
      cognito_idp_endpoint: '',
      cognito_identity_endpoint: '',
      sts_endpoint: '',
      dynamodb_endpoint: '',
      s3_endpoint: '',
      apiUrl: 'https://cmfz9gue62.execute-api.eu-west-1.amazonaws.com/preprod'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./polyfills.ts */
    "./src/polyfills.ts");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/ */
    "./src/app/index.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app___WEBPACK_IMPORTED_MODULE_4__["AppModule"]);
    /***/
  },

  /***/
  "./src/polyfills.ts":
  /*!**************************!*\
    !*** ./src/polyfills.ts ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! core-js/es/symbol */
    "./node_modules/core-js/es/symbol/index.js");
    /* harmony import */


    var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var core_js_es_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! core-js/es/object */
    "./node_modules/core-js/es/object/index.js");
    /* harmony import */


    var core_js_es_object__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_object__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var core_js_es_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! core-js/es/function */
    "./node_modules/core-js/es/function/index.js");
    /* harmony import */


    var core_js_es_function__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_function__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! core-js/es/parse-int */
    "./node_modules/core-js/es/parse-int.js");
    /* harmony import */


    var core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! core-js/es/parse-float */
    "./node_modules/core-js/es/parse-float.js");
    /* harmony import */


    var core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var core_js_es_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! core-js/es/number */
    "./node_modules/core-js/es/number/index.js");
    /* harmony import */


    var core_js_es_number__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_number__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var core_js_es_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! core-js/es/math */
    "./node_modules/core-js/es/math/index.js");
    /* harmony import */


    var core_js_es_math__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_math__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var core_js_es_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! core-js/es/string */
    "./node_modules/core-js/es/string/index.js");
    /* harmony import */


    var core_js_es_string__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_string__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var core_js_es_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! core-js/es/date */
    "./node_modules/core-js/es/date/index.js");
    /* harmony import */


    var core_js_es_date__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_date__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var core_js_es_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! core-js/es/array */
    "./node_modules/core-js/es/array/index.js");
    /* harmony import */


    var core_js_es_array__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_array__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var core_js_es_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! core-js/es/regexp */
    "./node_modules/core-js/es/regexp/index.js");
    /* harmony import */


    var core_js_es_regexp__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_regexp__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var core_js_es_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! core-js/es/map */
    "./node_modules/core-js/es/map/index.js");
    /* harmony import */


    var core_js_es_map__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_map__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var core_js_es_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! core-js/es/set */
    "./node_modules/core-js/es/set/index.js");
    /* harmony import */


    var core_js_es_set__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_set__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! core-js/es/reflect */
    "./node_modules/core-js/es/reflect/index.js");
    /* harmony import */


    var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_reflect__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "./node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_14__);

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/psj03/challenge/challenge-accepted-cms/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map