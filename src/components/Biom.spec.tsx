import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Biom } from './Biom';

describe('test Biom component', () => {
  beforeEach(() => {
    render(<Biom />);
  });

  test('table should have th: Name', () => {
    expect(screen.getAllByText('Name')[0]).toBeDefined();
  });
  test('table should have th: Tax ID', () => {
    expect(screen.getAllByText('Tax ID')[0]).toBeDefined();
  });
  test('table should have th: Abundance score', () => {
    expect(screen.getAllByText('Abundance score')[0]).toBeDefined();
  });
  test('table should have th: Relative abundance', () => {
    expect(screen.getAllByText('Relative abundance')[0]).toBeDefined();
  });
  test('table should have th: Unique matches frequency', () => {
    expect(screen.getAllByText('Unique matches frequency')[0]).toBeDefined();
  });
});
