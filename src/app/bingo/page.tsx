import Bingo from "@/components/bingo/bingo";

export default async function Page() {
  return (
    <div className="mx-auto max-w-prose px-4">
      <h1 className="my-6 scroll-m-20 font-sans text-4xl font-bold lg:text-5xl">
        HTWR Bingo
      </h1>
      <p className="my-6 leading-7">
        Das Vorlesungs-Bingo ist zurück! Du kannst es während der Vorlesung
        alleine oder am besten direkt zusammen mit Kommolitonen spielen. Falls jemand fragt, es
        hilft einem (mal mehr mal weniger) dabei mehr auf das Gesagte zu achten und vieeel besser
        zuzuhören. &#9757;&#65039;&#x1F60C;
      </p>
      <p className="my-6 leading-7">
        Einfach das Fach auswählen und sobald der Prof eines der Worte in deiner
        Matrix sagt, abhaken. Wer als Erstes eine Reihe voll hat (horizontal,
        vertikal oder diagonal!), hat gewonnen und ist ermächtigt Bingo zu
        rufen! &#127881;
      </p>
      <Bingo />
    </div>
  );
}
