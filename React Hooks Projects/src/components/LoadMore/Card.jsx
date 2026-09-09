
const Card = (image) => {
  return (
    <div className='w-1/4 h-1/4 rounded-xl cursor-pointer object-cover border-2'>
        <img className="w-full h-full" src={image} />
    </div>
  )
}

export default Card