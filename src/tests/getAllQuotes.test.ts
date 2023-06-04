import axios, { AxiosInstance } from 'axios';
import { QuoteApi } from '../api/quoteApi';

const mockAxios = {
  interceptors: {
    response: {
      use: jest.fn(),
    },
  },
} as unknown as AxiosInstance;

mockAxios.get = jest.fn();

jest.spyOn(axios, 'create').mockReturnValue(mockAxios);

describe('QuoteApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getAllQuotes returns quotes', async () => {
    // Arrange
    const quotes = [{ _id: '1', dialog: 'Quote 1' }, { _id: '2', dialog: 'Quote 2' }];
    (mockAxios.get as jest.Mock).mockResolvedValueOnce({ data: quotes });
    const quoteApi = new QuoteApi('fake_key');

    // Act
    const result = await quoteApi.getAllQuotes();

    // Assert
    expect(result).toEqual(quotes);
    expect(mockAxios.get).toHaveBeenCalledWith('https://the-one-api.dev/v2/quote', { params: {} });
  });
});
