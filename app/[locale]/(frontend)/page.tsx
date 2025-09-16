import BestSeller from "@/components/pages/home/BestSeller"
import BestServices from "@/components/pages/home/BestServices"
import Hero from "@/components/pages/home/Hero"
import WhatWeProvide from "@/components/pages/home/WhatWeProvide"

export default function HomePage() {
	return (
		<>
			<Hero />
      <BestServices />
      <WhatWeProvide />
      <BestSeller />
		</>
	)
}
