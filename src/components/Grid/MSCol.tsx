import React, { ReactNode } from "react";

interface IMSColProps {
  children?: ReactNode;
  className?: string;
}

export const MSCol: React.FC<IMSColProps> = ({ children, className }) => (
  <div className={`ms-Grid-col ${className}`}>{children}</div>
);
