import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-screen py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <Link href={"/"}>
          <ChevronLeftIcon className="h-6 w-6 " />
        </Link>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
            About Us
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vestibulum nisi sed orci imperdiet ullamcorper. Vivamus sit amet
            odio ac lacus consectetur ornare ac id felis. Maecenas tristique
            urna a imperdiet eleifend. Cras molestie luctus nisl, vel tempus
            urna rutrum ut. Quisque finibus, odio quis rhoncus placerat, justo
            est cursus tellus, ac ultricies purus ex eget mauris. Nulla nec
            libero eu diam aliquet lacinia sed eu lacus. Curabitur at porta
            nibh. Nam auctor vitae erat sed tristique. Proin leo nisl,
            condimentum ac libero eget, euismod convallis tortor. Mauris in nisi
            tellus. Cras vestibulum varius massa, ac congue risus cursus vel.
            Aliquam eu lacinia nisi. Integer ipsum elit, consequat lobortis
            blandit id, congue ac libero.
          </p>
          <p>
            Suspendisse suscipit dignissim ante in pretium. Suspendisse
            porttitor bibendum augue quis luctus. Aliquam erat volutpat. Duis
            vel accumsan orci. Donec purus tellus, luctus id fermentum eget,
            fringilla nec odio. Morbi porttitor, velit eget tincidunt commodo,
            metus odio molestie risus, at euismod metus ligula sit amet urna.
            Mauris suscipit metus eu enim mollis aliquam. Suspendisse massa
            ligula, euismod eget volutpat nec, cursus ac neque. Phasellus mauris
            neque, luctus ut interdum et, dictum at nulla. Curabitur sed metus
            sit amet tellus accumsan accumsan. Ut fermentum elementum orci vitae
            pellentesque.
          </p>

          <p>
            Nullam consequat efficitur eros, quis aliquet est venenatis eu. In
            lacus justo, congue in sodales et, elementum at metus. In sem nunc,
            dictum eget dui sed, congue faucibus ex. Pellentesque faucibus massa
            eu arcu aliquet, vitae vehicula lorem varius. In ultrices mattis
            mollis. Mauris luctus quis nulla sed finibus. Pellentesque suscipit,
            risus id vulputate lobortis, urna nunc dictum urna, id ultricies
            risus nisi a nisl. Donec quis nulla varius, scelerisque felis a,
            euismod mi. Ut vel rhoncus tellus, accumsan consectetur libero. Sed
            a leo blandit, laoreet leo eu, mattis sem. Nulla consectetur luctus
            nisl, eu sodales ante. Fusce viverra euismod consequat. Mauris ut
            nulla ut sapien dictum convallis nec ac leo.
          </p>
        </div>
      </div>
    </main>
  );
}
