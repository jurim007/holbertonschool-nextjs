import { HashtagIcon } from "@heroicons/react/24/outline";

// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function AskQuestionSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-2">
      <div className="flex items-center">
        <div className="min-w-0"></div>
      </div>
      <div className="mt-2 h-8 w-16 rounded-md bg-gray-200" />
    </div>
  );
}

export function QuestionSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function TopicsSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <h1 className="text-3xl font-black flex items-center">
        <HashtagIcon className="h-6 w-6 mr-2" />
        <div className="h-5 w-40 rounded-md bg-gray-200" />
      </h1>
      <div className="mb-4 h-8 w-36 rounded-md " />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-1 mb-4">
        <div className="bg-white px-2">
          <AskQuestionSkeleton />
        </div>
      </div>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-1">
        <div className="bg-white px-6">
          <QuestionSkeleton />
          <QuestionSkeleton />
          <QuestionSkeleton />
          <QuestionSkeleton />
          <QuestionSkeleton />
        </div>
      </div>
    </div>
  );
}
