import Sidebar from './sidebar';
import Header from './header';
import Footer from './footer';

function LayoutContainer(props: any) {
  return (
    <main className={`flex min-h-screen md:w-screen flex-row bg-thgraybg`}>
      <Sidebar />
      <div className="flex flex-col h-screen py-5 px-5 w-full">
        <Header />
        <div className='flex-1 overflow-y-auto'>
          {props.children}
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default LayoutContainer;
