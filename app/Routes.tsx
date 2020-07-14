/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch,  BrowserRouter, Link, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';

// Lazily load routes and code split with webpacck
// const LazyCounterPage = React.lazy(() =>
//   // import(/* webpackChunkName: "CounterPage" */ './containers/CounterPage')
//   import(/* webpackChunkName: "CounterPage" */ './containers/CustomersPage')
// );

// const CounterPage = (props: Record<string, any>) => (
//   <React.Suspense fallback={<h1>Loading...</h1>}>
//     <LazyCounterPage {...props} />
//   </React.Suspense>
// );
// const CustomersPage = (props: Record<string, any>) => (
//   <React.Suspense fallback={<h1>Loading...</h1>}>
//     <LazyCounterPage {...props} />
//   </React.Suspense>
// );

import CounterPage from './containers/CounterPage';
import CustomersPage from './containers/CustomersPage';
import ImportTablePage from './containers/ImportTablePage';
import TemplatePage from './containers/TemplatePage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.IMPORTTABLE} component={ImportTablePage} />
        <Route path={routes.TEMPLATEID} component={TemplatePage}/>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.CUSTOMERS} component={CustomersPage} />
      </Switch>
    </App>
  );
}

      // < BrowserRouter>
      //   <Route path={routes.HOME} component={HomePage} />
      //   <Route path={routes.COUNTER} component={CounterPage} />
      //   <Route path={routes.CUSTOMERS} component={CustomersPage} />
      // </ BrowserRouter>

      //       <Switch>
      //   <Route path={routes.HOME} component={HomePage} />
      //   <Route path={routes.COUNTER} component={CounterPage} />
      //   <Route path={routes.CUSTOMERS} component={CustomersPage} />
      // </Switch>

      //       <Switch>
      //   <Route path={routes.HOME}>
      //     <HomePage/>
      //   </Route>
      //   <Route path={routes.COUNTER}>
      //     <CounterPage/>
      //   </Route>
      //   <Route path={routes.CUSTOMERS}>
      //     <CustomersPage/>
      //   </Route>
      // </Switch>

      //       <BrowserRouter>
      //   <Route path={routes.HOME}>
      //     <HomePage/>
      //   </Route>
      //   <Route path={routes.COUNTER}>
      //     <CounterPage/>
      //   </Route>
      //   <Route path={routes.CUSTOMERS}>
      //     <CustomersPage/>
      //   </Route>
      // </BrowserRouter>
