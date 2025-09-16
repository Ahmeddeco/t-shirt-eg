"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Input } from "../ui/input"
import { twMerge } from "tailwind-merge"
import Image from "next/image"
import { Button } from "../ui/button"
import { X } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Label } from "../ui/label"
import { UploadDropzone } from "@/utils/uploadthing"

type Props = {
	dbImages?: string[]
	dbImage?: string
	label?: string
	imageName?: string
	imagesName?: string
	imageKey?: string | undefined
}

/* ------------------------ UploadManyImagesDropZone ------------------------ */
export function UploadManyImagesDropZone({ dbImages, label = "images", imagesName = "images" }: Props) {
	const [images, setImages] = useState<string[]>(dbImages || [])
	const handleDeleteManyImages = (index: number) => {
		setImages(images.filter((_, i) => i !== index))
	}

	return (
		<>
			<Label>{label}</Label>
			<Card className="w-full">
				<CardContent className="flex flex-col gap-3 w-full">
					<Input type="hidden" name={imagesName} value={images} />
					{images.length > 0 ? (
						<div className="grid lg:grid-cols-6 grid-cols-3 gap-6">
							{images.map((image, index) => (
								<div key={index} className="relative aspect-square w-full ">
									<Image
										src={image}
										alt="Product Image"
										fill
										className="w-full h-full object-contain rounded-lg border border-foreground p-2"
									/>

									<Button
										variant={"destructive"}
										size={"icon"}
										onClick={() => handleDeleteManyImages(index)}
										type="button"
										className="absolute -top-3 -right-3 rounded-full"
									>
										<X />
									</Button>
								</div>
							))}
						</div>
					) : (
						<UploadDropzone
							config={{ cn: twMerge }}
							className="ut-button:bg-foreground ut-button:text-background ut-button:px-8 ut-button:py-4 ut-ready:p-12 ut-readying:p-12 ut-uploading:p-12 ut-label:text-foreground ut-upload-icon:size-12 ut-upload-icon:text-foreground "
							endpoint={"manyImagesUploader"}
							onClientUploadComplete={(res: any) => {
								setImages(res.map((r: any) => r.ufsUrl))
								toast.success("Images uploaded successfully")
							}}
							onUploadError={(e: any) => {
								toast.error(`Something went wrong: ${e}`)
							}}
						/>
					)}
				</CardContent>
			</Card>
		</>
	)
}

/* ------------------------- UploadOneImagesDropZone ------------------------ */
export function UploadOneImagesDropZone({ dbImage, label = "image", imageName = "image", imageKey }: Props) {
	const [image, setImage] = useState<string>(dbImage || "")
	const handleDeleteOneImages = () => {
		setImage("")
	}

	return (
		<>
			<Label>{label}</Label>
			<Card className="w-full">
				<CardContent className="flex flex-col gap-3 w-full">
					<Input type="hidden" name={imageName} value={image} key={imageKey} />
					{image.length > 0 ? (
						<div className="grid lg:grid-cols-6 grid-cols-3 gap-6">
							<div className="relative aspect-square w-full ">
								<Image
									src={image}
									alt="Product Image"
									fill
									className="w-full h-full object-contain rounded-lg border border-foreground p-2"
								/>

								<Button
									variant={"destructive"}
									size={"icon"}
									onClick={() => handleDeleteOneImages()}
									type="button"
									className="absolute -top-3 -right-3 rounded-full"
								>
									<X />
								</Button>
							</div>
						</div>
					) : (
						<UploadDropzone
							config={{ cn: twMerge }}
							className="ut-button:bg-foreground ut-button:text-background ut-button:px-8 ut-button:py-4 ut-ready:p-12 ut-readying:p-12 ut-uploading:p-12 ut-label:text-foreground ut-upload-icon:size-12 ut-upload-icon:text-foreground "
							endpoint={"oneImageUploader"}
							onClientUploadComplete={(res: any) => {
								setImage(res[0].ufsUrl)
								toast.success("Image uploaded successfully")
							}}
							onUploadError={(e: any) => {
								toast.error(`Something went wrong: ${e}`)
							}}
						/>
					)}
				</CardContent>
			</Card>
		</>
	)
}
