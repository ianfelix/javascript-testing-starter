import { describe, test, it, expect } from 'vitest';
import { factorial, fizzBuzz, max } from '../src/intro';

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2, 1)).toBe(2);
  });

  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });

  it('should return the first argument if arguments are equal', () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe('fizzBuzz', () => {
  it('should return FizzBuzz if it is divisible by three and five', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it('should return Fizz if it is only divisible by three', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(12)).toBe('Fizz');
  });

  it('should return Buzz if it is only divisible by five', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  it('should return the argument as a string if it is not divisible by three or five', () => {
    expect(fizzBuzz(2)).toBe('2');
    expect(fizzBuzz(4)).toBe('4');
    expect(fizzBuzz(8)).toBe('8');
  });
});

describe('factorial', () => {
  it('should return 1 given 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 given 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 2 given 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('should return 6 given 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it('should return undefined given a negative number', () => {
    expect(factorial(-1)).toBeUndefined;
  });
});
