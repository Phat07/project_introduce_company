import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "../../lib/utils"

const morphTime = 4.5
const cooldownTime = 4.5

const useMorphingText = (texts) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)

  const updateText = useCallback(() => {
    if (!texts?.length || !text1Ref.current || !text2Ref.current) {
      // console.log('Missing required refs or texts');
      return;
    }

    const nextIndex = (currentIndex + 1) % texts.length
    // console.log(`Current text: "${texts[currentIndex]}", Next text: "${texts[nextIndex]}", Total texts: ${texts.length}`);

    // Update text content
    text1Ref.current.textContent = texts[currentIndex]
    text2Ref.current.textContent = texts[nextIndex]

    // Reset classes and force reflow
    text1Ref.current.classList.remove('fade-in', 'fade-out', 'active', 'inactive')
    text2Ref.current.classList.remove('fade-in', 'fade-out', 'active', 'inactive')
    
    void text1Ref.current.offsetWidth
    void text2Ref.current.offsetWidth
    
    // Set initial states
    text1Ref.current.classList.add('active')
    text2Ref.current.classList.add('inactive')
    
    // Start transition after a brief delay
    requestAnimationFrame(() => {
      text1Ref.current.classList.add('fade-out')
      text2Ref.current.classList.add('fade-in')
    })

    // Schedule next update
    setTimeout(() => {
      setCurrentIndex(nextIndex)
    }, morphTime * 1000)
  }, [currentIndex, texts])

  useEffect(() => {
    updateText()
    
    intervalRef.current = setInterval(() => {
      updateText()
    }, (morphTime + cooldownTime) * 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [updateText])

  useEffect(() => {
    setCurrentIndex(0)
  }, [texts])

  return { text1Ref, text2Ref }
}

const Texts = ({ texts }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts)
  return (
    <div className="relative w-full">
      <style jsx>{`
        .active {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0);
        }
        .inactive {
          opacity: 0;
          filter: blur(8px);
          transform: translateY(10px);
        }
        .fade-in {
          animation: fadeIn ${morphTime}s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .fade-out {
          animation: fadeOut ${morphTime}s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            filter: blur(8px);
            transform: translateY(10px);
          }
          20% {
            opacity: 0.2;
            filter: blur(6px);
            transform: translateY(8px);
          }
          40% {
            opacity: 0.4;
            filter: blur(4px);
            transform: translateY(6px);
          }
          60% {
            opacity: 0.6;
            filter: blur(3px);
            transform: translateY(4px);
          }
          80% {
            opacity: 0.8;
            filter: blur(1px);
            transform: translateY(2px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
          20% {
            opacity: 0.8;
            filter: blur(1px);
            transform: translateY(-2px);
          }
          40% {
            opacity: 0.6;
            filter: blur(3px);
            transform: translateY(-4px);
          }
          60% {
            opacity: 0.4;
            filter: blur(4px);
            transform: translateY(-6px);
          }
          80% {
            opacity: 0.2;
            filter: blur(6px);
            transform: translateY(-8px);
          }
          100% {
            opacity: 0;
            filter: blur(8px);
            transform: translateY(-10px);
          }
        }
      `}</style>
      <span 
        className="absolute inset-x-0 top-0 m-auto block w-full transition-all"
        ref={text1Ref}
      />
      <span 
        className="absolute inset-x-0 top-0 m-auto block w-full transition-all"
        ref={text2Ref}
      />
    </div>
  )
}

const SvgFilters = () => (
  <svg id="filters" className="fixed h-0 w-0" preserveAspectRatio="xMidYMid slice">
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
)

const MorphingText = ({ texts, className }) => (
  <div
    className={cn(
      "relative mx-auto h-16 w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none [filter:url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]",
      className,
    )}
  >
    <Texts texts={texts} />
    <SvgFilters />
  </div>
)

export default MorphingText