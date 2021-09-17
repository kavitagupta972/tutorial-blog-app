
import { lazy } from "react";
import CustomErrorBoundaries from "../errorboundaries/CustomErrorBoundaries";
import LoginForm from "../login/LoginForm";

// const SearchComp = lazy(()=> import('../searchbar/SearchBar'));
const DisplayResult = lazy(() => import('../displayresult/DisplayResult'));

const Home = () => {

    return (
        <>
        <h1> Home Part</h1>
        <LoginForm></LoginForm>
        {/* <CustomErrorBoundaries>
    <SearchComp/> 
    </CustomErrorBoundaries> */}
    <CustomErrorBoundaries>
    <DisplayResult/>
    </CustomErrorBoundaries>
</>
    );
}

export default Home;