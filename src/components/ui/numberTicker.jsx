import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const NumberTicker = ({
    color = "#FF6D00",
    value,
    direction = "up",
    delay = 0,
    className = "",
    decimalPlaces = 0,
    ...props
}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            motionValue.set(direction === "down" ? 0 : value);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [motionValue, delay, value, direction]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US", {
                    minimumFractionDigits: decimalPlaces,
                    maximumFractionDigits: decimalPlaces,
                }).format(Number(latest.toFixed(decimalPlaces)));
            }
        });
    }, [springValue, decimalPlaces]);

    return (
        <span
            ref={ref}
            style={{ color: color }}
            className={`inline-block tabular-nums tracking-wider ${className}`}
            {...props}
        />
    );
};

export default NumberTicker;
