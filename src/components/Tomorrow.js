export default function Tomorrow ({daily, cityName}){
    return (
        <>
        {/* heading */}
		<h3 className="text-lg text-start font-bold pb-2 w-full md:w-[60%]">Tomorrow</h3>
		{/* heading cnt-4 tomorrow */}
		<div className="md:h-[90%] h-full w-full md:w-[60%] rounded-md primaryBColor flex flex-col justify-start items-start p-4">
			<h3 className="font-bold text-lg mb-3">{cityName ? <>{cityName[1]},{cityName[0]}</>:<>load</>}</h3>
			<h3 className="font-bold text-5xl mb-3">{daily[1].temp ?  <>{daily[1].temp.day.toFixed(0)}</>:<>...</>}<sup>o</sup>C</h3>
			<p className="font-light mb-3">{daily[1].weather ? <>{daily[1].weather.map(x=>{return x.main})}</>:<>..</>}</p>
			{daily[2].weather ? <>{daily[2].weather.map(x=>{return <img src={`https://openweathermap.org/img/wn/${x.icon}@4x.png`} alt="icon"></img>})}</>:<>...</>}
		</div>
        </>
        )
}