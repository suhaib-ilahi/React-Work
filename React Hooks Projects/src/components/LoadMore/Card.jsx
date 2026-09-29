
const Card = ({image, title, keyman}) => {
  return (
    <div key={keyman} className='w-60 h-60 rounded-xl  cursor-pointer object-cover mt-3 p-3 border-2'>
        <img className="w-50 self-center h-40 border" src={image} />
        <h2 className="text-xl font-bold">{title}</h2>
    </div>
  )
}

export default Card