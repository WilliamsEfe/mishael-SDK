import axios, { AxiosInstance } from 'axios';
import { MovieApi } from '../api/movieApi';

const mockAxios = {
  interceptors: {
    response: {
      use: jest.fn(),
    },
  },
} as unknown as AxiosInstance;

mockAxios.get = jest.fn();

jest.spyOn(axios, 'create').mockReturnValue(mockAxios);

describe('MovieApi - getMovieById', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns a movie', async () => {
    // Arrange
    const movieId = '5cd95395de30eff6ebccde5d';
    const movie = { _id: movieId, name: 'The Lord of the Rings', runtimeInMinutes: 201, budgetInMillions: 93 };
    (mockAxios.get as jest.Mock).mockResolvedValueOnce({ data: movie });
    const movieApi = new MovieApi('fake_key');

    // Act
    const result = await movieApi.getMovieById(movieId);

    // Assert
    expect(result).toEqual(movie);
    expect(mockAxios.get).toHaveBeenCalledWith(`https://the-one-api.dev/v2/movie/${movieId}`);
  });
});
