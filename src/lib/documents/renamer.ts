/**
 * Renames/parses string for abbreviations and stuff
 * @param name - the name that should be replaced if possible
 */
export function renameDocument(name: string): string {
  const definition = name.substring(0, 2);
  const rest = name
    .substring(2)
    .replace("wdh", "Wiederholungsklausur")
    .replace("lsg", "mit Lösung")
    .replace("pro", "Probe")
    .replaceAll("-", " ")
    .replaceAll("_", " ");

  switch (definition) {
    case "VL":
    case "vl":
      return `Vorlesung ${rest}`;
    case "ue":
      return `Übung ${rest}`;
    case "gl":
      return `Globalübung ${rest}`;
    case "ss":
      return `Sommersemester ${rest}`;
    case "ws":
      return `Wintersemester ${rest}`;
    default:
      return name;
  }
}
