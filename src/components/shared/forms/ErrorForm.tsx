import React from "react";

// Interfaces
import { ErrorFormProps } from "@/types/forms";

const ErrorForm = ({ children }: ErrorFormProps) => {
  if (!children || React.Children.count(children) !== 1) return null; // Add count check
  return <p className="font-sans text-sm text-red-500">{children}</p>;
};

export default ErrorForm;
