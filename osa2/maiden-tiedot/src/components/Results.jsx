import Details from "./Details.jsx"

const Results = ({ data, setData }) => {
    if (data === null) {
        return (
            <div>
                <p>Type in to search</p>
            </div>
        )
    }

    if (data.length === 0) {
        return (
            <div>
                <p>No results</p>
            </div>
        )
    }

    if (data.length > 10) {
        return (
            <div>
                <p>To many results</p>
            </div>
        )
    }

    if (data.length > 1) {
        return (
            <div>
                {data.map(data => <p key={data.name.common}>{data.name.common} <button onClick={() => setData([data])}>Show</button></p>)}
            </div>
        ) 
    }

    return (
        <div>
            <Details country={data[0]}/>
        </div>
    )
}

export default Results