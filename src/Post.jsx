export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <br/>
      <p>{props.content}</p>
    </div>
  )
}