import { ComponentChildren } from 'preact';

interface RouteProps {
  path?: string;
  default?: boolean;
  children: ComponentChildren;
}

export default function Route({ children, ...otherProps }: RouteProps): JSX.Element {
  return (
    <section {...otherProps}>
      {children}
    </section>
  );
}
