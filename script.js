//your JS code here. If required.
// script.js

function delayHelloWorld() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000); // 1 second delay
    });
}

delayHelloWorld().then((message) => {
    const outputElement = document.getElementById("output");
    outputElement.textContent = message;
});
