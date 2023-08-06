"use client"

import {FC} from 'react'
import { Drawer } from 'vaul';

interface DrawerWithNoStyleProps {}

const DrawerWithNoStyle: FC<DrawerWithNoStyleProps> = ({}) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Open</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content>
          <p>Content</p>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default DrawerWithNoStyle;