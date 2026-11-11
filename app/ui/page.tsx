import { Topic } from "@/components/Topic";
import { fetchTopics } from "@/lib/data";

export default async function Page() {
    const topics = await fetchTopics();
    return (
        <main className="flex flex-col items-stretch justify-stretch">
            <h1 className="mb-4 text-xl md:text-2xl">Topics</h1>
            {topics.map((topic) => (
                <Topic key={topic.id} id={topic.id} text={topic.title} />
            ))}
        </main>
    );
}
