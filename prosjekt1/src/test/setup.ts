import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, graphql, http } from 'msw'

afterEach(() => {
  cleanup();
});


const pokemon = {
  number: 2,
  name: 'Butterfree',
  images: {
    small: 'https://example.com/small.png',
    large: 'https://example.com/large.png',
  },
};

export const restHandlers = [
  http.get('https://api.pokemontcg.io/v2/cards?q=set.id:ex6 number:2&pageSize=1', () => {
    return HttpResponse.json(pokemon)
  }),
]

const graphqlHandlers = [
  graphql.query('ListPosts', () => {
    return HttpResponse.json(
      {
        data: { pokemon },
      },
    )
  }),
]

const server = setupServer(...restHandlers, ...graphqlHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())