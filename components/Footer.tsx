import { Logo } from "./Logo"

export const Footer = () => {
    return <div className="bg-slate-600 p-5 flex items-center justify-center">
        <div className="max-w-lg">
            <Logo showText textProperties={["text-white"]} />
        </div>
    </div>
}