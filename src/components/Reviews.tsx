
const Reviews = () => {
  return (
    <section className="w-full  bg-[#F2F6F8] pb-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-20 pt-16">

            <div>
                <img src="/clients.png" alt="img" className="w-[280px] sm:w-[420px]" />
            </div>

            <div className="flex flex-col gap-4 justify-center items-center max-w-[300px] sm:max-w-[600px]">
                <h2  className="font-semibold sm:font-bold text-[32px] sm:text-[96px] leading-[90px]">What Our Clients Say Us</h2>
                <p className="text-[18px] sm:text-[26px] text-center sm:text-start">Read and understand our testimonial and know what people say about us and our platform.</p>
            
            {/* boxreview */}
            <div className="w-[300px] sm:w-[600px] h-[300px] p-10 flex flex-col justify-center  gap-10 bg-white shadow-2xl rounded-2xl">
                <p className="text-[18px] sm:text-[26px]">“Lorem ipsum dolor sit amet, and the consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad”</p>


                <div className="flex items-center justify-between sm:flex-row flex-col-reverse">
                    <div className="flex flex-col gap-1">
                        <h2 className="font-semibold sm:font-bold text-[20px] sm:text-[36px]">Enoch Oyedeji</h2>
                        <p>CEO & Founder</p>
                    </div>

                    <div className="flex items-center ">
                    {[1,2,3,4,5].map((_)=>(
                        <img src="/starRating.png" alt="img" />
                    ))}
                    </div>
                </div>
            </div>
            
            </div>


        </div>
        
    </section>
  )
}

export default Reviews