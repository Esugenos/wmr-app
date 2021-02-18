import { useLoc } from 'preact-iso/router';

export default function Header(): JSX.Element {
  const { url } = useLoc();
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/error">Error</a>
      </nav>
      <label>
        <input readOnly value={url} ref={(c) => c && (c.size = c.value.length)} />
      </label>
    </header>
  );
}
