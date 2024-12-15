import Navbar from "./components/Navbar";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Offer from "./sections/Offer";
import PopularProducts from "./sections/PopularProducts";
import Quality from "./sections/Quality";
import Services from "./sections/Services";


function App(){
  return (
    <main className='relative'>
      <Navbar/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <Quality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <Offer/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  );
};

export default App;