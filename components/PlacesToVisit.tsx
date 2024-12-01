"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { motion } from "motion/react"

export const PlacesToVisit = () => {
    const placesToVisitDetails = [{
        name: "Boat House",
        url: "/assets/BPTV/boatHouse.jpg"
    }, {
        name: "Botanical Garden",
        url: "/assets/BPTV/botanicalGarden.jpg"
    }, {
        name: "Rose Garden",
        url: "/assets/BPTV/roseGarden.jpg"
    }]
    return <div className="p-5 flex flex-col items-center lg:gap-14">
        <p className="text-center text-2xl md:text-3xl font-bold mb-4">Best Places to Visit</p>
        <div className="flex flex-col gap-5 justify-around lg:flex-row xl:gap-10">{placesToVisitDetails.map((image, index) => {
            return <motion.div initial={{ opacity: 0, y: 20 * index }} animate={{ y: 0, opacity: 1 }} className="flex flex-col items-center gap-3" key={image.name}>
                <div
                    className="w-[300px] h-[180px] xl:w-[450px] xl:h-[250px] relative overflow-hidden rounded-3xl border-white border-4 border-solid drop-shadow-xl">
                    <Image className="w-full h-full object-center absolute object-cover" width={100} height={100} alt={image.name} src={image.url} />
                </div>
                <p className="font-bold">{image.name}</p>
            </motion.div>
        })}</div>
        <Button className="mt-4 bg-cms">View More</Button>
    </div>
}