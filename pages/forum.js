import Forum from "../components/forum";
import Skeleton from "../components/Skeleton";
import QuestionItem from "../components/forum/QuestionItem";

const App = () => {
    let tiles = [
        '如何看待女子从武汉回河南后至今无症状，其 5 名亲人患新型肺炎？',
        '哪些内容才能算作是数字遗产，价值如何评估？',
        '如何评价 1 月 28 日毕志飞怒斥徐峥，喊话徐峥「滚出电影圈」？'
    ]
    return (
        <>
            <Forum select={'chat'}>
                {/*<Skeleton/>*/}
                {
                    tiles.map((title, index) => <QuestionItem title={title} key={index}/>)
                }
            </Forum>
        </>
    )
}

export default App