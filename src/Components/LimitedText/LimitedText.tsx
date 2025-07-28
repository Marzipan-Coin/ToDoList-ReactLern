const LimitedText = ({ text, limit }: { text: string; limit: number }) => {
  if (text.length <= limit) {
    return <span>{text}</span>;
  }
  return <span>{text.slice(0, limit)}...</span>;
};

export default LimitedText;