import Forum from "../components/forum";
import Skeleton from "../components/Skeleton";

const App = () => {
    return (
        <>
            <Forum select={'chat'}>
                <Skeleton/>
                <div style={{height: '10px'}}/>
            </Forum>
        </>
    )
}

export default App