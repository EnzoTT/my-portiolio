import { useRef, useEffect, useState} from "react"
import { useObserver } from "../../hooks/useObserver";

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

function Animation({children}:Props) {
  const animationRef = useRef<HTMLInputElement>(null);
  const animatedEntry = useObserver(animationRef, {threshold: 0.75})
  const [isVisible, setIsVisible] = useState(false);


  useEffect(()=>{
    if (animatedEntry?.isIntersecting) {
      setIsVisible(true);
    }
  },[animatedEntry])

  const sectionClass = `animation ${isVisible ? "show" : ""}`;

  return (
    <div ref={animationRef} className={sectionClass}>
        {children}
    </div>
  );
}

export default Animation;