
const Videotitle = ({title,overview}) => {
  return (
    <div className="flex flex-col items-start p-12 justify-center absolute w-screen aspect-video bg-gradient-to-r from-black/90 text-white pb-50">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="w-1/4 my-4">{overview}</p>
    <div className="">
        <button className="bg-white/55 text-black font-semibold px-7 py-1.5 rounded-md hover:bg-white/75">▶ Play</button>
        <button className="bg-gray-400/40 ml-2 text-white/90 font-semibold px-7 py-1.5 rounded-md hover:bg-gray-400/60">ℹ️More Info</button>
    </div>
    </div>

  )
}

export default Videotitle