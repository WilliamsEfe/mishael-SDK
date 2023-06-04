import { MovieApi } from './api/movieApi';
import { QuoteApi } from './api/quoteApi';

// This class combines the functionality of MovieApi and QuoteApi
export class LordOfTheRingsSDK {
  public movie: MovieApi;  // Instance of MovieApi class, exposes movie related methods
  public quote: QuoteApi;  // Instance of QuoteApi class, exposes quote related methods

  constructor(apiKey?: string) {
    // Create instances of MovieApi and QuoteApi when creating a new LordOfTheRingsSDK
    // Optionally pass apiKey to the instances of MovieApi and QuoteApi
    this.movie = new MovieApi(apiKey);
    this.quote = new QuoteApi(apiKey);
  }
}
