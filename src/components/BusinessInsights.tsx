
const BusinessInsights = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 pt-14 pb-20">
        <h2 className="text-black font-bold  text-[28px] sm:text-[50px] text-center">The All-in-One Platform for business insights</h2>

        <div className="flex flex-col sm:flex-row items-center gap-10">

           <div className="flex flex-col gap-4 items-center justify-center max-w-[300px]">
                <div className="flex items-center justify-center h-[100px] w-[100px] rounded-2xl bg-white shadow-xl p-4">
                    <img src="/marketingImg.png" alt="img" />
                </div>
                <h2 className="text-black font-semibold sm:font-bold text-[28px] sm:text-[36px]">Marketing</h2>
                <p className="text-[20px] sm:text-[26px] text-center">Marketing reach and acquire more qualified pipeline to increase sales and profit.</p>
                <p className="text-[20px] sm:text-[26px]">Learn More  </p>
            </div>
           <div className="flex flex-col gap-4 items-center justify-center max-w-[300px]">
                <div className="flex items-center justify-center h-[100px] w-[100px] rounded-2xl bg-white shadow-xl p-4">
                    <img src="/salesImg.png" alt="img" />
                </div>
                <h2 className="text-black font-semibold sm:font-bold text-[28px] sm:text-[36px]">Sales</h2>
                <p className="text-[20px] sm:text-[26px] text-center">Marketing reach and acquire more qualified pipeline to increase sales and profit.</p>
                <p className="text-[20px] sm:text-[26px]">Learn More  </p>
            </div>
           <div className="flex flex-col gap-4 items-center justify-center max-w-[300px]">
                <div className="flex items-center justify-center h-[100px] w-[100px] rounded-2xl bg-white shadow-xl p-4">
                    <img src="/emailImg.png" alt="img" />
                </div>
                <h2 className="text-black font-semibold sm:font-bold text-[28px] sm:text-[36px]">Email</h2>
                <p className="text-[20px] sm:text-[26px] text-center">Marketing reach and acquire more qualified pipeline to increase sales and profit.</p>
                <p className="text-[20px] sm:text-[26px]">Learn More  </p>
            </div>

        </div>
    </div>
  )
}

export default BusinessInsights