# Project Title: Mix Message Generator

## Description
In this project I built  a message genertaor program that uses javascript. Every time the program is run by a user, a new random output is generated.
The messages generated are drawn from arrays stored in an object.

Messages generated include health tips, life hacks and cybersecurity, which will be generated randomly.

## Other Info
+ The `generateRandomNumber()` function is meant to generate a random number based on the length of the given array.

    ```
    const generateRandomNumber = arr => Math.floor(Math.random() * arr.length) 
    ```
    For exaample, for an array `name = ['Jon', 'Pat', 'Oth']`, calling `generaterandomNumber(name)` will genrate a random number between 0 and 2.


+ `generateMessage()` takes a **key** (whnich has an array as its **value**) as argument and generates a random message from this array. This function depends on calling `generateRandomNumber()`
    ```
    const generateMessage = (objKey) => {
        return objKey[generateRandomNumber(objKey)]
    }
    ```
+ `generateMixMessages()` brings our program togther and generates randomly mixed messages.