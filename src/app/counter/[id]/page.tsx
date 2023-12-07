import prisma from "@/lib/db"
import { notFound } from "next/navigation"
import Counter from "./components/counter/counter"

const Page = async ({params: {id}}: { params : {id: string}}) => {
    const counter = await prisma.counter.findUniqueOrThrow({
        where: {
            id
        }
    }).catch(notFound)

    return (
        <div>
            <Counter counter={counter} />
        </div>
    )
}

export default Page