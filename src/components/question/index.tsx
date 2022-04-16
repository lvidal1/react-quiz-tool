
interface IQuestion {
    title: string;
}

interface QuestionProps {
    question: IQuestion;
}

const Question = ({ question }: QuestionProps) => <div>
    <h2>{question.title}</h2>
</div>;



export default Question;