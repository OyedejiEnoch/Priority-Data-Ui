import { footer } from "../constants"

const Footer = () => {
    const date =new Date()
    const year =date.getFullYear()

  return (
    <footer className='w-full h-auto bg-img1 bg-cover mt-32 overflow-visible relative'>

        <div  className="absolute top-[-2%] sm:top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-[350px] sm:w-full sm:max-w-6xl pt-20 sm:pt-6 px-2 mx-auto h-[320px] rounded-[34px] bg-img1 bg-contain flex flex-col gap-3 justify-center items-center text-white">
            
            <h2 className="text-white font-semibold sm:font-bold text-[28px] sm:text-[36px] text-center">Try a better way of scheduling</h2>
            <p className="text-white text-[18px] sm:text-[23px] text-center">Conduct make it easier for you to start scheduling a proper and easy way.</p>
        
            <div className="flex flex-col  sm:flex-row items-center gap-4 mt-2">
            <button className="flex items-center gap-4 px-4 py-4 bg-white text-black font-semibold text-xl rounded-xl">
            <img src="/microsoft.svg" alt="img"/>
            Sign in with microsoft

            </button>
            <button className="flex items-center gap-4 px-4 py-4 bg-white text-black font-semibold text-xl rounded-xl">
            <img src="/google.svg" alt="img"/>
            Sign in with google

            </button>

            </div>
            <p className="text-white text-[18px] sm:text-[20px]">Sign up for a free account with email</p>
        </div>


        <div className="max-w-6xl mx-auto pt-52 mt-52 px-10 flex sm:flex-row flex-col sm:items-center justify-between text-white">
            {footer.map((footer)=>(
                <div key={footer.id} className="flex flex-col gap-4 mt-20">
                    <h2 className="text-white font-bold sm:font-bold text-[24px] sm:text-[32px]">{footer.title}</h2>
                    <ul className="flex flex-col gap-4">
                        {footer.links.map((link)=>(
                            <li className="text-white text-[16px] sm:text-[20px] font-semibold">{link}</li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>

            <hr className="mt-10" />

            <div className="flex flex-col-reverse gap-4 sm:flex-row items-center justify-between text-white pt-20 pb-20 max-w-6xl mx-auto">

            <p className="font-semibold">©{year} priority</p>

            <div className="flex items-center gap-4 font-semibold text-[16px]" >
                <span>Terms</span>
                <span>Privacy Policy</span>
                <span>Carrer</span>
            </div>

            <div className="flex items-center gap-4">
                <img src="/xtwitter.svg" alt="img" />
                <img src="/facebook.svg" alt="img" />
                <img src="/linkedin.svg" alt="img" />
            </div>

            
            </div>
    </footer>
  )
}

export default Footer