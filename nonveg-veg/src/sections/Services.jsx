import ServiceCard from "../components/ServiceCard"
import { services } from "../data/Index"

const Services = () => {
  return (
    <section className='max-container flex flex-row justify-center items-center gap-10 md:flex-row sm:flex-col xxs:flex-col'>
        {services.map((service) => (
            <ServiceCard imgURL={service.imgURL} label={service.label} subText={service.subtext}/>
        ))}

    </section>
  )
}

export default Services
