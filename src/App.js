import './App.css';
import {lazy, Suspense} from 'react';
 
///import Slogan from './code-splitting/Slogan';
///import Rodape from './code-splitting/Rodape';

const Slogan = lazy(() => import ('./code-splitting/Slogan'));
const Rodape = lazy(() => import ('./code-splitting/Rodape'));
const Logo = lazy(() => import ('./code-splitting/Logo'));


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        
      <Suspense fallback={
        <img src="http://gifmania.com.br/wp-content/uploads/2020/05/gif-carregando-loading.gif" alt="logo" />
      }>
          <Logo />
          </Suspense>
         
          <Suspense fallback={<p>Carregando Logo...</p>}>
          <Slogan />
          </Suspense>

          <Suspense fallback={<p>Carregando Rodapé...</p>}>
          <Rodape />
          </Suspense>


        
      </header>
    </div>
  );
}

export default App;
