import { redirect } from "next/navigation";

const Info = () => {
  // Redirige al usuario a la página principal
  redirect("/");
  return null; // No se renderiza nada, porque ya se está redirigiendo
};

export default Info;
