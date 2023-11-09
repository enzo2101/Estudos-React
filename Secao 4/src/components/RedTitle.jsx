import './RedTitle.css'

const RedTitle = (props) => {
  return (
    <div>
        <h3 className={props.redtitle ? "redtitle" : "title"}>RedTitle Aqui</h3>
    </div>
  )
}

export default RedTitle