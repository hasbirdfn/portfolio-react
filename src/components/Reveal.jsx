import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Reveal = ({ children, width = 'fit-content' }) => {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    // Mulai animasi saat elemen terlihat
    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>

        <motion.div
        variants={{
            hidden: { opacity: 0, y: 75 }, // Elemen tersembunyi
            visible: { opacity: 1, y: 0 }, // Elemen terlihat
        }}
        initial="hidden"  // Mulai dari status "hidden"
        animate={mainControls}  // Animasi berubah sesuai kontrol 
        transition={{ duration: 0.5, delay: 0.25 }}  // Durasi dan delay animasi
        >
            {children}
        </motion.div>
        
    </div>
  )
}

export default Reveal
/* 
    Cara Kerja Reveal
    1. useInView: Mengecek apakah elemen pada ref terlihat di layar.
    2. useAnimation: Mengontrol status animasi (dari hidden ke visible).
*/
