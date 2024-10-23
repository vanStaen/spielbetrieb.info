import React, { useState } from "react";
import { Modal } from "antd";

import "./Datenschutz.less";

export const Datenschutz = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`datenschutz__link`} onClick={showModal}>
        Datenschutz
      </div>
      <Modal
        title="Datenschutz"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="datenschutz__text"
        footer={null}
      >
        Datenschutzerklärung <br />
        <br />
        Wir, die LiRo Berlin UG („LiRo/wir“), freuen uns über Ihren Besuch unserer Website. In den nachfolgenden Bestimmungen unterrichten wir Sie über Art, Umfang und Zwecke der Erhebung und Verwendung Ihrer personenbezogenen Daten auf dieser Website. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Hierzu zählen insbesondere Ihr Name, Ihre Anschrift und Ihre E-Mail-Adresse.<br />
        <br />
        1. Anbieter und Datenschutzbeauftragter<br />
        <br />
        Anbieter der Website und Verantwortlicher im Sinne des Datenschutzrechts ist die<br />
        <br />
        LiRo Berlin UG (haftungsbeschränkt)<br />
        Kaiser-Friedrich-Straße, 37A 10627 Berlin<br />
        <br />
        Geschäftsführer: Dominique Roch, Marc Lindner<br />
        Tel.: 0176 48 27 58 17<br />
        E-Mail: impressum@liro.berlin<br />
        <br />
        Datenschutzbeauftragter:<br />
        Marc Linder<br />
        <br />
        2. Datenverarbeitung zur Ermöglichung der Website-Nutzung<br />
        <br />
        Bei jedem Zugriff auf Inhalte unserer Website werden Verbindungsdaten an unseren Webserver übertragen. Zu diesen Verbindungsdaten gehören:<br />
        <br />
        die IP-Adresse (Internet-Protocol-Adresse) der jeweiligen Nutzer,<br />
        das Datum und die Uhrzeit der Anfrage,<br />
        die Referrer-URL,<br />
        Gerätenummern wie z.B. UDID (Unique Device Identifier) und vergleichbare Gerätenummern, Geräte-Informationen (z.B. Gerätetyp) sowie<br />
        der Browsertyp / die Browserversion.<br />
        <br />
        Diese Verbindungsdaten werden nicht für einen Rückschluss auf die Person des Nutzers verwendet oder mit Daten aus anderen Datenquellen zusammengeführt, sondern dienen der Bereitstellung der Website. Die Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Nach spätestens 7 Tagen werden die Verbindungsdaten durch Verkürzung der IP-Adresse auf Domain-Ebene anonymisiert.<br />
        <br />
        3. Datenverarbeitung auf Veranlassung<br />
        <br />
        Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Sie sind weder verpflichtet diese Website aufzurufen noch dabei personenbezogene Daten anzugeben. Die Angabe personenbezogener Daten ist allerdings für die Buchung von Leistungen erforderlich. Stellen Sie uns für die nachfolgend aufgeführten Zwecke keine personenbezogenen Daten zur Verfügung, können Sie ggf. Funktionalitäten dieser Website oder einzelne dieser Dienste nicht nutzen.<br />
        <br />
        4. Datenverarbeitung zur bedarfsgerechten Gestaltung der Website<br />
        <br />
        Unsere Website platziert Cookies auf Ihrem Gerät. Dabei handelt es sich um kleine Textdateien, mit denen unterschiedliche Zwecke verfolgt werden. Manche Cookies sind technisch notwendig, damit die Website überhaupt funktioniert (notwendige Cookies). Andere werden benötigt, um bestimmte Aktionen oder Funktionen auf der Website ausführen zu können (funktionale Cookies). Zudem können Cookies dazu dienen, das Nutzerverhalten zu analysieren oder Werbemaßnahmen zu optimieren. Wenn wir Dienstleistungen Dritter auf unserer Website nutzen, z. B. zur Abwicklung von Zahlungsvorgängen, können auch diese Unternehmen Cookies auf Ihrem Gerät hinterlassen, wenn Sie die Website aufrufen (sog. Third-Party-Cookies).<br />
        <br />
        Session-Cookies werden nur für die Dauer einer Sitzung auf Ihrem Gerät gespeichert. Sobald Sie den Browser schließen, verschwinden sie also von selbst. Permanent-Cookies bleiben dagegen auf Ihrem Gerät, wenn Sie sie nicht selbst löschen. Das kann z.B. dazu führen, dass Ihr Nutzerverhalten dauerhaft analysiert wird. Sie können über die Einstellungen in Ihrem Browser Einfluss darauf nehmen, wie er mit Cookies umgeht. Wenn Sie Cookies deaktivieren bzw. nicht zulassen, kann die Funktionalität der Website eingeschränkt sein.<br />
        <br />
        Sofern wir Cookies von anderen Unternehmen oder zu Analysezwecken einsetzen, informieren wir Sie hierüber im Rahmen dieser Datenschutzerklärung bzw. in unserem Cookie-Banner. Auch fragen wir diesbezüglich Ihre Einwilligung ab, wenn Sie unsere Website aufrufen. Wir haben ein berechtigtes Interesse daran, dass unsere Online-Angebote ohne technische Probleme von den Besuchern genutzt werden können und ihnen alle gewünschten Funktionen zur Verfügung stehen. Die Speicherung notwendiger und funktionaler Cookies auf Ihrem Gerät erfolgt daher auf der Grundlage von Art. 6 Abs. 1 lit. f) DSGVO. Alle anderen Cookies setzen wir auf der Grundlage von Art. 6 Abs. 1 lit. a) DSGVO ein, sofern Sie uns eine entsprechende Einwilligung erteilen. Diese können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Haben Sie bei der Abfrage der Einwilligung in die Platzierung notwendiger und funktionaler Cookies eingewilligt, erfolgt auch die Speicherung dieser Cookies ausschließlich auf der Grundlage Ihrer Einwilligung. Die von uns verwendeten Trackingtools und sonstigen Dienste, welche Cookies verwenden, sind unter den Ziffern 4.1 ff. aufgeführt.<br />
        <br />
        Wir möchten Sie zudem darauf hinweisen, dass Sie in Ihrem Browser auch ein Plugin zum Schutz Ihrer Privatsphäre installieren können, welches die Möglichkeit bietet, Tracking zu unterbinden – z.B. AdBlock, Ghostery oder NoScript (beachten Sie dazu die Datenschutzhinweise des jeweiligen Plugin-Anbieters). Bitte beachten Sie zudem, dass eine Deaktivierung ggf. für jeden Browser und für jedes Endgerät erfolgen muss.<br />
        <br />
        5. Datenübermittlung<br />
        <br />
        Wir geben Ihre personenbezogenen Daten nur an Dritte oder sonstige Empfänger weiter, wenn dies zur Leistungserbringung erforderlich ist, Sie Ihre Einwilligung erteilt haben, eine gesetzliche besteht oder die Datenweitergabe aufgrund einer sonstigen gesetzlichen Grundlage zulässig ist. Soweit erforderlich, haben wir mit den Empfängern Ihrer Daten Vereinbarungen über die Auftragsverarbeitung nach Maßgabe von Art. 28 DSGVO getroffen.<br />
        <br />
        6. Datenübermittlung in Staaten außerhalb der EU<br />
        <br />
        Soweit für unsere Zwecke erforderlich, übermitteln wir Ihre Daten auch an Empfänger außerhalb der EU, wenn Sie Ihre Einwilligung erteilt haben, eine gesetzliche Verpflichtung besteht oder die Datenweitergabe aufgrund einer sonstigen gesetzlichen Grundlage zulässig ist. So werden Ihre Daten im Rahmen der Datenverarbeitung auch an Empfänger übermittelt, die ihren Sitz in den USA haben. Bitte beachten Sie, dass nach einem Urteil des Europäischen Gerichtshofs (EuGH) besteht in den USA im Allgemeinen kein angemessenes Datenschutzniveau und damit ein Risiko für den Schutz Ihrer Daten. So können z.B. unter bestimmten Voraussetzungen Ihre Daten durch US-Behörden zu Kontroll- und Überwachungszwecken verarbeitet werden. Nach dem Angemessenheitsbeschluss zum EU-U.S. Data Privacy Framework können Unternehmen sich jedoch beim U.S. Department of Commerce zertifizieren, um ein angemessenes Datenschutzniveau herzustellen. Im Übrigen verweisen wir hinsichtlich der Rechtsgrundlage für die Datenübermittlung zunächst noch auf Art. 49 DSGVO. Ein angemessenes Datenschutzniveau ist zukünftig durch den Abschluss der neuen sog. EU-Standarddatenschutzklauseln oder durch Zertifizierung nach dem Angemessenheitsbeschluss sichergestellt.<br />
        <br />
        7. Dauer, für die personenbezogene Daten gespeichert werden / Kriterien für die Festlegung der Dauer<br />
        <br />
        Ihre personenbezogenen Daten werden von uns so lange gespeichert, wie es für die vorgenannten Zwecke der Verarbeitung erforderlich ist, im Falle eines Widerspruchs keine zwingenden schutzwürdigen Gründe von LiRo Berlin entgegenstehen oder im Falle eines Widerrufs keine sonstige Rechtsgrundlage für die Datenverarbeitung besteht. In bestimmten Fällen, z.B. wenn eine gesetzliche Aufbewahrungspflicht besteht, werden Ihre personenbezogenen Daten jedoch nicht unmittelbar gelöscht, sondern zunächst gesperrt.<br />
        Die im Rahmen des Vertragsverhältnisses von uns erhobenen und verarbeiteten personenbezogenen Daten werden bis zum Ablauf der Regelverjährungsfrist (3 Jahre nach Ablauf des Kalenderjahres, in dem der Vertrag beendet wurde) gespeichert und danach gelöscht, es sei denn, dass wir nach Artikel 6 Abs. 1 S. 1 lit. c DSGVO aufgrund von Aufbewahrungs- und Dokumentationspflichten (insb. aus HGB oder AO) zu einer längeren Speicherung verpflichtet sind. Ihre Vertragsdaten und die dazugehörigen Dokumente speichern wir für 10 Jahre (§147 Abs.3 AO), sonstige Handels- und Geschäftsbriefe für 6 Jahre (§ 257 Abs. 4 HGB).<br />
        <br />
        8. Sicherheitsmaßnahmen zum Schutz Ihrer personenbezogenen Daten<br />
        <br />
        Wir schützen Ihre Daten durch technische und organisatorische Maßnahmen vor unberechtigtem Zugriff, Verlust oder Zerstörung. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert. Unsere Mitarbeiter und alle an der Datenverarbeitung beteiligten Personen sind zur Einhaltung datenschutzrelevanter Gesetze und dem vertraulichen Umgang mit personenbezogenen Daten verpflichtet. Unsere Mitarbeiter sind entsprechend geschult.<br />
        Zum Schutz Ihrer personenbezogenen Daten auf dieser Website benutzen wir ein sicheres Online-Übertragungsverfahren, die so genannte „Secure Socket Layer“ (SSL) Übertragung. Sie erkennen dies daran, dass an dem Adressbestandteil https:// ein geschlossenes Schloss-Symbol angezeigt wird. Durch Anklicken des Symbols erhalten Sie Informationen über das verwendete SSL-Zertifikat. Die Darstellung des Symbols ist abhängig von der von Ihnen eingesetzten Browserversion. Die SSL-Verschlüsselung gewährleistet die verschlüsselte und vollständige Übertragung Ihrer Daten.<br />
        <br />
        9. Ihre Rechte<br />
        <br />
        Im Rahmen der gesetzlichen Vorgaben haben Sie gegenüber LiRo Berlin grundsätzlich Anspruch auf<br />
        Bestätigung, ob Sie betreffende personenbezogene Daten durch LiRo Berlin verarbeitet werden,<br />
        Auskunft über diese Daten und die Umstände der Verarbeitung,<br />
        Berichtigung, soweit diese Daten unrichtig sind,<br />
        Löschung, soweit für die Verarbeitung keine Rechtfertigung und keine Pflicht zur Aufbewahrung (mehr) besteht,<br />
        Einschränkung der Verarbeitung in besonderen gesetzlich bestimmten Fällen,<br />
        Widerspruch im Falle einer Datenverarbeitung auf Basis von Art. 6 Abs. 1 S. 1 lit. f. DSGVO und<br />
        Übermittlung Ihrer personenbezogenen Daten – soweit Sie diese bereitgestellt haben – an Sie oder einen Dritten in einem strukturierten, gängigen und maschinenlesbaren Format.<br />
        <br />
        Soweit die Verarbeitung Ihrer personenbezogenen Daten auf Ihrer Einwilligung beruht, haben Sie das Recht, die Einwilligung jederzeit zu widerrufen, mit der Folge, dass die Verarbeitung Ihrer personenbezogenen Daten für die Zukunft unzulässig wird. Dies berührt die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung jedoch nicht.<br />
        Ihr konkretes Begehren richten Sie bitte schriftlich oder per E-Mail unter eindeutiger Identifizierungsmöglichkeit Ihrer Person an unseren Datenschutzbeauftragten.<br />
        <br />
        Soweit wir Ihre Daten in gemeinsamer Verantwortlichkeit i.S.d. Art. 26 DSGVO mit Dritten verarbeiten, ist der Dritte zentral für die Wahrnehmung aller Betroffenenrechte zuständig. Allerdings bleibt es Ihnen unbenommen, Ihre Rechte auch gegenüber uns geltend zu machen.<br />
        Schließlich möchten wir Sie auf Ihr Beschwerderecht bei der Aufsichtsbehörde (Aufsichtsbehörde in Berlin: https://www.datenschutz-berlin.de/) hinweisen.<br />
        <br />
        10. Widerspruchsrecht<br />
        <br />
        DIE BETROFFENE PERSON HAT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, JEDERZEIT GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN, DIE AUFGRUND VON ARTIKEL 6 ABSATZ 1 BUCHSTABEN E ODER F ERFOLGT, WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DER VERANTWORTLICHE VERARBEITET DIE PERSONENBEZOGENEN DATEN NICHT MEHR, ES SEI DENN, ER KANN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE DIE INTERESSEN, RECHTE UND FREIHEITEN DER BETROFFENEN PERSON ÜBERWIEGEN, ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN.<br />
        <br />
        WERDEN PERSONENBEZOGENE DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HAT DIE BETROFFENE PERSON DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.<br />
        <br />
        11. Keine automatisierte Einzelentscheidung<br />
        Wir verwenden Ihre personenbezogenen Daten nicht für automatisierte Einzelentscheidungen.<br />
        <br />
        12. Änderung der Datenschutzerklärung<br />
        Neue rechtliche Vorgaben, unternehmerische Entscheidungen oder die technische Entwicklung erfordern gegebenenfalls Änderungen in unserer Datenschutzerklärung. Die Datenschutzerklärung wird dann entsprechend angepasst. Die aktuelle Version finden Sie immer auf unserer Website.



      </Modal>
    </>
  );
};
