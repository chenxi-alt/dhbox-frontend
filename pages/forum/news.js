import Forum from "../../components/forum";
import NewsContentItem from "../../components/forum/NewsContentItem";

const App = () => {
    return (
        <>
            <Forum select={'news'}>
                <NewsContentItem/>
            </Forum>
        </>
    )
}

export default App