import Forum from "../../components/forum";
import ContentItem from "../../components/forum/ContentItem";

const App = () => {
    return (
        <>
            <Forum select={'news'}>
                <ContentItem/>
            </Forum>
        </>
    )
}

export default App