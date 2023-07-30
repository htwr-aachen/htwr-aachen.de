import type { FC } from "react";

import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

const Datenschutz: FC = () => {
  return (
    <Main
      institute="htwr"
      meta={
        <Meta
          title="Wehe einer schickt mir nen Brief - Datenschutz"
          description="Nichts zu sehen hier ist nur rechtlich notwendig"
        ></Meta>
      }
    >
      <div>
        <h1 className="my-4 font-sans text-3xl font-bold">
          Datenschutz&shy;erkl&auml;rung
        </h1>
        <h2 className="my-4 font-sans text-2xl font-bold">Unkompliziert</h2>
        <p className="">
          Ich verwende kein Google-Analytics (mehr). Ich habe alle externen
          iframe-embeds herausgenommen, <b>außer</b>{" "}
          <a href="https://giphy.com/">giphy.com</a> (alle neuen Sachen mit gif
          Bildern statt IFrames gemacht)
        </p>
        <p className="my-2">
          Ich verwende keine Cookies, außerhalb von einer, die die Subseite
          (Institutsstil) angibt, also keine Daten enthält, die in irgendeiner
          weise Personen zugeordnet werden können.
        </p>
        <p className="my-2">
          Es ist halt auch grundlegend eine statische Webseite ohne Anmeldung
          oder ähnliches. :)
        </p>
        <p className="my-2">
          Aber weil ich die scheiße machen muss hier das rechtliche: (bewusst
          etwas weniger spezifisch, da ich vllt. noch was veränder)
        </p>
        <h2 className="my-4 font-sans text-2xl font-bold">
          1. Datenschutz auf einen Blick
        </h2>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Allgemeine Hinweise
        </h3>
        <p className="ml-4">
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick
          dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
          denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
          Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
          unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Datenerfassung auf dieser Website
        </h3>
        <h4 className="my-2 font-sans text-lg font-medium">
          Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?
        </h4>
        <p className="ml-4">
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
          &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
          Datenschutzerkl&auml;rung entnehmen.
        </p>{" "}
        <h4 className="my-2 font-sans text-lg font-medium">
          Wie erfassen wir Ihre Daten?
        </h4>{" "}
        <p className="ml-4">
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
          in ein Kontaktformular eingeben.
        </p>{" "}
        <p className="ml-4">
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </p>{" "}
        <h4 className="my-2 font-sans text-lg font-medium">
          Wof&uuml;r nutzen wir Ihre Daten?
        </h4>{" "}
        <p className="ml-4">
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
          Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>{" "}
        <h4 className="my-2 font-sans text-lg font-medium">
          Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
        </h4>{" "}
        <p className="ml-4">
          Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
          Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
          Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen.
          Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft
          widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten
          Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
        </p>{" "}
        <p className="ml-4">
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie
          sich jederzeit an uns wenden.
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Analyse-Tools und Tools von Dritt&shy;anbietern
        </h3>
        <p className="ml-4">
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit sogenannten
          Analyseprogrammen.
        </p>{" "}
        <p className="ml-4">
          Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in
          der folgenden Datenschutzerkl&auml;rung.
        </p>
        <h2 className="my-4 font-sans text-2xl font-bold">2. Hosting</h2>
        <p className="ml-4">
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Externes Hosting
        </h3>{" "}
        <p className="ml-4">
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die
          auf dieser Website erfasst werden, werden auf den Servern des Hosters
          / der Hoster gespeichert. Hierbei kann es sich v.&nbsp;a. um
          IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
          Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
          Daten, die &uuml;ber eine Website generiert werden, handeln.
        </p>{" "}
        <p className="ml-4">
          Das externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung
          gegen&uuml;ber unseren potenziellen und bestehenden Kunden (Art. 6
          Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
          effizienten Bereitstellung unseres Online-Angebots durch einen
          professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
          entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und
          &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von
          Cookies oder den Zugriff auf Informationen im Endger&auml;t des
          Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst.
          Die Einwilligung ist jederzeit widerrufbar.
        </p>{" "}
        <p className="ml-4">
          Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten,
          wie dies zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist
          und unsere Weisungen in Bezug auf diese Daten befolgen.
        </p>{" "}
        <p className="ml-4">Wir setzen folgende(n) Hoster ein:</p>
        <p className="ml-4">
          Dienstanbieter ist das amerikanische Unternehmen Vercel Inc., 340 S
          Lemon Ave #4133, Walnut, CA 91789.
        </p>
        <h2 className="my-4 font-sans text-2xl font-bold">
          3. Allgemeine Hinweise und Pflicht&shy;informationen
        </h2>
        <h3 className="my-2 font-sans text-xl font-semibold">Datenschutz</h3>{" "}
        <p className="ml-4">
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerkl&auml;rung.
        </p>{" "}
        <p className="ml-4">
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende
          Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und
          wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem
          Zweck das geschieht.
        </p>{" "}
        <p className="ml-4">
          Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
          (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
          aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff
          durch Dritte ist nicht m&ouml;glich.
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Hinweis zur verantwortlichen Stelle
        </h3>{" "}
        <p className="ml-4">
          Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
          Website ist:
        </p>{" "}
        <p className="ml-4">
          Jonas Schneider
          <br />
          Mostardstr. 22
          <br />
          52062 Aachen
        </p>
        <p className="ml-4">
          Telefon: +4915731086384
          <br />
          E-Mail: jonas.max.schneider@gmail.com
        </p>
        <p className="ml-4">
          Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
          Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und
          Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
          E-Mail-Adressen o. &Auml;.) entscheidet.
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">Speicherdauer</h3>{" "}
        <p className="ml-4">
          Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
          Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine
          Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
          gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen
          Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten
          haben (z.&nbsp;B. steuer- oder handelsrechtliche
          Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
          L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
          dieser Website
        </h3>{" "}
        <p className="ml-4">
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung
          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung
          au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern
          Sie in die Speicherung von Cookies oder in den Zugriff auf
          Informationen in Ihr Endger&auml;t (z.&nbsp;B. via
          Device-Fingerprinting) eingewilligt haben, erfolgt die
          Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1
          TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher
          Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage
          des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre
          Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung
          erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
          Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
          Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die
          jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den
          folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
        </h3>{" "}
        <p className="ml-4">
          Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA
          oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn
          diese Tools aktiv sind, k&ouml;nnen Ihre personenbezogene Daten in
          diese Drittstaaten &uuml;bertragen und dort verarbeitet werden. Wir
          weisen darauf hin, dass in diesen L&auml;ndern kein mit der EU
          vergleichbares Datenschutzniveau garantiert werden kann.
          Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene
          Daten an Sicherheitsbeh&ouml;rden herauszugeben, ohne dass Sie als
          Betroffener hiergegen gerichtlich vorgehen k&ouml;nnten. Es kann daher
          nicht ausgeschlossen werden, dass US-Beh&ouml;rden (z.&nbsp;B.
          Geheimdienste) Ihre auf US-Servern befindlichen Daten zu
          &Uuml;berwachungszwecken verarbeiten, auswerten und dauerhaft
          speichern. Wir haben auf diese Verarbeitungst&auml;tigkeiten keinen
          Einfluss.
        </p>
        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{" "}
        <p className="ml-4">
          Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
          ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
          bereits erteilte Einwilligung jederzeit widerrufen. Die
          Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
          sowie gegen Direktwerbung (Art. 21 DSGVO)
        </h3>{" "}
        <p className="ml-4">
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER
          F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE
          SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG
          IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH
          F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE
          JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
          ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH
          EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT
          MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
          SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN,
          DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE
          VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG
          VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
        </p>{" "}
        <p className="ml-4">
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
          BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
          VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
          DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING,
          SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
          WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
          MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
          ABS. 2 DSGVO).
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Beschwerde&shy;recht bei der zust&auml;ndigen
          Aufsichts&shy;beh&ouml;rde
        </h3>{" "}
        <p className="ml-4">
          Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
          Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
          insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts,
          ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen
          Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet
          anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Recht auf Daten&shy;&uuml;bertrag&shy;barkeit
        </h3>{" "}
        <p className="ml-4">
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
          sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
          Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
          &Uuml;bertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Auskunft, L&ouml;schung und Berichtigung
        </h3>{" "}
        <p className="ml-4">
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          Recht auf Einschr&auml;nkung der Verarbeitung
        </h3>{" "}
        <p className="ml-4">
          Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
          jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
          Verarbeitung besteht in folgenden F&auml;llen:
        </p>{" "}
        <ul className="ml-4 list-disc">
          {" "}
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel
            Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der
            Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>{" "}
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten
            unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der
            L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
            verlangen.
          </li>{" "}
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie
            sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von
            Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der
            L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen.
          </li>{" "}
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>{" "}
        </ul>{" "}
        <p className="ml-4">
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
          eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
          Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
          Geltendmachung, Aus&uuml;bung oder Verteidigung von
          Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
          nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines
          wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union
          oder eines Mitgliedstaats verarbeitet werden.
        </p>
        <h3 className="my-2 font-sans text-xl font-semibold">
          SSL- bzw. TLS-Verschl&uuml;sselung
        </h3>{" "}
        <p className="ml-4">
          Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
          &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
          oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-
          bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung
          erkennen Sie daran, dass die Adresszeile des Browsers von
          &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>{" "}
        <p className="ml-4">
          Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen
          die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten
          mitgelesen werden.
        </p>
      </div>
    </Main>
  );
};

export default Datenschutz;
