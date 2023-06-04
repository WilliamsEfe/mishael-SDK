// Import the SDK class
import { LordOfTheRingsSDK } from './src/index';
// Import the dotenv package to be able to read .env file
const dotenv = require('dotenv');

// Load .env file into process.env
dotenv.config()

// Extract API key from environment variables
const apiKey = process.env.API_KEY; 

// Create an instance of SDK using the API key
const sdk = new LordOfTheRingsSDK(apiKey);

// Function that calls various methods of SDK to demonstrate its usage
async function runSDK() {
  try {
    // Fetch all movies
    const movies = await sdk.movie.getAllMovies();
    console.log('All Movies:', movies);

    // Movie ID and Quote ID to fetch specific movie and quote
    const movieId = '5cd95395de30eff6ebccde5d'; 
    const quoteId = '5cd96e05de30eff6ebcce7ef'; 

    // Fetch movie by ID
    const movie = await sdk.movie.getMovieById(movieId);
    console.log('Movie by ID:', movie);

    // Fetch all quotes
    const quotes = await sdk.quote.getAllQuotes();
    console.log('All Quotes:', quotes);

    // Fetch quotes for a specific movie
    const quotesforMovie = await sdk.quote.getQuotesForMovie(movieId);
    console.log('Quotes for Movie:', quotesforMovie);

    // Fetch quote by ID
    const quotesbyId = await sdk.quote.getQuoteById(quoteId);
    console.log('Quotes by Quote ID:', quotesbyId);
  } catch (error) {
    // If an error occurs while calling the SDK, log the error
    console.error('An error occurred:', error);
  }
}

// Run the SDK demonstration function
runSDK();
