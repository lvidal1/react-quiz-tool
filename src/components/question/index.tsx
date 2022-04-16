interface IQuestionOption {
    title: string;
}

interface IQuestion {
    title: string;
    options: IQuestionOption[];
}

interface QuestionProps {
    question: IQuestion;
}

const Question = ({ question }: QuestionProps) => <div className="bg-gray-100 p-3">
    <h2>{question.title}</h2>
    <div>
        {question.options.map(option => <>
            <input type="checkbox" name="" id="" />
        </>)}
    </div>
</div>;



export default Question;