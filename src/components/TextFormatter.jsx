import formatText from "../utils/formatText";

// eslint-disable-next-line react/prop-types
const TextFormatter = ({ text }) => {
  return <p>{formatText(text)}</p>;
};

export default TextFormatter;
