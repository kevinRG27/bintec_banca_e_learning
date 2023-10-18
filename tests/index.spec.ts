import { run } from '../src/index';

beforeEach(async () => {
  jest.resetAllMocks();
});

describe('index.ts', () => {
  describe('run()', () => {
    it('Successful', async () => {
      await expect(run()).resolves.toBeUndefined();
    });
  });
});
