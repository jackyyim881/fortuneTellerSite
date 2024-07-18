// Import the necessary modules and the function to test
import { FetchSpecialTitleData } from "../lib/scraper";
import fetchMock from "jest-fetch-mock";

// Enable fetch mocking
beforeAll(() => {
  fetchMock.enableMocks();
});

// Reset mocks before each test
beforeEach(() => {
  fetchMock.resetMocks();
});

// Test successful data fetching and parsing
test("fetchZodiacData successfully fetches and parses data", async () => {
  // Mock the fetch response
  fetchMock.mockResponseOnce(`<html>
    <span class="type">Gemini</span>
    <h3 class="tit">Curious and affectionate</h3>
    <span class="zt-time">May 21 - June 20</span>
  </html>`);

  // Expected result
  const expectedResult = {
    name: "Gemini",
    description: "Curious and affectionate",
    date: "May 21 - June 20",
  };

  // Call the function with a mock article
  const result = await fetchZodiacData("gemini");

  // Assertions
  expect(result).toEqual(expectedResult);
});

// Test error handling
test("fetchZodiacData handles errors gracefully", async () => {
  // Mock a fetch failure
  fetchMock.mockReject(new Error("Network error"));

  // Call the function with a mock article
  const result = await fetchZodiacData("gemini");

  // Assertions
  expect(result).toBeNull();
});
