
const Platforms = () => {
  return (
    <section className="w-full mt-16 pt-10  bg-[#F2F6F8]">
        <div className="max-w-6xl mx-auto flex flex-col-reverse justify-center sm:flex-row items-center gap-5">
      
        <div className="flex flex-col gap-4 justify-center items-center  max-w-[600px]">
            <h2 className="text-black font-semibold sm:font-bold text-[30px] sm:text-[96px] leading-[90px]">The World Open Source  Platform</h2>
            <p className="text-[18px] sm:text-[26px] sm:text-start text-center ">Priority native integrations and open APIs make it easy to connect with any application in your stack
            or on your website. From there, you can send data to key destinations without vendor lock-in, maximizing the portability of your data across applications.</p>
           
            <button className="w-[300px] bg-[#4E2FFF] text-white px-2 py-3 rounded-full text-[20px] font-semibold ">See all integratons</button>

        </div>

        <div>
            <img src="/platforms.png" alt="img" />
        </div>

        </div>
    </section>
  )
}

export default Platforms