import { HoverEffect } from "../ui/card-hover-effect";
import { SmallProjects } from "../../utils/helper";
  

const SmolProjectCards = () => {
  return (
    (<div className="max-w-5xl mx-auto px-4">
      <HoverEffect items={SmallProjects} />
    </div>)
  );
}
export default SmolProjectCards;

