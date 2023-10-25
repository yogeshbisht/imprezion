import { Button } from "@/components/ui/button"

import Logo from "./logo"

export const Footer = () => {
  return (
    <div className="flex items-center w-full px-12 py-6 bg-background z-50 dark:bg-gray-950">
      <Logo small />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  )
}