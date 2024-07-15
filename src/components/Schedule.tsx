
const Schedule = () => {
  return (
    <section className="max-w-6xl mx-auto pt-10 p-2 flex flex-col gap-10">
        <div className="flex items-center flex-col sm:flex-row gap-4 ">
            <div className="flex-1">
                <img src="/scheduleImg1.png" alt="img" className="w-[500px]" />
            </div>

            <div className="flex-1 max-w-[600px] flex flex-col  gap-8">
                <h2 className="text-black font-bold text-[26px] sm:text-[50px] sm:leading-[60px] sm:text-start text-center ">We forward your schedule on time through email</h2>
                <p className="text-[16px] sm:text-[26px] sm:text-start  text-center">This scheduling feature allows you to simply forward over an email to Conduct and it handles the rest.
                 We forward your schedule on time through email.</p>
            </div>
        </div>

        <div className="flex items-center flex-col sm:flex-row gap-20 px-8">

            <div className="flex-1 max-w-[600px] flex flex-col  gap-8">
                <h2 className="text-black font-bold text-[26px] sm:text-[50px] sm:leading-[60px] sm:text-start text-center ">Easily schedule meetings with Scheduling Pages</h2>
                <p className="text-[16px] sm:text-[26px] sm:text-start  text-center">Quickly setup a scheduling page with Conduct and start booking meetings. We offer users 
                    the ability to create individual and team pages very easily and fast.</p>
            </div>

            <div className="flex-1">
                <img src="/schdeuleImg2.png" alt="img" className="w-[500px]" />
            </div>
        </div>


        <div className="flex items-center flex-col sm:flex-row gap-4 ">
            <div className="flex-1">
                <img src="/scheduleImg3.png" alt="img" className="w-[400px]" />
            </div>

            <div className="flex-1 max-w-[600px] flex flex-col  gap-8">
                <h2 className="text-black font-bold text-[26px] sm:text-[50px] sm:leading-[60px] 
                sm:text-start text-center ">Easily integrate your favorite tools with Conduct</h2>
                <p className="text-[16px] sm:text-[26px] sm:text-start  text-center">Schedule your meetings with some of the most popular tools. Book a virtual meeting with Microsoft 
                    Teams or connect your Google Calendars to allow Conduct to find the best times.</p>
            </div>
        </div>

    </section>
  )
}

export default Schedule