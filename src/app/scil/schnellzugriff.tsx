import {
  Schnellzugriff,
  Schnellzugrifflink,
} from "@/components/rwth/schnellzugriff";

export function SCILSchnellzugriff() {
  return (
    <Schnellzugriff title={"Schnellzugriff"}>
      <Schnellzugrifflink href="/scil/studium">Studium</Schnellzugrifflink>
      <Schnellzugrifflink href="/scil/studium/klausuren" sub>
        Klausuren
      </Schnellzugrifflink>
      <Schnellzugrifflink href="/scil/studium/teachings" sub>
        Zusammenfassungen
      </Schnellzugrifflink>
      <Schnellzugrifflink href="/scil/studium/aufgaben" sub>
        Aufgaben
      </Schnellzugrifflink>
      <Schnellzugrifflink href="/scil/studium/fragen" sub>
        Fragen (bald)
      </Schnellzugrifflink>
      <Schnellzugrifflink href="/scil/forschung">Forschung</Schnellzugrifflink>
      <Schnellzugrifflink href="/scil/lehrstuhl">Lehrstuhl</Schnellzugrifflink>
    </Schnellzugriff>
  );
}
