import {Route, Routes} from "react-router";
import {CvaDemoPage} from "../features/cva/pages/CvaDemoPage.tsx";
import {AppLayout} from "./AppLayout.tsx";
import {CompoundDemoPage} from "../features/compound-components/pages/CompoundDemoPage.tsx";
import {PortalDemoPage} from "../features/portal-modal/PortalDemoPage.tsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path={'/cva'} element={<CvaDemoPage/>}/>
        <Route path={'/compound'} element={<CompoundDemoPage/>}/>
        <Route path={'/portal'} element={<PortalDemoPage/>}/>
      </Route>
    </Routes>
  )
}

