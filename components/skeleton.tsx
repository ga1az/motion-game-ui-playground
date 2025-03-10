import { AnimatePresence, motion } from 'motion/react';

interface SkeletonProps {
  withWeapon?: boolean;
}

export default function SkeletonCharacter({ withWeapon }: SkeletonProps) {
  return (
    <AnimatePresence mode="wait">
      {withWeapon ? (
        <motion.svg
          key="weapon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 64 64"
          shapeRendering="crispEdges"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <title>skeleton</title>
          <path
            stroke="#24201f"
            d="M29 11h5M27 12h2M39 16h1M28 21h2M33 21h2M38 21h1M28 22h2M33 22h2M38 22h1M32 23h1M32 24h1M26 25h1M25 26h1M24 28h1M39 28h1M24 29h1M38 29h1M40 31h1M41 32h1M39 35h1M42 35h1M37 36h1M39 36h1M37 37h1M39 37h1M31 38h2M39 38h1M24 39h1M36 42h1M33 44h1M30 47h1M27 49h2M35 49h1"
          />
          <path
            stroke="#1c1c1c"
            d="M34 11h1M35 12h2M26 13h1M37 13h1M25 14h1M38 14h1M25 15h1M38 15h1M25 20h1M28 20h2M34 20h2M38 20h1M25 21h1M30 21h1M35 21h1M25 22h1M30 22h1M35 22h1M31 23h1M26 24h1M37 24h1M27 25h2M35 25h3M28 26h1M35 26h1M38 26h1M24 27h1M39 27h1M27 28h1M36 28h1M25 29h3M36 29h2M39 29h1M26 30h2M36 30h1M26 31h1M28 31h2M34 31h2M37 31h1M25 32h1M28 32h1M35 32h1M38 32h1M25 33h1M38 33h1M29 34h1M34 34h1M24 35h1M26 36h1M26 37h1M31 37h2M27 38h1M30 38h1M33 38h1M20 39h1M25 39h1M27 39h1M30 39h1M33 39h1M21 40h1M26 40h1M30 40h1M33 40h1M36 40h1M30 42h1M27 43h1M30 43h1M33 43h1M36 43h1M27 44h1M30 44h1M36 44h1M27 45h1M30 45h1M33 45h1M36 45h1M27 46h1M30 46h1M33 46h1M36 46h1M26 47h1M33 47h1M37 47h1M26 48h1M29 48h1M34 48h1M37 48h1M36 49h1"
          />
          <path
            stroke="#ba8b72"
            d="M29 12h1M36 13h1M33 20h1M28 27h1M30 28h2M39 30h1M25 31h1M31 32h3M40 34h1M40 36h1"
          />
          <path
            stroke="#fde8c3"
            d="M30 12h1M33 12h1M28 13h1M35 13h1M27 14h1M30 14h1M27 16h1M27 17h1M26 22h1M27 23h1M30 23h1M33 23h1M36 23h1M27 24h2M30 24h1M30 25h1M30 26h1M29 28h1M34 28h1M38 30h1M24 31h1M23 32h1M40 32h1M41 34h1M41 35h1M21 36h1M22 39h1"
          />
          <path
            stroke="#fce4be"
            d="M31 12h2M29 13h6M28 14h2M31 14h6M26 15h12M28 16h9M28 17h9M26 18h12M26 19h1M30 19h4M37 19h1M26 20h1M31 20h2M37 20h1M26 21h1M31 21h2M37 21h1M31 22h2M37 22h1M29 24h1M33 24h4M31 25h3M31 26h3M28 28h1M35 28h1M29 29h6M25 30h1M31 30h2M31 31h2M39 31h1M23 33h1M30 33h4M39 33h2M22 34h1M31 34h2M22 35h1M28 36h2M34 36h2M42 36h1M21 37h2M28 37h1M33 37h1M35 37h1M40 37h3M21 38h2M40 38h2M28 42h2M34 42h2"
          />
          <path
            stroke="#b4846e"
            d="M34 12h1M27 13h1M26 14h1M37 16h2M37 17h1M38 18h1M38 19h1M36 21h1M35 27h1M32 28h2M24 30h1M33 30h1M33 31h1M29 32h2M22 33h1M40 35h1M22 36h1M41 36h1M36 37h1M42 38h1M21 39h1"
          />
          <path stroke="#c48f74" d="M37 14h1M30 20h1M29 25h1" />
          <path
            stroke="#351f1d"
            d="M24 16h1M24 17h1M24 18h1M29 23h1M35 23h1M29 27h1M23 30h1M40 30h1M22 32h1M21 33h1M36 33h2M26 34h1M37 34h1M39 34h1M20 36h1M43 36h1M36 39h1M40 39h1M20 41h1M25 41h1M29 41h2M34 41h3M20 42h1M25 42h1M27 42h1M33 42h1M21 43h1M24 43h1M28 43h2M23 44h1M23 45h1M20 46h1M23 46h1M23 47h1M22 49h1"
          />
          <path
            stroke="#ad7f6a"
            d="M25 16h2M25 17h2M38 17h1M25 18h1M25 19h1M27 19h2M36 19h1M36 20h1M27 22h1M36 22h1M28 30h1M30 30h1M34 30h2M30 31h1M38 31h1M34 32h1M23 34h1M30 34h1M33 34h1M23 35h1M23 36h1"
          />
          <path
            stroke="#332221"
            d="M39 17h1M39 18h1M24 19h1M31 24h1M34 27h1M37 30h1M23 31h1M41 33h1M21 34h1M42 34h1M21 35h1M20 37h1M43 37h1M20 38h1M37 38h1M43 38h1M42 39h1M21 44h1M21 45h1M20 47h1M20 48h1M22 48h1M20 49h1M21 50h1"
          />
          <path stroke="#ce9a7a" d="M29 19h1M34 19h1M28 29h1M23 39h1" />
          <path
            stroke="#a77864"
            d="M35 19h1M29 30h1M24 32h1M39 32h1M29 33h1M27 37h1"
          />
          <path
            stroke="#3e211e"
            d="M39 19h1M28 23h1M34 23h1M30 27h4M26 33h2M35 33h1M24 34h1M28 34h1M35 34h1M30 36h1M36 36h1M27 41h2M33 41h1M34 43h2"
          />
          <path stroke="#a5806c" d="M27 20h1M27 21h1M34 33h1" />
          <path stroke="#825d47" d="M26 23h1M37 23h1M34 26h1" />
          <path stroke="#bb9177" d="M34 25h1M35 29h1M41 39h1" />
          <path
            stroke="#cc2833"
            d="M26 26h1M37 26h1M26 27h2M37 27h1M28 39h2M34 39h2"
          />
          <path
            stroke="#c42a31"
            d="M27 26h1M36 26h1M36 27h1M28 38h2M34 38h3M26 39h1"
          />
          <path stroke="#7d513e" d="M29 26h1" />
          <path stroke="#850621" d="M25 27h1M38 27h1M26 28h1M38 28h1M24 38h3" />
          <path stroke="#940722" d="M25 28h1M37 28h1M28 40h2M34 40h2" />
          <path stroke="#f4dab2" d="M24 33h1M30 37h1" />
          <path
            stroke="#4b2318"
            d="M28 33h1M27 35h1M30 35h1M33 35h1M36 35h1M27 36h1M33 36h1"
          />
          <path stroke="#7b3d26" d="M27 34h1M36 34h1M26 35h1" />
          <path
            stroke="#713829"
            d="M28 35h1M31 35h2M37 35h1M28 44h2M34 44h2M27 47h3M34 47h3"
          />
          <path stroke="#693220" d="M29 35h1M34 35h2" />
          <path stroke="#6e0e24" d="M24 36h1M24 37h1" />
          <path stroke="#f2b61c" d="M31 36h2" />
          <path stroke="#d8ac89" d="M23 37h1M23 38h1" />
          <path stroke="#982c2f" d="M29 37h1M34 37h1" />
          <path stroke="#898785" d="M22 40h2M22 42h1M21 46h1" />
          <path
            stroke="#cadae3"
            d="M24 40h2M21 41h4M21 42h1M23 42h2M22 43h2M22 44h1M22 45h1M22 46h1M21 47h2M21 48h1M21 49h1"
          />
          <path stroke="#6b051c" d="M27 40h1" />
          <path
            stroke="rgba(84,84,87,0.403921568627451)"
            d="M25 45h2M37 45h3M24 46h3M31 46h2M37 46h4M24 47h2M31 47h2M38 47h4M23 48h3M30 48h4M38 48h4M24 49h3M29 49h6M37 49h4M25 50h15"
          />
          <path
            stroke="#9d5a3e"
            d="M28 45h2M34 45h2M28 46h2M34 46h2M27 48h2M35 48h2"
          />
        </motion.svg>
      ) : (
        <motion.svg
          key="base"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 64 64"
          shapeRendering="crispEdges"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <title>skeleton</title>
          <path
            stroke="#231d22"
            d="M30 11h4M28 12h2M35 12h1M26 13h2M36 13h2M25 14h1M25 15h1M38 15h1M24 17h1M39 17h1M24 18h1M39 18h1M24 19h1M39 19h1M28 20h2M33 20h3M25 21h1M27 21h4M33 21h4M38 21h1M25 22h1M27 22h4M33 22h4M38 22h1M25 23h1M28 23h2M32 23h1M34 23h2M38 23h1M31 24h2M37 24h1M25 26h2M36 26h3M24 27h1M34 27h2M24 28h1M31 28h3M39 28h1M23 29h1M26 29h2M35 29h2M23 30h1M26 30h5M33 30h5M40 30h1M23 31h1M26 31h5M33 31h5M40 31h1M25 32h1M27 32h1M36 32h1M21 33h1M25 33h3M36 33h3M21 34h1M26 34h1M35 34h1M37 34h1M42 34h1M21 35h1M26 35h1M29 35h2M32 35h2M37 35h1M42 35h1M20 36h1M24 36h1M26 36h1M37 36h1M39 36h1M24 37h1M26 37h1M37 37h1M39 37h1M19 38h1M24 38h1M31 38h2M39 38h1M44 38h1M24 39h1M39 39h1M43 39h1M22 40h2M27 40h1M30 40h1M33 40h1M40 40h3M30 41h1M33 41h1M27 42h1M30 42h1M33 42h1M36 42h1M27 43h1M30 43h1M36 43h1M27 44h1M36 44h1M25 46h1M30 46h1M33 46h1M36 46h1M25 47h1M29 47h2M33 47h1M35 47h1M38 47h1M26 48h3M35 48h3"
          />
          <path
            stroke="#fefdcf"
            d="M30 12h3M29 13h5M27 14h10M27 15h10M26 16h12M26 17h12M26 18h12M26 19h2M30 19h4M36 19h2M26 20h1M31 20h2M37 20h1M26 21h1M31 21h2M37 21h1M31 22h2M30 23h1M33 23h1M29 24h2M33 24h2M29 25h2M32 25h3M30 26h1M33 26h1M34 29h1M25 30h1M24 31h1M31 31h1M30 32h2M22 34h1M32 34h1M41 34h1M22 35h1M40 36h1M42 36h1M20 37h3M41 37h1M20 38h1M22 38h2M40 38h2M43 38h1M22 39h2M41 39h1M28 41h2M34 41h2M28 42h2M34 42h2"
          />
          <path
            stroke="#ffffda"
            d="M33 12h1M34 13h1M27 23h1M36 23h1M28 24h1M35 24h1M31 25h1M31 27h2M25 29h1M29 29h2M33 29h1M38 29h1M38 30h1M32 31h1M39 31h1M29 32h1M32 32h3M23 33h1M40 33h1M31 34h1M41 35h1M21 36h1M23 36h1M42 37h2"
          />
          <path
            stroke="#1e181e"
            d="M34 12h1M38 14h1M24 16h1M39 16h1M28 19h2M34 19h2M25 20h1M27 20h1M30 20h1M36 20h1M38 20h1M31 23h1M26 24h1M27 25h1M36 25h1M27 26h1M28 27h2M39 27h1M27 28h1M30 28h1M36 28h1M28 29h1M37 29h1M40 29h1M22 32h1M38 32h1M41 32h1M42 33h1M28 34h3M33 34h2M24 35h1M31 35h1M34 35h1M39 35h1M43 36h1M19 37h1M44 37h1M30 38h1M33 38h1M20 39h1M27 39h1M30 39h1M33 39h1M36 39h1M21 40h1M36 40h1M27 41h1M36 41h1M33 43h1M26 45h1M30 45h1M33 45h1M37 45h1M27 46h1M38 46h1M28 47h1M34 47h1"
          />
          <path
            stroke="#ddbb89"
            d="M28 13h1M26 14h1M37 15h1M25 16h1M25 17h1M38 17h1M25 18h1M25 19h1M35 25h1M31 26h1M34 26h1M34 28h1M24 29h1M31 29h1M39 29h1M31 30h2M23 32h1M28 32h1M35 32h1M28 33h3M32 33h4M40 34h1M40 39h1M28 43h2M34 43h1M28 44h2M34 44h2M27 45h2M34 45h2M28 46h2M34 46h2"
          />
          <path
            stroke="#e2c18b"
            d="M35 13h1M37 14h1M38 16h1M38 18h1M38 19h1M36 27h1M35 28h1M39 30h1M40 32h1M31 33h1M36 45h1"
          />
          <path
            stroke="#d5b585"
            d="M26 15h1M26 23h1M28 26h2M32 26h1M30 27h1M32 29h1M24 30h1M22 33h1M40 35h1M22 36h1M40 37h1M21 38h1M42 38h1M21 39h1"
          />
          <path stroke="#efd497" d="M26 22h1M37 22h1M28 28h1" />
          <path
            stroke="#debe81"
            d="M37 23h1M36 24h1M35 26h1M27 27h1M29 28h1M39 32h1M41 33h1M35 43h1"
          />
          <path
            stroke="#d9ba82"
            d="M27 24h1M28 25h1M33 27h1M25 31h1M38 31h1M24 32h1M24 33h1M39 33h1M23 34h1M23 35h1M41 36h1M23 37h1M42 39h1M29 45h1"
          />
          <path
            stroke="#923a35"
            d="M25 27h2M37 27h2M25 28h2M37 28h2M24 34h1M27 34h1M36 34h1M28 40h2M34 40h2"
          />
          <path stroke="#823132" d="M39 34h1M33 36h1M34 37h1M27 38h1" />
          <path
            stroke="#8b3435"
            d="M27 35h1M36 35h1M30 36h1M32 36h1M29 37h2M36 38h1"
          />
          <path
            stroke="#db6644"
            d="M28 35h1M35 35h1M27 36h2M36 36h1M27 37h2M36 37h1M29 38h1M34 38h1M28 39h2M34 39h2M26 46h1M37 46h1M37 47h1"
          />
          <path
            stroke="#da6242"
            d="M29 36h1M31 36h1M34 36h2M31 37h1M35 37h1M28 38h1M35 38h1M26 47h2M36 47h1"
          />
          <path stroke="#d3533d" d="M32 37h2" />
          <path
            stroke="rgba(105,105,108,0.3058823529411765)"
            d="M23 46h2M31 46h2M39 46h2M22 47h3M31 47h2M39 47h3M22 48h4M29 48h6M38 48h4M23 49h18M25 50h15"
          />
        </motion.svg>
      )}
    </AnimatePresence>
  );
}
