# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a markdown format with the flavor of JavaScript. Both HTML and JSX create the structure of the application you are trying to work with. The main syntax difference between HTML and JSX is using the '<>' tag. Inside of that tag is what will be used to display onto the application.
For example, we shall use the App.js function in order to show it's application:

````JavaScript
const App = () => {
    return (
        <>
            <h1>Hello World</h1>
        <>
    )
}

````

Researched answer: JSX is a markdown syntax extension to JavaScript. JSX is the building block of React components and what allows React to display as a user interface. The syntax difference between JSX and HTML is that it uses 'className' instead of 'class' because there is already a method in JavaScript named 'class'.

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn is a package manager that gives the React application its functionality, as well as Jest. When running the command $yarn create react-app; the terminal will create a local server in order to show the visual aspect of the DOM and the virtual DOM on a web browser

Researched answer: Yarn is a package manager that was created by Facebook in 2016. A package manager ensures that dependency files are able to work together. In terms of React, yarn gives the command that creates the file structure and organizes those files for a React app.

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function in JavaScript is when we are not passing in a specific parameter as an argument in a function.
For example, of an anonymous function: 

````JavaScript
const test = () => {
    return
}

//example of a regular function

const test = (parameter) => {
    return parameter
}
````

Researched answer: An anonymous  function is a function that does not have a name associated with it. Anonymous functions are often used as an argument inside of a higher order function.

4. What is the difference between state values and props in React?

Your answer: State values are variables that can be used to act dynamically with the user. Props are used as arguments that interact with components of a React app.

Researched answer: State values store data that can determine how the components render and behave. To make state dynamic, you would use useState() that changes as the user interacts with the React app. Props pass information from one component to another, the difference is that props cannot be changed.

5. What is the DOM?

Your answer: The DOM stands for Document Object Model and it is what the user is interacting with as well as tracking the DOM events.

Researched answer: The Document Object Model is the visual representation of the code. 

6. STRETCH: Which is the difference between a div and a span?

Your answer: The difference between a div and a span is that while the div and the span can be used to display on the web browser, the span is a more neutral tag that is specifically used in JSX

Researched answer: The difference is that a div is a block level element while a span is an inline level element. A block level element occupies the entire horizontal space of its parent element and the vertical space that is equal to the height of its contents. An inline level element is displayed in a line. They do not force the text after it to form a new line.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-oriented programming is a computer programming model that organizes software design around data, or objects, rather than functions and logic.

2. Ruby: Ruby is an Object-oriented programming language that is a general purpose, interpreted, dynamically-typed, server-side scripting language

3. Implicit return: An implicit return means there is no 'return' specified the value of the last line of a method that is automatically returned.

4. Ruby blocks: A Ruby block is an anonymous function that is passed to a method to determine the outcome. Blocks are typically defined with the Ruby keywords 'do' and 'end'.

5. Ruby hashes: A Ruby hash is a dictionary-like container for unique keys and their corresponding values.
