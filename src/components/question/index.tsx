
interface IQuestion {
    title: string;
}

interface QuestionProps {
    question: IQuestion;
}

const Question = ({ question }: QuestionProps) => <div>
    {question.title}
</div>;



export default Question;