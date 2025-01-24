export interface ButtonProps {
  children: string;
  icon?: JSX.Element;
}

export interface ServiceOptionsButtonProps extends ButtonProps {
  href: string;
}
