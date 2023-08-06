"use client";

import { FC } from "react";
import { Drawer } from "vaul";

interface DrawerWithNoStyleProps {}

const DrawerWithNoStyle: FC<DrawerWithNoStyleProps> = ({}) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger className="bg-slate-800 text-white py-1 px-3 rounded-md m-2">
          スタイル無しの Drawer
      </Drawer.Trigger>
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
