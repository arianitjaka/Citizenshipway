import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer/Footer';
import { IntlProvider } from 'react-intl';
import { translate } from './translation/translate';
import { useSelector } from 'react-redux';
import Loader from './Components/Shared/Loader/Loader';
const Default = lazy(() => import("./Layouts/Default"));



function App() {
  const language = useSelector((state) => state.language.language);
  return (
    <Suspense fallback={Loader()}>
      <div className="App">
        <IntlProvider
          locale={language}
          formats={{ number: 'en' }}
          messages={translate[language]}
        >

          <Switch>
            <Route exact path="/" component={Default} />
            <Route exact path="/about" component={Default} />
            <Route exact path="/citizenship" component={Default} />
            <Route exact path="/residency" component={Default} />
            <Route exact path="/countries" component={Default} />
            <Route exact path="/contact" component={Default} />
          </Switch>

          <Footer />

        </IntlProvider>

      </div>
    </Suspense >
  );
}

export default App;
