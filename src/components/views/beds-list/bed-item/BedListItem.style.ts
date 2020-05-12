import { ICardSectionStyles } from "@uifabric/react-cards";
import { IIconStyles, FontWeights, IStackItemStyles } from "@fluentui/react";

export const footerCardSectionStyles: ICardSectionStyles = {
  root: {
    borderTop: "1px solid #F3F2F1",
    margin: 8,
  },
};

export const iconStyles: IIconStyles = {
  root: {
    color: "#0078D4",
    fontSize: 16,
    fontWeight: FontWeights.regular,
    cursor: "pointer",
  },
};

export const rootStackItemStyles: IStackItemStyles = {
  root: {
    height: "fit-content",
  },
};
