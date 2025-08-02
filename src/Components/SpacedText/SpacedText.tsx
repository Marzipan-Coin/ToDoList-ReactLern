const SpacedText = ({ text, interval }: { text: string, interval: number }) => {
    const separateText = () => {
        let currentIndex = 0;
        let result = "";

        if (text.includes(' ')) {
            return text;
        }

        if (text.length <= interval) {
            return text;
        }

        while (currentIndex < text.length) {
            const nextIndex = currentIndex + interval;
            result += text.substring(currentIndex, nextIndex) + ' ';
            currentIndex = nextIndex;
        }
        return result;
    };

    return (
        <span>
            {separateText()}
        </span>
    );
};

export default SpacedText;
