// This file describes the structure of a "Quote" data object within the SDK

export interface Quote {
  id: string; // The unique identifier for the quote
  dialogue: string; // The actual text of the quote
  movie: string; // The ID of the movie the quote is associated with
}
