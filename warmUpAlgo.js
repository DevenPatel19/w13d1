class UtilClass {
    // class declaration
    greetMessage() {
        return "Hi";
    }
    totalCount(numArr) {
        let sum = 0;
        for (var i = 0; i < numArr.length; i++) {
            sum += numArr[i];
        }
        return sum;
    }

    totalCount2(numArr) {
        let sum = 0;
        for (const element of numArr) {
            sum += element;
        }
        return sum;
    }

    printMessages(msgArr) {
        // Given an array of String, write a function to print messages
        for (var i = 0; i < msgArr.length; i++) {
            console.log(msgArr[i]);
        }
    }
}
// outside the class (similar to main method in Javas
var messagesPerDay = [5, 8, 6];
var messages = [
    "Please call back!",
    "Make sure you install jdk",
    "DO NOT INSTALL VS CODE EXTENSION!",
];

// instantiate the class to use
var newBot = new UtilClass(); // instantiate the class
console.log(newBot.greetMessage());
console.log(newBot.totalCount(messagesPerDay));
newBot.printMessages(messages);
