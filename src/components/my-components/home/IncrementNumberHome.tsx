import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

const IncrementNumberHome = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Anima el valor de 0 a 1000.
    const controls = animate(0, 30, {
      duration: 3,
      ease: "easeInOut",
      onUpdate: (value) => setCount(Math.round(value)),
    });

    // Limpia la animación cuando el componente se desmonta.
    return controls.stop;
  }, []);

  return (
    <motion.span
      className="text-white text-xl font-bold font-sans text-center"
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {count}
    </motion.span>
  );
};

export default IncrementNumberHome;
