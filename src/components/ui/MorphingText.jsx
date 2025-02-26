import { useCallback, useEffect, useRef } from "react"
import { cn } from "../../lib/utils"

const morphTime = 1.5
const cooldownTime = 0.5

const useMorphingText = (texts) => {
  const textIndexRef = useRef(0)
  const morphRef = useRef(0)
  const cooldownRef = useRef(0)
  const timeRef = useRef(new Date())

  const text1Ref = useRef(null)
  const text2Ref = useRef(null)

  const setStyles = useCallback(
    (fraction) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current]
      if (!current1 || !current2) return

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

      const invertedFraction = 1 - fraction
      current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`

      current1.textContent = texts[textIndexRef.current % texts?.length]
      current2.textContent = texts[(textIndexRef.current + 1) % texts?.length]
    },
    [texts],
  )

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current
    cooldownRef.current = 0

    let fraction = morphRef.current / morphTime

    if (fraction > 1) {
      cooldownRef.current = cooldownTime
      fraction = 1
    }

    setStyles(fraction)

    if (fraction === 1) {
      textIndexRef.current++
    }
  }, [setStyles])

  const doCooldown = useCallback(() => {
    morphRef.current = 0
    cooldownRef.current -= cooldownTime
    if (cooldownRef.current <= 0) {
      cooldownRef.current = 0
      morphRef.current = 0
    }
  }, [])

  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate)

      const newTime = new Date()
      const shouldIncrementTime = cooldownRef.current === 0

      const dt = (newTime - timeRef.current) / 1000
      timeRef.current = newTime

      if (cooldownRef.current > 0) {
        doCooldown()
      } else if (morphRef.current < morphTime) {
        morphRef.current += shouldIncrementTime ? dt : 0
        doMorph()
      }
    }

    animate()
  }, [doMorph, doCooldown])

  return { text1Ref, text2Ref }
}

const Texts = ({ texts }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts)

  return (
    <>
      <span ref={text1Ref}>{texts[0]}</span>
      <span ref={text2Ref}>{texts[1]}</span>
    </>
  )
}

const SvgFilters = () => {
  return (
    <svg className="absolute">
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
}

const MorphingText = ({ texts, className }) => {
  return (
    <div className={cn("relative", className)}>
      <SvgFilters />
      <Texts texts={texts} />
    </div>
  )
}

export default MorphingText
