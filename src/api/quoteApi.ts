import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ListResponse } from '../models/listResponse';
import { Quote } from '../models/quote';
const dotenv = require('dotenv');

dotenv.config()

export class QuoteApi {
  private baseUrl = process.env.BASE_URL; // Base URL of the API
  private axiosInstance: AxiosInstance;

  constructor(apiKey?: string) {
    // Initialize axios with optional header
    this.axiosInstance = axios.create({
      headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : undefined,
    });

    // Setup interceptors for handling response and errors
    this.initializeInterceptors();
  }

  private initializeInterceptors() {
    this.axiosInstance.interceptors.response.use(
      this.handleResponse,
      this.handleApiError
    );
  }

  private handleResponse<T>(response: AxiosResponse<T>): AxiosResponse<T> {
    // Return the response if it was successful
    return response;
  }

  private handleApiError(error: any) {
    // Extract error message or use a default one
    const errorMessage = error.response?.data?.message || 'Unknown API error';
    // Throw a new error with the useful message
    throw new Error('API Error: ' + errorMessage);
  }

  async getQuotesForMovie(
    movieId: string,
    page?: number,
    pageSize?: number
  ): Promise<ListResponse<Quote>> {
    // Endpoint for fetching quotes for a specific movie
    const url = `${this.baseUrl}/movie/${movieId}/quote`;

    // Optional pagination parameters
    const params = {
      page,
      pageSize,
    };

    try {
      // Fetch quotes for a specific movie
      const response = await this.axiosInstance.get<ListResponse<Quote>>(url, { params });

      // Return the quotes
      return response.data;
    } catch (error) {
      // Handle any errors
      const errorMessage = (error as Error).message;
      throw new Error('Failed to get quotes for movie: ' + errorMessage);
    }
  }

  async getAllQuotes(page?: number, pageSize?: number): Promise<ListResponse<Quote>> {
    // Endpoint for fetching all quotes
    const url = `${this.baseUrl}/quote`;

    // Optional pagination parameters
    const params = {
      page,
      pageSize,
    };

    try {
      // Fetch all quotes
      const response = await this.axiosInstance.get<ListResponse<Quote>>(url, { params });

      // Return the quotes
      return response.data;
    } catch (error) {
      // Handle any errors
      const errorMessage = (error as Error).message;
      throw new Error('Failed to get all quotes: ' + errorMessage);
    }
  }

  async getQuoteById(id: string): Promise<Quote> {
    // Endpoint for fetching a quote by id
    const url = `${this.baseUrl}/quote/${id}`;

    try {
      // Fetch the quote by id
      const response = await this.axiosInstance.get<Quote>(url);

      // Return the quote
      return response.data;
    } catch (error) {
      // Handle any errors
      const errorMessage = (error as Error).message;
      throw new Error('Failed to get quote by ID: ' + errorMessage);
    }
  }
}
