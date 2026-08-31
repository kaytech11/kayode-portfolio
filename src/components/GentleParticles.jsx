// import { useEffect, useRef } from "react";

// const GentleParticles = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let animationFrame;
//     let particles = [];

//     const resizeCanvas = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };

//     const createParticles = () => {
//       particles = Array.from({ length: 35 }, () => ({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 2 + 0.5,
//         speedX: (Math.random() - 0.5) * 0.15,
//         speedY: (Math.random() - 0.5) * 0.15,
//         opacity: Math.random() * 0.5 + 0.2,
//       }));
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle) => {
//         particle.x += particle.speedX;
//         particle.y += particle.speedY;

//         // Keep particles inside the canvas
//         if (particle.x < 0) particle.x = canvas.width;
//         if (particle.x > canvas.width) particle.x = 0;
//         if (particle.y < 0) particle.y = canvas.height;
//         if (particle.y > canvas.height) particle.y = 0;

//         ctx.beginPath();
//         ctx.arc(
//           particle.x,
//           particle.y,
//           particle.size,
//           0,
//           Math.PI * 2
//         );

//         ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
//         ctx.fill();
//       });

//       animationFrame = requestAnimationFrame(animate);
//     };

//     resizeCanvas();
//     createParticles();
//     animate();

//     window.addEventListener("resize", resizeCanvas);

//     return () => {
//       cancelAnimationFrame(animationFrame);
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="w-full h-full"
//     />
//   );
// };

// export default GentleParticles;

import { useEffect, useRef } from "react";

const GentleParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let particles = [];

    const PARTICLE_COUNT = 35;
    const CONNECTION_DISTANCE = 120;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;

        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const particleA = particles[i];
          const particleB = particles[j];

          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity =
              (1 - distance / CONNECTION_DISTANCE) * 0.15;

            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);

            // ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.strokeStyle = `rgba(30, 215, 96, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        // ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fillStyle = `rgba(30, 215, 96, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  );
};

export default GentleParticles;