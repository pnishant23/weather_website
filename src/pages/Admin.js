import {useState} from "react"
import FileLog from "../components/FileLog"
import Users from "../components/Users"
import Upload from "../components/Upload"
import AdminGraph from "../components/AdminGraph"
import {useNavigate} from "react-router-dom"

export default function Admin (){
    const navigate=useNavigate()
    
    const navigateToLoginSignUp = () => {
        navigate("/adminloginsignup")
    }
    
    return (
        <>
            <header className="max-w-[800px] h-auto flex justify-between px-2 md:px-0 py-2 mx-auto">
				<h1>Weather Forecast</h1>
				<p onClick={navigateToLoginSignUp}>Login / SignUp</p>
            </header>
				{/*main body*/}
				<main className="max-w-[850px] h-auto grid overflow-hidden md:grid-rows-2 md:grid-cols-2 grid-rows-4 grid-cols-1 md:gap-4 mx-auto px-2 md:px-0 secondaryFont">
				    {/*wrapper 1*/}
				    <div className="h-full w-full sm:w-[300px] md:w-[500px] flex flex-col justify-center md:block items-center overflow-y-scroll">
				        <FileLog/>
				    </div>
				    <div className="flex flex-col md:justify-end justify-center md:items-end items-center h-[350px]">
				        <Upload/>
				    </div>
				    <div className="h-full w-full sm:w-[300px] md:w-[500px] flex flex-col justify-center md:block items-center overflow-y-scroll">
				        <Users/>
				    </div>
				    <div className="md:h-[300px] h-auto flex flex-col justify-center items-center md:items-end ">
				        <AdminGraph/>
				    </div>
				</main>
        </>
        )
}