import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    // Set initial value inside the effect, but we can do it safer or we leave it.
    // Actually, setting state directly in effect is fine for initialization if we just use it once. 
    // To avoid the `react-hooks/set-state-in-effect`, we can just ensure the initial state in useState avoids this if possible,
    // or just run it via an event listener.
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return !!isMobile
}
