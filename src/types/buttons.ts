import { ReactNode } from "react";

export interface ButtonProps {
  children: string;
  icon?: ReactNode;
}

export interface ServiceOptionsButtonProps extends ButtonProps {
  href: string;
}
