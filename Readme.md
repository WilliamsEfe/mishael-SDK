# Lord of the Rings SDK

The Lord of the Rings SDK is a software development kit that provides easy access to the Lord of the Rings API. It simplifies the consumption of movie and quote data from the API, allowing developers to integrate Lord of the Rings content into their applications more efficiently. This SDK is written in TypeScript and can be used in any TypeScript or JavaScript project.


## Features

 - Get All Movies
 - Get Movies By ID
 - Get Quotes for Movies
 - Get All Quotes
 - Get Quotes By ID

## Installation

To use this SDK, you need to have Node.js and npm installed. This SDK supports Node.js version 12 and above

1. First, install the `mishael_lotr_sdk` npm package:Run the following command: 
	`npm install mishael_lotr_sdk`
2. Create an `.env` file in your project directory and add your API key and the base URL: 
`API_KEY=your-api-key`
`BASE_URL=https://the-one-api.dev/v2`

## Usage

To use the Lord of the Rings SDK in your project, follow these steps:

1. Import the `LordOfTheRingsSDK` class in your code: 

	`import { LordOfTheRingsSDK } from  "mishael_lotr_sdk/src";`

2. Create an instance of `LordOfTheRingsSDK` : 

	`const  sdk = new  LordOfTheRingsSDK(apiKey);`
	Note: You need to get the apikey from https://the-one-api.dev/ to initialise the library
	
3. Use the `movie` and `quote` properties to access the available API methods like: 
`const movies = await  sdk.movie.getAllMovies();` ,
`const  movie = await  sdk.movie.getMovieById(movieId);` ,
`const  quotes = await  sdk.quote.getAllQuotes();` ,
`const  quotesforMovie = await  sdk.quote.getQuotesForMovie(movieId);` ,
`const  quotesbyId = await  sdk.quote.getQuoteById(quoteId);` 

4. Handle the returned data or any potential errors.

## API Methods

The Lord of the Rings SDK provides the following API methods:

### Movie API

-   `getAllMovies()`: Retrieves all movies.
-   `getMovieById(id: string)`: Retrieves a specific movie by ID.

### Quote API

-   `getAllQuotes()`: Retrieves all quotes.
-   `getQuotesForMovie(movieId: string)`: Retrieves quotes for a specific movie.
-   `getQuoteById(id: string)`: Retrieves a specific quote by ID.


## Authentication

Authentication or an API key is not required to access some of the endpoints of the Lord of the Rings API like `/books` and `/book/{id}` . However, with other endpoints, like `/movie` , `/movie/{id}`, `/movie/{id}/quote` , `/quote` , `/quote/{id}` , the API enforces authentication. Hence, an API key is provided during the initialisation of the `LordOfTheRingsSDK` instance:

    const apiKey = 'YOUR_API_KEY';
    const sdk = new LordOfTheRingsSDK(apiKey);

Make sure to obtain a valid API key from the Lord of the Rings API, as the authentication is required.

NOTE: There's a popular error that is gotten due to the fact that access for authenticated users to all endpoints of the lord of the rings API being _limited_  to 100 requests every 10 minutes. This is shown below:

![enter image description here](https://res.cloudinary.com/dtvv1oyyj/image/upload/v1685838054/Screenshot_2023-06-04_at_01.19.17.png)



## Example

You can find more examples in the `example.ts` file in this repository. These examples demonstrate how to use different SDK methods to interact with the Lord of the Rings API.

## Contributing 

Contributions to the Lord of the Rings SDK are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.
