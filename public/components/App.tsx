import { LocationProvider, Router } from 'preact-iso/router';
import Route from './Route';
import Home from '../pages/home/index';

export default function App(): JSX.Element {
  return (
    <LocationProvider>
      <Router>
        <Route path="/home"><Home/></Route>
        <Route path="/about"><div>about</div></Route>
        <Route default><div>default</div></Route>
      </Router>
    </LocationProvider>
  );
}

// import { LocationProvider, Router } from 'preact-iso/router';
// import lazy, { ErrorBoundary } from 'preact-iso/lazy';
// import Route from '../pages/Route';
// import Home from '../pages/home/index';
// import NotFound from '../pages/_404';
// import Header from '../header';

// const About = lazy(() => import('../pages/about/index'));

// export default function App(): JSX.Element {
//   return (
//     <LocationProvider>
//       <div className="app">
//         <Header />
//         <ErrorBoundary>
//           <Router>
//             <Route path="/"><Home/></Route>
//             <Route path="/about"><About/></Route>
//             <Route default><NotFound/></Route>
//           </Router>
//         </ErrorBoundary>
//       </div>
//     </LocationProvider>
//   );
// }
