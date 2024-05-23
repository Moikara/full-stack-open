const Error = ({ error }) => {
    if (error) {
        return (
            <div className="error">{error}</div>
        )
    }

    return null
}

export default Error