# [htwr-aachen.de](https://htwr-aachen.de)

Eine spaßige Website jaja rwth-aachen.de -> htwr-aachen.de

Mittlerweile gibts da auch ein paar dumm formulierte Notizen, Zusammenfassungen und Aufgaben für Klausuren

## Development

Um das Problem 'Aber wie lass ich das jetzt auf meinem PC laufen...'

Du brauchst:

- `nodejs` nimm einfach das neuste oder die neuste LTS sollte beides klappen.

- `pnpm` oder zur Not `npm` geht bestimmt auch noch. Ich nutze einfach `pnpm` das klappt :-

- `git` ist natürlich Pflicht. MEINE GÜTE LERNT ES EINFACH ist nicht so schwer und lohnt sich

Also um das Ganze nun laufen zu lassen, sind vier Befehle nötig:

```bash
pnpm install
```

installiert die Dependencies und Bibliotheken

```bash
pnpm dev
```

öffnet einen development server bei [http://localhost:3000](http://localhost:3000), dieser aktualisiert automatisch bei react component Änderungen, allerdings nicht bei Markdown Änderungen, da müsst ihr selber `STRG+R` drücken.

Falls ihr dann Änderungen gemacht habt, die ihr online sehen wollt, müsst ihr sie auf einem neuen branch-commiten, da Master erst von mir freigegeben werden muss (aus Gründen).

```bash
git add .
git checkout -b sinniger-branch-name
git commit -m "feat: sinnige commit message"
```

Hierbei ist auf die commit message zu achten: es wird darauf gecheckt das es diese Form hat heißt meistens ist es

> Feat: blabla

> Fix: blabla

oder so

beim commit wird auch gelintet, heißt auf schönen typescript code geachtet. Zur Not `pnpm lint --fix` vorher drüber laufen lassen und den Rest manuell machen.

Zum Schluss noch

```bash
git push
```

und online ein Pull-Request des neuen Branches auf master. Falls ich ihn annehme, wird er dann automatisch durch continuous integration and delivery online gestellt.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=htwr-aachen/htwr-aachen.de&type=Date)](https://star-history.com/#htwr-aachen/htwr-aachen.de&Date)
