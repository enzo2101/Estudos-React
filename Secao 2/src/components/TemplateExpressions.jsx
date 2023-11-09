
const TemplateExpressions = ({ name, age, job }) => {

    return (
        <div>
            <h1>Olá, {name}</h1>
            <p>você tem {age}</p>
            <p>e você é {job}</p>
        </div>
    )
}

export default TemplateExpressions