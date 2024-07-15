
const Productivity = () => {
  return (
    <section className="w-full bg-[#F2F6F8] flex flex-col items-center justify-center pt-20">
        <div className="w-full max-w-6xl mx-auto h-[400px] rounded-[34px] bg-gradient mt-10 flex items-center">
            <div className="flex  justify-start flex-col gap-4 max-w-[850px] p-10 sm:p-14 ">
                <img src="/priorityLogo2.svg" alt="img" className="w-[200px] sm:w-[250px]" />

                <h2 className="text-white font-semibold sm:font-bold text-[28px] sm:text-[36px]">Make Everyday Productive</h2>
                <p className="text-white text-[18px] sm:text-[26px]">Team productivity is a growing challenge for every company. Priority has 
                    the power, flexibility and scalability to tackle it.</p>

                <button className="text-white bg-transparent border border-white w-[200px] py-3 rounded-full
                text-[20px]">
                    Watch Video
                </button>


            </div>

            <div>
                <img src="/movingProductivity.png" alt="img" className="w-[150px] text-white" />
            </div>
        </div>
        
    </section>
  )
}

export default Productivity