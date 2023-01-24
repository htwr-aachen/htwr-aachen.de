import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Teaching = () => {
  return (
    <Main
      meta={
        <Meta
          title="SysCom Teachings"
          description="Eine Sammlung von Lernhilfen, Aufgaben und sonstiges vorallem für DatKom"
        />
      }
    >
      <h1 className="text-2xl font-bold ">Hier kommen blad Lernhilfen</h1>
      <h2 className="font-light italic">Ich muss nur erstmal selber lernen</h2>
      <iframe
        src="https://giphy.com/embed/JGMaGy5beukJ96I5Xw"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>

      <h1 className="mt-10 font-sans text-xl font-bold">
        Aufgabe 8.2 wie ich es gemacht hab (für die die es bis hier geschaft
        haben) [Wird bald umplaziert, nachdem ich alles fertig hab]
      </h1>

      <h2>
        Bitte nicht frech abkopieren. Ich möcht auch Punkte{" "}
        <iframe
          src="https://giphy.com/embed/sXv0vaA4331Ti"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </h2>

      <h2>a)</h2>
      <p>
        lokaler NS → a.root-servers.net: Request: ip von
        www.syscom.htwr-aachen.de <br />
        lokaler NS → 198.41.0.4: Request: ip von www.syscom.htwr-aachen.de{" "}
        <br />
        198.41.0.4 → lokaler NS : Response NS l.de.net <br />
        lokaler NS → 198.41.0.4: Request: ip von l.de.net <br />
        198.41.0.4 → lokaler NS : Response: NS 10.10.10.10 <br />
        lokaler NS → 10.10.10.10: Request: ip von l.de.net <br />
        10.10.10.10 → lokaler NS: Response: NS 10.10.11.12 <br />
        lokaler NS → 10.10.11.12: Reqeust: IP von l.de.net <br />
        10.10.11.12 → lokaler NS: Response: A RR 20.20.20.20.20 <br />
        lokaler NS → 20.20.20.20: Request: IP von www.syscom.htwr-aachen.de{" "}
        <br />
        20.20.20.20 → lokaler NS: Response: NS 123.45.1.23 <br />
        lokaler NS → 123.45.1.23: Request: IP von www.syscom.htwr-aachen.de{" "}
        <br />
        123.45.1.23 → 123.45.54.32: Request: IP von www.syscom.htwr-aachen.de{" "}
        <br />
        123.45.54.32 → 123.45.1.23: Reponse: A RR 123.45.67.89 <br />
        123.45.1.23 → lokaler NS: Reponse: A RR 123.45.67.89 <br />
      </p>

      <h2>b)</h2>
      <p>
        Alles würde gleich verlaufen bis zur vorletzten DNS Nachricht, dann
        würde der lokale NS von 123.45.1.23 eine neue dns Anfrage für
        syscom.htrw-aachen.de machen, die aber direkt von dem lokalen NS
        beantwortet werden kann
      </p>

      <h2>c)</h2>
      <p>
        Client: telnet mail.syscom.htwr-aachen.de <br />
        Server: 220 service ready <br />
        Client: HELO uniulm.de <br />
        Server: 250 OK <br />
        Client: MAIL FROM: max.master@uniulm.de <br />
        Server: 250 OK <br />
        Client: RCPT TO:klaus@syscom.htwr-aachen.de <br />
        Server: 250 OK <br />
        Client: DATA <br />
        Server: 345 start mail input <br />
        Client: Hallo <br />
        . <br />
        Server: 250 OK <br />
        Client: QUIT <br />
        Server: 221 closing chanel <br />
      </p>

      <h2>d)</h2>
      <p>
        Client: login klaus <br />
        (passwort) <br />
        Server: OK LOGIN completed <br />
        Client: select inbox
        <br />
        Server: 1 Exists OK [UNSEEN 1] Message 1 is the first unseen message OK
        [READ-WRITE] SELECT
        <br />
        completed <br />
        Client: fetch 1 full <br />
        2 <br />
        Server: 1 FETCH <br />
        . <br />
        . <br />
        . <br />
        Client: fetch 1 body <br />
        Server: Hallo <br />
        Client: logout <br />
        Server: Bye <br />
      </p>
    </Main>
  );
};

export default Teaching;
