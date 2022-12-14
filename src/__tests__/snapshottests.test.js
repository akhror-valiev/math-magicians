import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';
import Home from '../components/Home';

describe('Snapshot for Calculator and Home', () => {
  it('Snapshot should match component render', () => {
    const mycalculator = render(<Calculator />);
    expect(mycalculator).toMatchSnapshot();
  });

  it('Snapshot should match component render', () => {
    const homeview = render(<Home />);
    expect(homeview).toMatchSnapshot();
  });
});
