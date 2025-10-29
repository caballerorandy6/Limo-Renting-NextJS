import { useEffect } from "react";

//Framer Motion
import { motion, animate } from "framer-motion";

//Store
import { useIncrementNumberStore } from "@/stores/incrementNumberStore";

const IncrementNumberHome = () => {
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
