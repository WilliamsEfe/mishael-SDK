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

  it('getQuoteById returns a quote', async () => {
    // Arrange
    const quoteId = '5cd96e05de30eff6ebcce7ef';
    const quote = { _id: quoteId, dialog: 'Quote from the movie' };
    (mockAxios.get as jest.Mock).mockResolvedValueOnce({ data: quote });
    const quoteApi = new QuoteApi('fake_key');

    // Act
    const result = await quoteApi.getQuoteById(quoteId);

    // Assert
    expect(result).toEqual(quote);
    expect(mockAxios.get).toHaveBeenCalledWith(`https://the-one-api.dev/v2/quote/${quoteId}`);
  });
});
