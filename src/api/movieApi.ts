import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Movie } from '../models/movie';
const dotenv = require('dotenv');

dotenv.config()

export class MovieApi {
  private baseUrl = process.env.BASE_URL; // URL of the API
  private axiosInstance: AxiosInstance;

  constructor(apiKey?: string) {
    // Axios instance initialization
    this.axiosInstance = axios.create({
      // Setting the API key in the headers
      headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : undefined,
    });

    // Initialize response and error interceptors
    this.initializeInterceptors();
  }

  private initializeInterceptors() {
    // Handle response and errors globally for all requests made with this instance
    this.axiosInstance.interceptors.response.use(
      this.handleResponse,
      this.handleApiError
    );
  }

  private handleResponse<T>(response: AxiosResponse<T>): AxiosResponse<T> {
    // Return the response object directly if the request was successful
    return response;
  }

  private handleApiError(error: any) {
    // Extract the error message from the error response or use a default error message
    const errorMessage = error.response?.data?.message || 'Unknown API error';
    // Throw a new error with a meaningful message
    throw new Error('API Error: ' + errorMessage);
  }

  async getAllMovies(page?: number, pageSize?: number): Promise<Movie[]> {
    // URL for the movie endpoint
    const url = `${this.baseUrl}/movie`;

    // Optional parameters for pagination
    const params = {
      page,
      pageSize,
    };

    try {
      // Make a GET request to the movie endpoint
      const response = await this.axiosInstance.get<Movie[]>(url, { params });

      // Return the list of movies
      return response.data;
    } catch (error) {
      // Handle any errors that occur during the request
      const errorMessage = (error as Error).message;
      throw new Error('Failed to get movies: ' + errorMessage);
    }
  }

  async getMovieById(id: string): Promise<Movie> {
    // URL for the movie endpoint with the specified ID
    const url = `${this.baseUrl}/movie/${id}`;

    try {
      // Make a GET request to the movie endpoint for the specified ID
      const response = await this.axiosInstance.get<Movie>(url);

      // Return the movie data
      return response.data;
    } catch (error) {
      // Handle any errors that occur during the request
      const errorMessage = (error as Error).message;
      throw new Error('Failed to get movie by ID: ' + errorMessage);
    }
  }
}
