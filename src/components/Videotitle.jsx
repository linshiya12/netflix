
const Videotitle = ({title,overview}) => {
  return (
    <div className="flex flex-col items-start p-6 sm:p-10 md:p-10 lg:p-12 lg:pb-50 justify-center absolute w-screen aspect-video bg-gradient-to-r from-black/90 text-white pb-0">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
    <p className="my-3 text-xs sm:text-base md:text-sm lg:text-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 lg:my-4 mb-0 mt-0 md:mt-4 md:mb-4">{overview}</p>
    <div className="flex flex-wrap gap-2">
        <button className="bg-white/55 text-black font-semibold px-4 lg:px-7 py-1.5 sm:px-6 sm:py-2 rounded-md hover:bg-white/75">▶ Play</button>
        <button className="bg-gray-400/40 ml-2 text-white/90 font-semibold sm:px-6 sm:py-2 px-4 lg:px-7 py-1.5 rounded-md hover:bg-gray-400/60">ℹ️More Info</button>
    </div>
    </div>

  )
}

export default Videotitle