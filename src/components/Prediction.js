import moment from "moment"

export default function Prediction ({daily}){
    return (
        <>
            {/* heading */}
			<h3 className="text-lg text-start font-bold pb-2 md:w-[60%] w-full">Weather Prediction</h3>
			{/* heading cnt-2 weather prediction */}
		    <div className="flex flex-col justify-center items-center md:h-[90%] h-auto md:w-3/4 w-full">
			{/* day 1 */}
			    <div className="w-full h-[30%] primaryBColor mb-1 rounded-md flex items-center justify-center">
					<div className="w-2/6 h-full flex justify-center items-center">{daily[2].weather ? <>{daily[2].weather.map(x=>{return <img src={`https://openweathermap.org/img/wn/${x.icon}@2x.png`} alt="icon"></img>})}</>:<div className="lds-dual-ring"></div>}</div>
				    <div className="text-center w-2/6 h-full flex flex-col justify-center items-center">
						<span className="block font-light">{moment(daily[2].dt * 1000).format("Do MMMM")}</span>
						<span className="block font-bold text-lg">{daily[2].weather ? <>{daily[2].weather.map(x=>{return x.main})}</>:<>..</>}</span>
					</div>
					<div className="w-2/6 h-full flex justify-center items-center text-lg lg:text-2xl font-bold">
					{daily[2].temp ?  <>{daily[2].temp.max.toFixed(0)}<sup>o</sup>C
					/ {daily[2].temp.min.toFixed(0)}</>:<>...</>}<sup>o</sup>C
					</div>
				</div>
				{/* day 2 */}
				<div className="w-full h-[30%] primaryBColor mb-1 rounded-md flex items-center justify-center">
					<div className="w-2/6 h-full flex justify-center items-center">{daily[3].weather ? <>{daily[3].weather.map(x=>{return <img src={`https://openweathermap.org/img/wn/${x.icon}@2x.png`} alt="icon"></img>})}</>:<>...</>}</div>
						<div className="text-center w-2/6 h-full flex flex-col justify-center items-center">
							<span className="block font-light">{moment(daily[3].dt * 1000).format("Do MMMM")}</span>
							<span className="block font-bold text-lg">{daily[3].weather ? <>{daily[3].weather.map(x=>{return x.main})}</>:<>..</>}</span>
						</div>
						<div className="w-2/6 h-full flex justify-center items-center text-lg lg:text-2xl font-bold">
						{daily[3].temp ?  <>{daily[3].temp.max.toFixed(0)}<sup>o</sup>C
					/ {daily[3].temp.min.toFixed(0)}</>:<>...</>}<sup>o</sup>C
						</div>
					</div>
					{/* day 3 */}
					<div className="w-full h-[30%] primaryBColor rounded-md flex items-center justify-center">
					    <div className="w-2/6 h-full flex justify-center items-center">{daily[4].weather ? <>{daily[4].weather.map(x=>{return <img src={`https://openweathermap.org/img/wn/${x.icon}@2x.png`} alt="icon"></img>})}</>:<>...</>}</div>
							<div className="text-center w-2/6 h-full flex flex-col justify-center items-center">
								<span className="block font-light">{moment(daily[4].dt * 1000).format("Do MMMM")}</span>
								<span className="block font-bold text-lg">{daily[2].weather ? <>{daily[2].weather.map(x=>{return x.main})}</>:<>..</>}</span>
							</div>
							<div className="w-2/6 h-full flex justify-center items-center text-lg lg:text-2xl font-bold">
							{daily[4].temp ?  <>{daily[4].temp.max.toFixed(0)}<sup>o</sup>C
					/ {daily[4].temp.min.toFixed(0)}</>:<>...</>}<sup>o</sup>C
							</div>
						</div>
					</div>
        </>
        )
}