const Hero = ({
  image,
  title,
  subtitle,
  ctaText,
  ctaLink,
  buttonClass,
  containerClass,
}) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${containerClass || ''}`}>
      <img className='w-full h-full object-cover' src={image} alt={title} />
      <div className='absolute inset-0 bg-black/30' />
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='mt-2 text-lg'>{subtitle}</p>
        <a
          href={ctaLink}
          className={`mt-4 inline-block rounded px-5 py-2 font-medium ${buttonClass || 'bg-white text-black'}`}
        >
          {ctaText}
        </a>
      </div>
    </div>
  )
}

export default Hero