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
            // Filter out odd numbers
            setTimeout(() => {
                const evenNumbers = numbers.filter(num => num % 2 === 0);
                updateOutput("output", evenNumbers.join(", "));
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        return new Promise((resolve) => {
            // Multiply even numbers by 2
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                updateOutput("output", multipliedNumbers.join(", "));
                resolve(multipliedNumbers);
            }, 2000);
        });
    })
    .catch(err => {
        console.error("An error occurred:", err);
    });
