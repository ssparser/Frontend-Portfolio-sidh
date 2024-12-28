import BentoTilt from "./BentoTilt"

const CharacterCard = ({image, hueColor, onClick}) => {
  return (
    <BentoTilt>
    <div className='w-28 h-28 mb-3 rounded-lg shadow-lg relative hover:border-2 overflow-hidden'   style={{ borderColor: hueColor }} onClick={onClick}>
  <img src={image} className="object-cover w-full h-full rounded-lg hover:object-center transform transition-transform duration-300 hover:scale-125" alt="Character"></img>
  </div>
  </BentoTilt>
  )
}

export default CharacterCard
