import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import Footer from '../../components/Footer'
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <div className="background-body">
      
      <Menu />

      <BannerMain videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
                  videoTitle={dadosIniciais.categorias[0].videos[0].titulo} 
                  url={dadosIniciais.categorias[0].videos[0].url} />

      {dadosIniciais.categorias.map((categoria, idx) => (
        <Carousel ignoreFirstVideo={idx === 0} category={categoria} key={idx} />
      ))}

      <Footer />
    </div>
  );
}

export default Home;
