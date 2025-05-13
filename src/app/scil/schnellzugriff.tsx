import {
  Schnellzugriff,
  SchnellzugriffLink,
} from "@/components/rwth/schnellzugriff";

export function SCILSchnellzugriff() {
  return (
    <Schnellzugriff title={"Schnellzugriff"}>
      <SchnellzugriffLink href="/scil/studium">Studium</SchnellzugriffLink>
      <SchnellzugriffLink href="/scil/studium/klausuren" sub>
        Klausuren
      </SchnellzugriffLink>
      <SchnellzugriffLink href="/scil/studium/teachings" sub>
        Zusammenfassungen
      </SchnellzugriffLink>
      <SchnellzugriffLink href="/scil/studium/aufgaben" sub>
        Aufgaben
      </SchnellzugriffLink>
      <SchnellzugriffLink href="/nichts?path=/scil/studium/fragen" sub>
        Fragen (bald)
      </SchnellzugriffLink>
      <SchnellzugriffLink href="/nichts?path=/scil/forschung">
        Forschung
      </SchnellzugriffLink>
      <SchnellzugriffLink href="/nichts?path=/scil/lehrstuhl">
        Lehrstuhl
      </SchnellzugriffLink>
    </Schnellzugriff>
  );
}
