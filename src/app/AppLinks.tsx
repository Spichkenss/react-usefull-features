import {Link} from "react-router-dom";

export const AppLinks = () => {
  return (
    <nav>
      <h1>Navigation</h1>
      <br/>
      <Link to={'/cva'}>CVA Demo</Link>
      <Link to={'/compound'}>Compound components</Link>
      <Link to={'/portal'}>Portal</Link>
    </nav>
  )
}
