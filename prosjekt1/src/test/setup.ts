import '@testing-library/jest-dom'; // Import custom matchers from Testing Library
import { vi } from 'vitest';

// Example: Mocking a global function
globalThis.fetch = vi.fn();

// Example: Mocking a commonly used module
vi.mock('axios', () => ({
  get: vi.fn(),
  post: vi.fn(),
}));