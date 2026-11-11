import { AskQuestion } from "@/components/AskQuestion";
import { Question } from "@/components/Question";
import { fetchQuestions, fetchTopic } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";

export default async function Page({ params }: { params: { id: string } }) {
    await new Promise((r) => setTimeout(r, 3000));
    const topic = await fetchTopic(params.id);
    const questions = await fetchQuestions(params.id);

    if (!topic) {
        return <div>Topic not found</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-black flex items-center">
                <HashtagIcon className="h-6 w-6 mr-2" /> {topic.title}
            </h1>
            <AskQuestion topic={topic.id} />
            {questions.map((question) => (
                <Question
                    key={question.id}
                    id={question.id}
                    text={question.title}
                    votes={question.votes}
                />
            ))}
        </div>
    );
}
