import { useRouter } from "next/router"

export default function ErrorPage() {
    const router = useRouter()
    const { code } = router.query

    if(code === "500") {
        return (
            <div className="helveteca flex h-screen w-screen justify-center items-center px-4 md:px-0">
                <div className="text-center">
                    <div className="text-8xl font-bold font-sans text-fb-main">{code}</div>
                    <div className="text-xl text-fb-black">We're sorry! Something went wrong!</div>
                    <div className="text-xs">(We did not manage to steel ALL of your data... Only almost all data...)</div>
                </div>
            </div>
        )
    }

    if(code === "404") {
        return (
            <div className="helveteca flex h-screen w-screen justify-center items-center px-4 md:px-0">
                <div className="text-center">
                    <div className="text-8xl font-bold font-sans text-fb-main">{code}</div>
                    <div className="text-xl text-fb-black">Sorry, we could not find the page you want to visit.</div>
                    <div className="text-xs">(But we have your data now...)</div>
                </div>
            </div>
        )
    }

    if(code === "403") {
        return (
            <div className="helveteca flex h-screen w-screen justify-center items-center px-4 md:px-0">
                <div className="text-center">
                    <div className="text-8xl font-bold font-sans text-fb-main">{code}</div>
                    <div className="text-xl text-fb-black">Sorry, you are not authorized to use our platform.</div>
                    <div className="text-xs">(But we still want you to use it...)</div>
                </div>
            </div>
        )
    }

    return (
        <div>There is nothing here...</div>
    )
}