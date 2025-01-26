//your JS code here. If required.

function myPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

function updateOutput(id, content) {
    const outputElement = document.getElementById(id);
    if (outputElement) {
        outputElement.textContent = content;
    }
}

myPromise()
    .then(numbers => {
        return new Promise((resolve) => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            setTimeout(() => {
                updateOutput("output", evenNumbers.join(", "));
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        return new Promise((resolve) => {
            const multipliedNumbers = evenNumbers.map(num => num * 2);
            setTimeout(() => {
                updateOutput("output", multipliedNumbers.join(", "));
                resolve(multipliedNumbers);
            }, 2000);
        });
    })
    .catch(err => {
        console.error("An error occurred:", err);
    });
