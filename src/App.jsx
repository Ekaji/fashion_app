import backgroundImg from './img/image.jpg';
import svgBg from './img/sssquigglyL3.svg';
import NavBar from './components/nav/navbar';
import { BsArrowRight, BsArrowDown, BsArrowUp } from 'react-icons/Bs';
import './App.css';
import Arch from './components/arch/arch'

function App() {
  const navLinks = ['Home', 'Exhibition', 'Partnership'];
  const socialLinks =['Facebook', 'Instagram', 'Twitter']
  return (
    <div className="App  ">
      <NavBar data={navLinks} />
      <div className="flex h-screen "  >
        <div className="w-0 lg:w-8/12 bg-fixed bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${svgBg})`}}>
          <div className=" z-50 w-screen lg:w-7/12 h-screen flex flex-col justify-center mx-auto">
            <div className='m-8 text-white lg:text-black' >
              <h5 className="tracking-[0.5rem] font-semibold text-white lg:text-black ">
                LAGOS
              </h5>
              <h1 className="font-[gilbert] text-[5rem] leading-[5rem] ">
                Fashion <br /> Week
              </h1>
              <p className='tracking-wider ' >
                The spring 2022 season isn't over yet, <br />
                Lagos Fashion week is happening now <br />
                in the Nigerian capital.
              </p>
              <div className=' '>
                <button
                  type="button"
                  className="inline-block mt-4 text-white lg:text-black hover:text-white border border-white lg:border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Join the move{' '}
                  <BsArrowRight className="inline-block ml-3" />
                </button>
              </div>
            </div>
            <div className='absolute bottom-36 right-8  lg:bottom-8 lg:left-12 text-white lg:text-black' >
              <Arch /> 
            </div>
          </div>
          <NavBar bottom data={socialLinks} />
        </div>

        <div className="-z-50 relative w-screen lg:w-4/12 lg:z-10">
          <img
            src={backgroundImg}
            alt=""
            className="w-full h-full object-cover "
          />
          <div className='lg:hidden h-screen w-full inset-0 absolute bg-gradient-to-r from-[rgba(5,0,32,0.497)] to-[rgba(5,0,32,0.497)] lg'></div>
          <div className="absolute m-0 p-0 bottom-0 right-0 divide-x-2">
            <button
              type="button"
              className="inline-block h-16 w-16 text-black m-0 p-0 hover:text-white bg-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center  "
            >
              <BsArrowDown className="inline-block" />
            </button>
            <button
              type="button"
              className="inline-block h-16 w-16 text-black m-0 p-0 hover:text-white bg-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 text-center  "
            >
              <BsArrowUp className="inline-block" />
            </button>
          </div>
        </div>
      

      </div>
    </div>
  );
}

export default App;
