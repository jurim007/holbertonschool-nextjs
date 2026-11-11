import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NewTopicButton() {
  return (
    <Link href="/ui/topics/new">
      <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-foreground hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3">
        <PlusCircleIcon className="w-6" />
        <div className="hidden md:block">Create Topic</div>
      </button>
    </Link>
  );
}
