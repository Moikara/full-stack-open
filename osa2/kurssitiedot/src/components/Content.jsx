import Part from "./Part"
import Total from "./Total"

const Content = ({ parts }) => {
    const total = parts.reduce((a, b) => a + b.exercises, 0)

    return (
        <div>
            <table>
                <tbody>
                    {parts.map((part) => <Part key={part.id} content={part} />)}
                </tbody>
            </table>
            <Total total={total} />
        </div>
    )
}

export default Content