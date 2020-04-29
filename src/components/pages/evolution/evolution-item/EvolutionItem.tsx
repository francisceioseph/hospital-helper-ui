import React, { FC } from "react";
import { ActivityItem, Icon, mergeStyleSets } from "@fluentui/react";
import { IEvolution } from "../../../../types/models/evolution.interface";
import { EvolutionTitle } from "./EvolutionTitle";

import Moment from "react-moment";
import "moment/locale/pt-br";
import "moment-timezone";

interface IEvolutionItemProps {
  evolution: IEvolution;
}

const classNames = mergeStyleSets({
  exampleRoot: {
    marginTop: "20px",
  },

  timestampContainer: {
    marginTop: 8,
  },

  timestamp: {
    padding: 2,
    border: "1px solid lightgrey",
    borderRadius: 2,
  },
});

export const EvolutionItem: FC<IEvolutionItemProps> = ({ evolution }) => {
  const item = {
    key: evolution.id,
    activityDescription: [<EvolutionTitle evolution={evolution} />],
    comments: [<span>{evolution.text}</span>],
    activityIcon: <Icon iconName={"EntitlementRedemption"} />,
    timeStamp: (
      <div className={classNames.timestampContainer}>
        <span className={classNames.timestamp}>
          <Moment fromNow date={evolution.createdAt} />
        </span>
      </div>
    ),
  };

  return (
    <ActivityItem {...item} key={item.key} className={classNames.exampleRoot} />
  );
};
