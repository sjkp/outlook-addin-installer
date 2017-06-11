import * as React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { items } from "./command-bar-items";

export default class CommandBarNonFocusableItemsExample extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <CommandBar
          isSearchBoxVisible={ false }
          items={ items }
        />
      </div>
    );
  }

}


        //   farItems={ farItemsNonFocusable }