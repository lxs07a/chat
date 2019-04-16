# chat

> A chat app originally developed for Reynen Court BV where users register first and then join the open chat channel.


## About

The app is written in JavaScript. <br>
Promises are used to run all the calls in parallel, simultaneously instead of sequentially. <br>
Arrow functions are used to make the code more concise and simplify function scoping.<br>
Code splitting is used to reuse components and to load only the necessary modules at runtime.
<br><br>
On the back end Node.js is used for this real-time communication and collaboration tool due to its efficiency in handling simultaneous connections and distribution of messages across channels and its excellent ratio between functional complexity, scalability, and speed of development.
<br><br>
The Feathers micro-service web framework is selected as a scalable REST and realtime API layer for its implementation of services and hooks used in authentication, authorization, and processing of messages. 
<br><br>
Socket.io is used to enable realtime, bi-directional communication between the web client and server due to its speed and reliability.
<br><br>
JWT (JSON Web Token) was chosen for authentication as a compact and self-contained way for securely transmitting information.
<br><br>
The npm package NeDB was chosen as a lightweight version of a database (JavaScript + MongoDB API) to persist messages without the need to install a complete database solution.
<br><br>
On the front end, React was selected for user interface due to its speed and scalability. Bootstrapped with 'create-react-app' npm package.

<br><br>
Style decisions:<br>

-Simplicity as one or the requirements; <br>
-Client's logo, favicon, and colors are used in design; <br>
-Gravatar that is connected to the user's email is automatically grabbed instead of asking users to upload an image<br> 



## Getting Started

1. [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) should be installed.
2. Installing dependencies

    ```
    cd path/to/chat; npm install
    ```

3. Starting the app

    ```
    cd path/to/chat/backend; npm start
    ```
    ```
    cd path/to/chat; npm start
    ```

## Testing

Running `npm test` will run the tests in the `test/` directory.


## License

Copyright (c) 2019

Licensed under the [MIT license](LICENSE).
