import { Logo } from "./Logo"

export const Navbar = ({ Navigation }: { Navigation: () => JSX.Element }) => {
    return (<div className="flex justify-between items-center p-5 md:px-10 md:py-5">
        <Logo showText />
        <Navigation />
    </div>)

}