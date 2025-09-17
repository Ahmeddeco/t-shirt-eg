import { Button } from "@/components/ui/button"

export default function PrintYourDesign() {
	return (
		<section className="lg:px-24 h-[70vh] bg-[url(../../public/t-shirt/factory.webp)] bg-no-repeat bg-cover bg-center bg-blend-multiply bg-primary flex flex-col gap-8 justify-center items-center lg:items-start">
			<h2 className="text-neutral-100">
				we can print any <br />
				type of design
			</h2>
			<h6 className="text-neutral-200 max-w-md">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dicta aperiam quo molestias labore
				exercitationem nemo illum quasi facere voluptates. Cupiditate aperiam adipisci quae dolores.
			</h6>
			<Button>upload your design</Button>
		</section>
	)
}
