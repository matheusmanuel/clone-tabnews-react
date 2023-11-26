import React,{useState, useEffect} from 'react';

const Nav = (props) => {

  const [linkStyleRecents, setLinkStyleRecents] = useState({textDecoration: 'none'});
  const [linkStyleRelevant, setLinkStyleRelevant] = useState({textDecoration: 'none'});

  useEffect(()=>{
    if(props.estrategy === 'recents'){
      setLinkStyleRecents({textDecoration: 'underline'});
    }else{
      setLinkStyleRelevant({textDecoration: 'underline'});
    }
  }, [props.estrategy]);

  return (
    <section className="section-nav">
      <header className="header-nav">
        <nav className="nav-container">
          <div>
            <div className="logo">
              <img src="/img/logo.svg" alt="logo tabnews" />
            </div>
            <a href="/" id='a-relevant' style={linkStyleRelevant}>Relevantes</a>
            <a href="/" id='a-recents' style={linkStyleRecents}>Recentes</a>
          </div>
          <div className="search-input">
            <img src="/img/search-icon.svg" alt="teste" />
            <input type="text" placeholder="Pesquisar algo no tabnews" className="input-search" />
          </div>
          <img src="/img/fi_moon.svg" alt="testes" className="img-mode cursor-p" />
        </nav>
      </header>
    </section>
  );
}

export default Nav;
