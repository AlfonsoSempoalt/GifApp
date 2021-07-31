import { describe, expect } from '@jest/globals';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('tests to useFetchGifs', () => {
  test('should return the initial state of the custom hook', async () => {
    const category = 'one piece';
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data: gifs, loading } = result.current;
    await waitForNextUpdate();
    expect(gifs).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('should return an array of gifs and loading=false', async () => {
    const category = 'one piece';
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { data: gifs, loading } = result.current;
    const REQUESTSIZE = 15;

    expect(loading).toBeFalsy();
    expect(gifs.length).toBe( REQUESTSIZE );
  });
});
