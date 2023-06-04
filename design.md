# Overview
![Architectural diagram
](https://res.cloudinary.com/dtvv1oyyj/image/upload/v1685831312/archi.drawio_1.png)

The LordOfTheRingsSDK is designed to provide an easy-to-use interface for developers to interact with the Lord of the Rings API. The SDK provides classes and methods that abstract the API endpoints, providing direct methods to fetch all movies, fetch a movie by ID, fetch all quotes, fetch quotes by movie ID, and fetch a quote by ID.

The SDK is divided into three main components:

1.  LordOfTheRingsSDK (Main SDK Class)
2.  MovieApi (Movie API Class)
3.  QuoteApi (Quote API Class)


# SDK Design Architecture


### LordOfTheRingsSDK (Main SDK Class)

This is the central class of the SDK and acts as the primary interface for the user. It creates instances of the `MovieApi` and `QuoteApi` classes using an API key provided by the user.

It contains two public properties:

-   `movie` of type `MovieApi`
-   `quote` of type `QuoteApi`

These properties allow the user to call methods directly related to movies and quotes.

### MovieApi (Movie API Class)

The `MovieApi` class encapsulates interactions with movie-related endpoints of the API. It utilizes the `axios` library for making HTTP requests and includes methods for getting all movies and getting a movie by its ID.

### QuoteApi (Quote API Class)

The `QuoteApi` class encapsulates interactions with quote-related endpoints of the API. Like the `MovieApi` class, it utilizes the `axios` library for making HTTP requests. It includes methods for getting all quotes, getting quotes for a specific movie, and getting a quote by its ID.

### Models
This module contains TypeScript interfaces that describe the data returned by the API.

## Interactions and Flow

The user interacts with the SDK by creating an instance of the `LordOfTheRingsSDK` class with their API key, and then calling methods on the `movie` and `quote` properties of that instance.`

## Error Handling

Both the `MovieApi` and `QuoteApi` classes use Axios interceptors to handle API errors. If an API call fails, the error is caught and a custom Error object is thrown with a useful error message.

**Design Decision**: The use of Axios interceptors allows us to centralize the error handling logic. This prevents the duplication of error handling code and makes the SDK easier to maintain.

## Environment Variables
The SDK uses `.env` files for managing environment variables. This allows users to configure the SDK with their API key and the base URL of the API.

**Design Decision**: Using environment variables for configuration allows the SDK to be used in a variety of environments without requiring code changes. It also provides a secure way to handle sensitive information such as API keys.

## Usage

The SDK is designed to be simple to use. After instantiating the `LordOfTheRingsSDK` class with an API key, users can call methods directly on the `movie` and `quote` properties of the class to interact with the API.

## Future Enhancements
While this SDK currently only supports the Movie and Quote endpoints, it is designed to be easily extensible to support additional endpoints in the future.

For example, to add support for a new endpoint (e.g., `/character`), one would need to:

1.  Create a new class (e.g., `CharacterApi`) similar to `MovieApi` and `QuoteApi` that interacts with the `/character` endpoint.
    
2.  Add a new property to the `LordOfTheRingsSDK` class that provides access to the `CharacterApi`.
    
3.  Create new interfaces in the `models` module that describe the data returned by the `/character` endpoint.
    

With this design, the SDK can be easily extended to provide a comprehensive interface to the Lord of The Rings API.

**Potential Enhancement**: 

 1. Currently, the `MovieApi` and `QuoteApi` classes contain some duplicated code (e.g., for setting up the Axios instance and interceptors). In the future, this code could be abstracted into a base class that all API classes inherit from. This would further reduce duplication and improve maintainability.
 2. The SDK could provide more advanced features such as automatic retry of failed requests, rate limiting, or caching of responses. These features would make the SDK more robust and efficient.
