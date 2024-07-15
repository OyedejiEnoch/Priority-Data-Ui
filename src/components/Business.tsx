import BusinessInsights from "./BusinessInsights"
import Customers from "./Customers"

const Business = () => {
  return (
    <section className="w-full h-auto flex flex-col bg-[#F2F6F8] pt-10 gap-10">
        <Customers />
        <BusinessInsights />
    </section>
  )
}

export default Business