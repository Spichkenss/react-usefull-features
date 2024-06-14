import {AppLinks} from "./AppLinks.tsx";
import {Outlet} from "react-router";

export const AppLayout = () => {
  return (
    <>
      <aside>
        <AppLinks/>
      </aside>
      <main>
        <Outlet/>
      </main>
    </>
  )
}
