import DrawerNestedDrawers from "@/components/drawer-nested-drawers";
import DrawerNonDismissible from "@/components/drawer-non-dismissible";
import DrawerScrollableWithInputs from "@/components/drawer-scrollable-with-inputs";
import DrawerWithNoStyle from "@/components/drawer-with-no-style";
import DrawerWithScaledBackground from "@/components/drawer-with-scaled-background";
import DrawerWithoutScaledBackground from "@/components/drawer-without-scaled-background";

export default function Home() {
  return (
    <main className="flex flex-col items-start">
      <DrawerWithNoStyle />
      <DrawerWithScaledBackground />
      <DrawerWithoutScaledBackground />
      <DrawerScrollableWithInputs />
      <DrawerNestedDrawers />
      <DrawerNonDismissible /> 
    </main>
  )
}