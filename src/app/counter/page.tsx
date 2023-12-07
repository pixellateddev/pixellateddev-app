import prisma from "@/lib/db"
import { NextPage } from "next"
import Link from "next/link"


const Page: NextPage = async () => {
    const counters = await prisma.counter.findMany()
    return (
       <div>
        {counters.map(counter => (
            <div key={counter.id}>
                <Link href={`/counter/${counter.id}`}>{counter.name}</Link>
            </div>
        ))}
       </div>
    )
}

export default Page