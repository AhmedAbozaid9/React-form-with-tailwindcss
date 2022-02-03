export default function FormButton(props) {
  return (
    <button className="p-5 mt-8 text-xl text-white font-semibold bg-gradient-to-r from-sky-500 to-fuchsia-200">
      {props.content}
    </button>
  );
}
