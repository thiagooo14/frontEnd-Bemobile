import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home__title'>Funcionários</h1>
      <input className='home__input' type="text" placeholder="Pesquisar" />
    </div>
  );
};

export default Home