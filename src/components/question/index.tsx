interface IQuestionOption {
    id: string;
    title: string;
}

interface IQuestion {
    title: string;
    options: IQuestionOption[];
}

interface QuestionProps {
    question: IQuestion;
}

const Question = ({ question }: QuestionProps) => <div className="p-4 w-full sm:w-3/5 lg:w-96 mx-auto">
    <h2 className="pb-2 text-md lg:text-lg font-bold">{question.title}</h2>
    <div className="flex flex-col space-y-2">
        {question.options.map(option => <div key={option.id}>
            <input className="hidden" type="checkbox" name="radio" id={`q-${option.id}`} />
            <label className="flex flex-col p-2 border-2 border-gray-400 cursor-pointer rounded-md" htmlFor={`q-${option.id}`}>
                <span className="text-md">{option.title}</span>
            </label>
        </div>)}
    </div>
</div>;



export default Question;