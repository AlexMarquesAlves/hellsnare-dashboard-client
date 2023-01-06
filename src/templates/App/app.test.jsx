import { screen } from '@testing-library/react';
import { App } from '.';
import { renderTheme } from '../../styles/render-theme';

it('should render heading', () => {
  renderTheme(<App>Test</App>);
  expect(screen.getByRole('heading', { name: 'Test' })).toMatchSnapshot();
});
