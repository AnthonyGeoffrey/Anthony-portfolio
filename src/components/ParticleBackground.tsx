import { memo, useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { useIsMobile } from "@/hooks/use-mobile";

const ParticleBackgroundComponent = () => {
  const isMobile = useIsMobile();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: false,
      fpsLimit: isMobile ? 30 : 45,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: { value: isMobile ? 24 : 40, density: { enable: true, area: 900 } },
        color: { value: "#3B82F6" },
        opacity: {
          value: { min: 0.1, max: 0.35 },
          animation: { enable: true, speed: 0.3, sync: false },
        },
        size: { value: { min: 1, max: isMobile ? 2 : 3 } },
        move: {
          enable: true,
          speed: isMobile ? 0.35 : 0.5,
          direction: "none",
          outModes: { default: "out" },
        },
        links: {
          enable: true,
          distance: isMobile ? 110 : 140,
          color: "#3B82F6",
          opacity: isMobile ? 0.08 : 0.12,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: !isMobile, mode: "grab" },
        },
        modes: {
          grab: { distance: 150, links: { opacity: 0.3 } },
        },
      },
      detectRetina: false,
    }),
    [isMobile],
  );

  return <Particles id="hero-particles" particlesInit={particlesInit} options={options} className="absolute inset-0 z-0" />;
};

const ParticleBackground = memo(ParticleBackgroundComponent);
ParticleBackground.displayName = "ParticleBackground";

export default ParticleBackground;
