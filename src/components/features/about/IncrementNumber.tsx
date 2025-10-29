import { motion, animate } from "framer-motion";
import { useEffect } from "react";

// Store
import { useIncrementNumberStore } from "@/stores/incrementNumberStore";

const IncrementNumber = () => {
  const { count, setCount } = useIncrementNumberStore();

  useEffect(() => {
    // Anima el valor de 0 a 30.
    const controls = animate(0, 30, {
      duration: 2,
      ease: "easeInOut",
      onUpdate: (value) => setCount(value),
    });

    // Limpia la animación cuando el componente se desmonta.
    return controls.stop;
  }, [setCount]);

  return (
    <motion.div
      className="text-red-600 text-xl font-bold font-sans text-center"
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {count}
    </motion.div>
  );
};

export default IncrementNumber;
