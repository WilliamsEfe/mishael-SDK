// This file describes the structure of a "Movie" data object within the SDK

export interface Movie {
  _id: string; // The unique identifier for the movie
  name: string; // The name or title of the movie
  runtimeInMinutes: number; // The duration of the movie in minutes
  budgetInMillions: number; // The budget of the movie in millions of dollars
}