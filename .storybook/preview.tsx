import type { Preview } from '@storybook/react';
import { 
  DocsContainer, 
  DocsContext, 
  Title, 
  Subtitle, 
  Description, 
  Primary, 
  Controls, 
  Stories, 
} from '@storybook/blocks';
import { neonTheme } from './neonTheme';
// @ts-ignore: side-effect import of CSS without type declarations
import '../src/styles.css';

function GlobalBanner() {
  return (
    <div
      style={{
        padding: '48px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0 100px 0px 100px',
        marginBottom: '32px',
        minHeight: '200px',
        color: 'white',
        background: 'linear-gradient(135deg,#0F172A,#4F46E5,#6D5DF6)',
      }}
    >
      <Title />
    </div>
  );
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: { rules: [{ id: 'color-contrast', enabled: true }] },
    },
    backgrounds: {
      default: 'Neon',
      values: [
        { name: 'Neon', value: '#080a12' },
        { name: 'Raised', value: '#101421' },
        { name: 'Subtle', value: '#171d2d' },
      ],
    },
    docs: {
      theme: neonTheme,
      page: () => (
        <>
          <GlobalBanner />
          <div className='doc-content'>
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories />
          </div>
        </>
      ),
    },
    layout: 'centered',
  },
};

export default preview;
