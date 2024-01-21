const Post = ({ title, text, img, marked }) => {
  return (
    <div style={{ background: marked ? 'rgb(238, 209, 209)' : '' }}>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={img} alt={title} />
    </div>
  )
}
export default Post





// Пример как работает props
export const sum = (props) => {
  return props.a + props.b;
};
sum({ a: 4, b: 5 });

export class PostComponent {
  constructor(props) {
    this.title = props.title;
  }
}
