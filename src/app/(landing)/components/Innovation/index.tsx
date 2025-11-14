import { getInnovation } from "@/lib/data"
import InnovationCard from "./InnovationCard"

const Innovation = () => {
  const data = getInnovation()

  return (
    <div className="container mx-auto pt-[110px]">
      <InnovationCard data={data} />
    </div>
  )
}

export default Innovation

