import { reviews } from "../data/Index"
import { star } from "../assets/icons"

const CustomerReviews = () => {
  return (
    <section className="max-container mt-10 flex-col flex justify-center items-center">
      <div>
        <h2 className="text-4xl text-center ">
          What Our <span className="text-coral-red">Customers</span> Say 
        </h2>
        <p className="mt-4 text-slate-gray italic text-center">
        Discover what makes us stand out!
        Here's what our customers have to say about their amazing experiences with our products and services.
        </p>
      </div>
      <div className="flex flex-1 justify-evenly mt-24 gap-14 items-center max-lg:flex-col"> 
          {reviews.map((review) => (
              <div className=" flex justify-center items-center flex-col">
            <img src={review.imgURL}  className="rounded-full object-cover w-[120px] h-[120px] mt-3"/>
            <h3 className="font-palanquin font-bold mt-3">{review.customerName}</h3>
            <p className="font-montserrat italic text-slate-gray mt-3 max-w-md text-center">{review.feedback}</p>
            <p className="font-palanquin text-coral-red mt-3"> <span><img src={star} className="inline-block"/></span> {review.rating}</p> 
            </div>


            
          ) )}
      </div>
    </section>
  )
}

export default CustomerReviews
