import { Menu } from "lucide-react"
import { NavLinks } from "./NavLinks"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

export const Navigation = () => {
    return <>
        <div className="hidden md:block"><NavLinks /></div>
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger><Menu /></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="hidden">Navigation</SheetTitle>
                        <SheetDescription>
                            <NavLinks />
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    </>
}