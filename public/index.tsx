import hydrate from 'preact-iso/hydrate';
import App from './components/App';

hydrate(<App />);

// eslint-disable-next-line import/prefer-default-export
export async function prerender(data: JSX.IntrinsicAttributes): Promise<any> {
  // eslint-disable-next-line no-shadow
  const { default: prerender } = await import('preact-iso/prerender');
  // eslint-disable-next-line no-return-await
  return await prerender(<App {...data} />);
}
