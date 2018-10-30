var HelloTypeScript = (function () {
    function HelloTypeScript(message) {
        this.helloString = message;
    }
    HelloTypeScript.prototype.hello = function () {
        return this.helloString;
    };
    return HelloTypeScript;
}());
var myName = 'zhang san';
var myAge = 18;
var sentence = "Hello, my name is " + myName + ". I'll be " + myAge + " years old next month";
var helloTypeScript = new HelloTypeScript(sentence);
document.body.innerHTML = helloTypeScript.hello();
//# sourceMappingURL=hello.js.map