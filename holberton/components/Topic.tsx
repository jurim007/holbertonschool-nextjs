import { HashtagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  id: string;
  text: string;
};

export function Topic({ id, text }: Props) {
  return (
    <Link
      href={`/ui/topics/${id}`}
      className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b"
    >
      <p className="text w-full text-left font-semibold flex">
        <HashtagIcon className="h-6 w-6 mr-2" />
        {text}
      </p>
    </Link>
  );
}
