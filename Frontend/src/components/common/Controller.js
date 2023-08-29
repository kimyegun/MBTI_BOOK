const Controller = ({handleSetCount, count}) => {

    return (
        <div>
        <div>추천수:</div>
        <h1>{count}</h1>
        <button onClick={() => handleSetCount(+1)}>추천하기</button>
        </div>
    )
}
export default Controller;