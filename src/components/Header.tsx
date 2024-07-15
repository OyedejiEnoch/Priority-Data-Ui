import Navbar from "./Navbar"

const Header = () => {
  return (
    <section className="w-full h-auto bg-img1 bg-cover object-contain ">
        <Navbar />
        <div className="text-white flex sm:flex-row flex-col-reverse max-w-6xl mx-auto sm:p-4 p-8 relative ">
            {/* left */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6 max-w-[500px] sm:max-w-[800px] justify-center items-center">
                    <h1 className=" text-[65px] leading-[70px] text-center sm:text-start sm:text-[120px] font-bold sm:font-extrabold sm:leading-[130px] ">The World Best Customer Data Platform</h1>
                    <p className="text-[18px] sm:text-[24px] text-center sm:text-start">Your whole life in one place. The best way to stay organized, collaborate
                    with others, manage tasks and stay on-track.</p>
                </div>

                 <div className="flex flex-col sm:flex-row items-center gap-4 max-w-[450px] mt-4">
                    <input type="text" className="px-8 py-3 rounded-3xl text-black flex-1" placeholder="Enter Your Email" />
                    <button className=" sm:font-semibold text-[18px] sm:text-[22px] px-8 py-2 bg-blue-700 rounded-3xl">Get Started</button>
                 </div>


                 <div className="flex items-center gap-4 sm:gap-10  flex-col sm:flex-row">
                    <div  className="flex items-center gap-1 sm:gap-2">
                   {[1,2,3,4,5].map((_)=>(
                       <img src="/starRating.png" className="ml-[-5px]" alt="img"/>
                    ))
                    }
                </div>

                    <p className="text-[18px] font-semibold ml-3 text-gray-400 ">Based on 10,000+ reviews on</p>
                 </div>


                 <div className="flex items-center justify-center sm:justify-start gap-10 flex-wrap">
                    <img src="/crowdLogo.svg" alt="img" />
                    <img src="/capteraLogo.svg" alt="img" />
                    <img src="/getAppLogo.svg" alt="img" />
                 </div>
            </div>


            {/* right */}
            <div className="relative ">
                <img src="/headerImg.png" alt="img" className="w-[280px]  sm:w-[550px]" />
            </div>
            
        </div> 
    </section>
  )
}

export default Header