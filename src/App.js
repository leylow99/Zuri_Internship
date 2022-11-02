// import logo from './logo.svg';
import './App.css';
import logo from './image/woman.png'
import pic from './image/button.png'
import pic2 from './image/dot.png'
import slack from './image/slack.png'
import social from './image/Social.png'
import Links from './Links'
import Footer from './Footer'


function App() {
  return (
    <div>
      <div className="flex justify-center relative">
        <img id='profile__img' className='mt-14' src={logo} alt="woman" />
        <img className='w-10 object-contain absolute top-12 hidden md:block right-[25%]' src={pic} alt="back" />
        <img className='w-10 object-contain absolute top-5 block md:hidden right-4' src={pic2} alt='menu' />
      </div>

      <h1 id='twitter' className="flex justify-center text-black font-semibold text-xl mt-3 ">Kalesanwo Olayinka</h1>
      <div className='flex flex-col items-center px-5'>
        <Links name="Twitter Link" link={'#'} id={''} />
        <Links name="Zuri Team" link={'https://training.zuri.team/'} id={'btn__zuri'} />
        <Links name="Zuri Books" link={'http://books.zuri.team'} id={'books'} />
        <Links name="Python Books" link={'https://books.zuri.team'} id={'book__python'} />
        <Links name="Background Check for Coders" link={'https://background.zuri.team'} id={'pitch'} />
        <Links name="Design Books" link={'https://books.zuri.team/design-rules'} id={'book_design'} />
      </div>

      <div className='hidden md:flex justify-center relative'>
        <img className='w-5 mt-7 ' src={slack} alt="slack" />
        <img className='w-5 mt-7 ml-5 ' src={social} alt="social" />
      </div>

      <Footer/>



    </div>
  );

}

export default App;
