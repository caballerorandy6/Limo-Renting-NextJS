import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

const IncrementNumber = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Anima el valor de 0 a 1000.
    const controls = animate(0, 30, {
      duration: 2,
      ease: "easeInOut",
      onUpdate: (value) => setCount(Math.round(value)), // Actualiza el estado con el valor redondeado.
    });

    // Limpia la animación cuando el componente se desmonta.
    return controls.stop;
  }, []);

  return (
    <motion.div
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "#ff6347",
      }}
    >
      {count}
    </motion.div>
  );
};

export default IncrementNumber;
