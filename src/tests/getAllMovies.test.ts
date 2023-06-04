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

describe('MovieApi - getAllMovies', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns movies', async () => {
    // Arrange
    const movies = [{ _id: '1', name: 'Movie 1', runtimeInMinutes: 120, budgetInMillions: 200 }];
    (mockAxios.get as jest.Mock).mockResolvedValueOnce({ data: movies });
    const movieApi = new MovieApi('fake_key');

    // Act
    const result = await movieApi.getAllMovies();

    // Assert
    expect(result).toEqual(movies);
    expect(mockAxios.get).toHaveBeenCalledWith('https://the-one-api.dev/v2/movie', { params: {} });
  });
});
