import React, { FC } from "react";
import _ from "lodash";
import {
  Stack,
  IStackStyles,
  StackItem,
  Text,
  Separator,
} from "@fluentui/react";
import { BedListItem } from "./bed-item/BedListItem";
import { IBed } from "../../../types/models/bed.interface";
import { IInternship } from "../../../types/models/internship.interface";

interface IBedsListProps {
  beds: any;
}

const stackStyling: IStackStyles = {
  root: {
    height: "85vh",
    overflowY: "scroll",
    overflowX: "hidden",
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 16,
  },
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  maxHeight: "89vh",
};

const listStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginBottom: 16,
};

export const BedsList: FC<IBedsListProps> = ({ beds }) => {
  if (beds.length === 0) {
    return (
      <Stack
        verticalAlign="center"
        horizontalAlign="center"
        styles={stackStyling}
      >
        <StackItem>
          <Text variant="large">Todos os leitos estão vazios</Text>
        </StackItem>
      </Stack>
    );
  }

  return (
    <div style={containerStyle}>
      {_.map(_.keys(beds), (key) => {
        return (
          <div>
            <Separator alignContent="start">
              <Text
                variant="medium"
                style={{ color: "#3498DB", fontWeight: "bold" }}
              >
                {key}
              </Text>
            </Separator>

            <div style={listStyle}>
              {beds[key].map((bed: IInternship, index: number) => (
                <BedListItem key={index} internship={bed}></BedListItem>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
