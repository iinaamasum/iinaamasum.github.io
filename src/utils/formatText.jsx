const formatText = (text) => {
  // Regex to split the text into bold patterns, link patterns, and plain text
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/);

  return parts.map((part, index) => {
    if (part.match(/^\*\*(.*?)\*\*$/)) {
      // Bold pattern: **bold text**
      return (
        <strong key={index}>
          {part.replace(/\*\*/g, "")} {/* Remove the ** */}
        </strong>
      );
    } else if (part.match(/^\[.*?\]\(.*?\)$/)) {
      // Link pattern: [link text](url)
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      return (
        <a
          key={index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer">
          {match[1]}
        </a>
      );
    }
    // Return plain text for everything else
    return <span key={index}>{part}</span>;
  });
};

export default formatText;
