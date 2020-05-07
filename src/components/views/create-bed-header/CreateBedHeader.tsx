import React, { FC } from "react";
import {
  Stack,
  StackItem,
  Text,
  IStackTokens,
  CommandBar,
  ICommandBarItemProps,
  Separator,
  ICommandBarStyles,
  IContextualMenuItem,
} from "@fluentui/react";

const headerTokens: IStackTokens = {
  childrenGap: 15,
};

interface ICreateBedHeader {
  onCreateBedClick: (
    ev?:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLElement>
      | undefined,
    item?: IContextualMenuItem | undefined
  ) => boolean | void;
}

export const CreateBedHeader: FC<ICreateBedHeader> = ({ onCreateBedClick }) => {
  const items: ICommandBarItemProps[] = [
    {
      key: "new-bed",
      text: "Criar Leito",
      style: { color: "blue" },
      onClick: onCreateBedClick,
    },
  ];

  const commandStyles: ICommandBarStyles = { root: { paddingLeft: 0 } };

  return (
    <Stack
      horizontal
      horizontalAlign="start"
      verticalAlign="center"
      tokens={headerTokens}
    >
      <StackItem>
        <Text variant="large">Cadastrar Leitos</Text>
      </StackItem>

      <StackItem>
        <Separator vertical />
      </StackItem>

      <StackItem>
        <CommandBar styles={commandStyles} items={items} />
      </StackItem>
    </Stack>
  );
};
