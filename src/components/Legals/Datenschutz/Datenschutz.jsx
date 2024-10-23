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
        <br />
        Wir, die LiRo Berlin UG („LiRo/wir“), freuen uns über Ihren Besuch unserer Website. In den nachfolgenden Bestimmungen unterrichten wir Sie über Art, Umfang und Zwecke der Erhebung und Verwendung Ihrer personenbezogenen Daten auf dieser Website. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Hierzu zählen insbesondere Ihr Name, Ihre Anschrift und Ihre E-Mail-Adresse.<br />
        <br />
        1. Anbieter und Datenschutzbeauftragter<br />
        <br />
        <br />
        Anbieter der Website und Verantwortlicher im Sinne des Datenschutzrechts ist die<br />
        <br />
        <br />
        LiRo Berlin UG (haftungsbeschränkt)<br />
        Kaiser-Friedrich-Straße, 37A 10627 Berlin<br />
        <br />
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
        <br />
        Bei jedem Zugriff auf Inhalte unserer Website werden Verbindungsdaten an unseren Webserver übertragen. Zu diesen Verbindungsdaten gehören:<br />
        <br />
        <br />
        die IP-Adresse (Internet-Protocol-Adresse) der jeweiligen Nutzer,<br />
        das Datum und die Uhrzeit der Anfrage,<br />
        die Referrer-URL,<br />
        Gerätenummern wie z.B. UDID (Unique Device Identifier) und vergleichbare Gerätenummern, Geräte-Informationen (z.B. Gerätetyp) sowie<br />
        der Browsertyp / die Browserversion.<br />
        <br />
        <br />
        Diese Verbindungsdaten werden nicht für einen Rückschluss auf die Person des Nutzers verwendet oder mit Daten aus anderen Datenquellen zusammengeführt, sondern dienen der Bereitstellung der Website. Die Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Nach spätestens 7 Tagen werden die Verbindungsdaten durch Verkürzung der IP-Adresse auf Domain-Ebene anonymisiert.<br />
        <br />
        3. Datenverarbeitung auf Veranlassung<br />
        <br />
        <br />
        Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Sie sind weder verpflichtet diese Website aufzurufen noch dabei personenbezogene Daten anzugeben. Die Angabe personenbezogener Daten ist allerdings für die Buchung von Leistungen erforderlich. Stellen Sie uns für die nachfolgend aufgeführten Zwecke keine personenbezogenen Daten zur Verfügung, können Sie ggf. Funktionalitäten dieser Website oder einzelne dieser Dienste nicht nutzen.<br />
        <br />
        <br />
        3.1. Buchung<br />
        <br />
        <br />
        Wenn Sie uns mit der Leistungserbringung beauftragen, erheben wir von Ihnen die durch „*“ kenntlich gemachten Pflichtangaben (z.B. Vorname, Name, E-Mail-Adresse, Wohnsitzland). Die weiteren Eingabemöglichkeiten zu Ihrer Person sind freiwillig. Wir benötigen neben den genannten Pflichtangaben auch Ihre Daten zu XXX (z.B. XXX). Diese Daten sind für die Erfüllung Ihres Vertrags gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO erforderlich.<br />
        <br />
        <br />
        Die Angaben werden von uns an XXX weitergeleitet, damit dieser entsprechend den Erfolgsaussichten eine Mandatierung prüfen kann und um einen Termin für eine kostenlose Erstberatung mit einem Vertragsanwalt zu vereinbaren. Die Rechteplus vermittelt lediglich den Vertragsanwalt und übermittelt anschließend die von Ihnen angegebenen Informationen. Die Angaben werden von uns ebenfalls zur Prüfung der Erfolgsaussichten für die Gewährung der Prozessfinanzierung verwendet. Der Prozessvertreter teilt zu diesem Zweck der Rechteplus ebenfalls mit, ob eine Mandatsvereinbarung zustande gekommen ist. Diese gegenseitige Übermittlung von Daten ist für die Erfüllung Ihres Vertrags gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO erforderlich. Für ergänzende Fragen steht Ihnen unser Datenschutzbeauftragter gern zur Verfügung.<br />
        <br />
        <br />
        Sofern besondere Kategorien personenbezogener Daten betroffen sind, richtet sich die Verarbeitung insbesondere nach Art. 9 DSGVO und § 22 BDSG. „Besondere Kategorien“ personenbezogener Daten sind gemäß Art. 9 Abs. 1 DSGVO Daten, aus denen die rassische und ethnische Herkunft, politische Meinungen, religiöse oder weltanschauliche Überzeugungen oder die Gewerkschaftszugehörigkeit hervorgehen, sowie die Verarbeitung von genetischen Daten, biometrischen Daten zur eindeutigen Identifizierung einer natürlichen Person, Gesundheitsdaten oder Daten zum Sexualleben oder der sexuellen Orientierung einer natürlichen Person. Die Verarbeitung dieser Daten durch uns erfolgt auf Basis Ihrer Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO und zur Geltendmachung, Ausübung oder Verteidigung Ihrer Rechtsansprüche Art. 9 Abs. 2 lit. f DSGVO.<br />
        <br />
        <br />
        Darüber hinaus werden im Rahmen der Buchung Ihre IP-Adresse und der Zeitpunkt der Buchung von uns gespeichert. Dies ist erforderlich, um die Sicherheit unserer informationstechnischen Systeme zu gewährleisten und die Buchung zuordnen zu können. Die Rechtsgrundlage für die Verarbeitung Ihrer Daten ist in diesem Fall Art. 6 Abs. 1 S. 1 lit. f und lit. b DSGVO.<br />
        Für die Verifizierung Ihrer Buchung verwenden wir das sog. Double-opt-in-Verfahren. Das heißt, dass wir Ihnen, nachdem Sie die Pflichtfelder ausgefüllt und den Button „BUCHEN“ bzw. einen vergleichbaren Button gedrückt haben, an die von Ihnen angegebene E-Mail-Adresse eine E-Mail senden, in welcher wir Sie um eine Bestätigung der Buchung bitten. Wenn Sie Ihre Anmeldung nicht bestätigen, werden Ihre Informationen gesperrt und anschließend gelöscht.<br />
        <br />
        <br />
        Sofern wir im Zusammenhang mit der vorgenannten Verifizierung Ihrer Anmeldung oder im Zusammenhang mit der Prozessfinanzierung oder Anwaltsvermittlung E-Mails an Sie versenden, verwenden wir die Kundenkommunikationsplattform „ClickUp“ („ClickUp“), die von der Mango Technologies, Inc., mit Sitz in 350 Tenth Ave 5th floor, San Diego, CA 92101, betrieben wird. Bitte beachten Sie, dass es sich bei der Mango Technologies, Inc. um ein Unternehmen aus den USA handelt. Nach einem Urteil des Europäischen Gerichtshofs (EuGH) besteht in den USA im Allgemeinen kein angemessenes Datenschutzniveau und damit ein Risiko für den Schutz Ihrer Daten. Nach dem Angemessenheitsbeschluss zum EU-U.S. Data Privacy Framework können Unternehmen sich jedoch beim U.S. Department of Commerce zertifizieren, um ein angemessenes Datenschutzniveau herzustellen. Dies ist bei ClickUp der Fall.<br />
        <br />
        <br />
        3.2. Registrierung als Kunde<br />
        Wenn Sie sich bei uns als Kunde registrieren möchten, erheben wir von Ihnen die für die Registrierung erforderlichen Pflichtangaben (Vorname, Name, E-Mail-Adresse, Passwort).<br />
        Die Registrierung ist nicht notwendig, ermöglicht Ihnen allerdings, den Status Ihrer Buchung sowie Aufträge einheitlich über unsere Website abrufen zu können. Zudem wird eine zukünftige Buchung erleichtert, da Sie die von Ihnen bereits gespeicherten Daten erneut verwenden können. Alternativ können Sie eine Buchung auch als Gast durchführen. In diesem Fall erheben wir von Ihnen, mit Ausnahme eines Passwortes, die gleichen Daten wie bei der Registrierung. Diese Daten werden allerdings nicht in einem Kundenkonto für Sie gespeichert, sodass Sie auch keinen Zugriff auf ein Kundenkonto haben, sondern nur für die jeweilige Bestellung verwendet.<br />
        Nach der Registrierung erfolgt der Login durch die Eingabe Ihrer E-Mail-Adresse und des Passworts. Bitte achten Sie stets auf die Abmeldung vor dem Verlassen der Website.<br />
        Bei der Verwendung eines Passwortes achten Sie bitte auf angemessene Sicherheitsmaßnahmen. So sollte ein Passwort mindestens 8 Zeichen lang sein und möglichst immer aus einer Kombination von Buchstaben in Groß- und Kleinschreibung, Ziffern und Sonderzeichen bestehen. Problematisch sind insofern Trivialkennwörter wie „ABC“ oder Tastaturfolgen (z.B. „qwert“ oder „asdfgh“), alle Arten von Namen (etwa von Freunden, Bekannten, Kollegen/Innen, Familienangehörigen, Haustieren), Städte- und Gebäudebezeichnungen, Comic-Figuren, Automarken, Autokennzeichen, Begriffe, Geburtsdaten, Telefonnummern, gängige Abkürzungen usw.<br />
        Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Basis Ihrer Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO.<br />
        Darüber hinaus werden im Rahmen der Registrierung Ihre IP-Adresse und der Zeitpunkt der Registrierung von uns gespeichert. Dies ist erforderlich, um die Sicherheit unserer informationstechnischen Systeme zu gewährleisten. Die Rechtsgrundlage für die Verarbeitung Ihrer Daten ist in diesem Fall Art. 6 Abs. 1 S. 1 lit. f DSGVO.<br />
        <br />
        <br />
        3.3. Buchung für weitere Personen<br />
        Die Buchung von Leistungen für weitere Personen ist nur insofern gestattet, als dass der/die Buchende die vorherige Einwilligung der zusätzlichen Personen über die Verarbeitung Ihrer personenbezogenen Daten eingeholt hat. Die/Der Buchende hat die weiteren Personen zudem über die Datenschutzbestimmungen entsprechend dieser Datenschutzerklärung zu informieren. Sollte die Verarbeitung der Daten ohne die vorherige Einwilligung der zusätzlichen Personen, für die gebucht wird, erfolgen, verstößt die/der Buchende nicht nur gegen die Geschäftsbedingungen der Rechteplus GmbH, sondern zugleich gegen die Bestimmungen zum Datenschutz.<br />
        <br />
        <br />
        3.4. Login<br />
        Wenn Sie Kunde von Rechteplus sind, haben Sie die Möglichkeit, über die Login-Funktion auf dieser Website Zugriff auf gesonderte Informationen oder Aktualisierungen zu den von Ihnen gebuchten Leistungen zu nehmen.<br />
        Logindaten sind strikt geheim zu halten. Sollte eine Weitergabe dennoch erfolgt sein, um etwa im Notfall den Zugriff auf bestimmte Datenbestände durch Dritte zu ermöglichen, ist das Passwort umgehend zu ändern. Es ist zu Ihrem eigenen Schutz untersagt, bereits genutzte Passwörter erneut zu verwenden.<br />
        Darüber hinaus werden im Rahmen eines Logins Ihre IP-Adresse und der Zeitpunkt des Zugriffs von uns gespeichert. Dies ist erforderlich, um die Sicherheit unserer informationstechnischen Systeme zu gewährleisten.<br />
        Bei jedem Login setzen wir zudem ein Session-Cookie. Dieses Session-Cookie verhindert die automatische Abmeldung während der aktiven Nutzung des Accounts oder damit verbundener Dienste. Nach der jeweiligen Abmeldung wird das Session-Cookie innerhalb weniger Minuten automatisch gelöscht.<br />
        Die Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Art. 6 Abs. 1 S. 1 lit. f DSGVO und, sofern Ihr Vertragsverhältnis betroffen ist, Art. 6 Abs. 1 S. 1 lit. b und/oder f DSGVO.<br />
        <br />
        <br />
        3.5. Kontaktformular<br />
        Nehmen Sie mit uns über das angebotene Kontaktformular Verbindung auf, um Leistungen zu buchen oder konkrete Fragen bezüglich unser Unternehmen oder unsere Produkte zu stellen, werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung Ihrer Anfrage zurückgegriffen werden kann.<br />
        Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.<br />
        Die Rechtsgrundlage für die Verarbeitung Ihrer Daten richtet sich grds. nach Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht dann in der Beantwortung Ihrer Anfrage. Im Falle der Durchführung vorvertraglicher oder vertraglicher Maßnahmen ist die Rechtsgrundlage Art. 6 Abs. 1 S. 1 lit. b DSGVO.<br />
        <br />
        <br />
        3.6. Bewerbungen<br />
        Auf unserer Website sind offene Stellen ausgeschrieben, für welche Sie sich per E-Mail bei uns bewerben können.<br />
        Ihre Daten, die Sie uns im Rahmen Ihrer Bewerbung übermitteln, werden von uns zum Zweck der Entscheidung über die Begründung eines Beschäftigungsverhältnisses verarbeitet. Rechtsgrundlage für die Datenverarbeitung ist Art. 88 Abs. 1 DSGVO i.V.m. § 26 Abs. 1 S. 1 BDSG. Sofern besondere Kategorien personenbezogener Daten betroffen sind, richtet sich die Verarbeitung nach Art. 88 DSGVO i.V.m. § 26 Abs. 3 BDSG. Im Falle einer Absage bzw. dem Abschluss des Bewerbungsverfahrens werden Ihre Daten innerhalb von 6 Monaten gelöscht.<br />
        <br />
        4. Datenverarbeitung zur bedarfsgerechten Gestaltung der Website<br />
        <br />
        <br />
        Unsere Website platziert Cookies auf Ihrem Gerät. Dabei handelt es sich um kleine Textdateien, mit denen unterschiedliche Zwecke verfolgt werden. Manche Cookies sind technisch notwendig, damit die Website überhaupt funktioniert (notwendige Cookies). Andere werden benötigt, um bestimmte Aktionen oder Funktionen auf der Website ausführen zu können (funktionale Cookies). Zudem können Cookies dazu dienen, das Nutzerverhalten zu analysieren oder Werbemaßnahmen zu optimieren. Wenn wir Dienstleistungen Dritter auf unserer Website nutzen, z. B. zur Abwicklung von Zahlungsvorgängen, können auch diese Unternehmen Cookies auf Ihrem Gerät hinterlassen, wenn Sie die Website aufrufen (sog. Third-Party-Cookies).<br />
        <br />
        <br />
        Session-Cookies werden nur für die Dauer einer Sitzung auf Ihrem Gerät gespeichert. Sobald Sie den Browser schließen, verschwinden sie also von selbst. Permanent-Cookies bleiben dagegen auf Ihrem Gerät, wenn Sie sie nicht selbst löschen. Das kann z.B. dazu führen, dass Ihr Nutzerverhalten dauerhaft analysiert wird. Sie können über die Einstellungen in Ihrem Browser Einfluss darauf nehmen, wie er mit Cookies umgeht. Wenn Sie Cookies deaktivieren bzw. nicht zulassen, kann die Funktionalität der Website eingeschränkt sein.<br />
        <br />
        <br />
        Sofern wir Cookies von anderen Unternehmen oder zu Analysezwecken einsetzen, informieren wir Sie hierüber im Rahmen dieser Datenschutzerklärung bzw. in unserem Cookie-Banner. Auch fragen wir diesbezüglich Ihre Einwilligung ab, wenn Sie unsere Website aufrufen. Wir haben ein berechtigtes Interesse daran, dass unsere Online-Angebote ohne technische Probleme von den Besuchern genutzt werden können und ihnen alle gewünschten Funktionen zur Verfügung stehen. Die Speicherung notwendiger und funktionaler Cookies auf Ihrem Gerät erfolgt daher auf der Grundlage von Art. 6 Abs. 1 lit. f) DSGVO. Alle anderen Cookies setzen wir auf der Grundlage von Art. 6 Abs. 1 lit. a) DSGVO ein, sofern Sie uns eine entsprechende Einwilligung erteilen. Diese können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Haben Sie bei der Abfrage der Einwilligung in die Platzierung notwendiger und funktionaler Cookies eingewilligt, erfolgt auch die Speicherung dieser Cookies ausschließlich auf der Grundlage Ihrer Einwilligung. Die von uns verwendeten Trackingtools und sonstigen Dienste, welche Cookies verwenden, sind unter den Ziffern 4.1 ff. aufgeführt.<br />
        <br />
        <br />
        Wir möchten Sie zudem darauf hinweisen, dass Sie in Ihrem Browser auch ein Plugin zum Schutz Ihrer Privatsphäre installieren können, welches die Möglichkeit bietet, Tracking zu unterbinden – z.B. AdBlock, Ghostery oder NoScript (beachten Sie dazu die Datenschutzhinweise des jeweiligen Plugin-Anbieters). Bitte beachten Sie zudem, dass eine Deaktivierung ggf. für jeden Browser und für jedes Endgerät erfolgen muss.<br />
        <br />
        <br />
        4.1. Cookie-Einwilligung<br />
        Diese Website nutzt den Heyflow Cookie Consent Manager von der Heyflow GmbH, Jungfernstieg 49, 20354 Hamburg, Germany („Heyflow“), um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät einzuholen und diese datenschutzkonform zu dokumentieren. Wenn Sie unsere Website aufrufen, wird im Zusammenhang mit dem Cookie-Banner ein Cookie in Ihrem Browser gespeichert, in dem die von Ihnen erteilten Einwilligungen oder der Widerruf dieser Einwilligungen gespeichert werden. Diese Daten werden jedoch nicht an die Heyflow GmbH übermittelt. Die erfassten Daten werden gespeichert, bis Sie uns zur Löschung auffordern bzw. das Heyflow-Cookie selbst löschen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt. Der Einsatz von dem Heyflow-Cookie erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz von Cookies einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 S. 1 lit. a DSGVO. In Ergänzung zu den Informationen in dem Cookie-Banner beachten Sie bitte auch die nachfolgenden Hinweise in den Ziffern 4.2 ff. Weitere Informationen finden Sie ebenfalls in Heyflow Datenschutzerklärung (https://heyflow.app/de/datenschutz).<br />
        <br />
        <br />
        4.2. Google Analytics<br />
        Unsere Website verwendet das Tracking-Tool „Google Analytics“. Dies ist eine Dienstleistung, die von Google Ireland Ltd. zur Verfügung gestellt wird, einer nach irischem Recht eingetragenen und betriebenen Gesellschaft mit Sitz in Gordon House, Barrow Street, Dublin 4, Irland („Google“). Dieses Tracking-Tool hilft uns, das Internetangebot für Sie interessanter zu gestalten und die Nutzererfahrung zu verbessern. Hierbei werden Daten über die Nutzung unserer Website in pseudonymen Nutzerprofilen gespeichert. Zu diesem Zweck können auch Cookies eingesetzt werden. Zudem können Daten von verschiedenen Geräten, Sitzungen und Interaktionen mit einer sogenannten „User ID“ verknüpft werden. Die erzeugten Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir möchten Sie darauf hinweisen, dass auf unserer Website Google Analytics um die „anonymizeIp“-Funktion erweitert wurde. Hierdurch wird Ihre IP-Adresse von Google zunächst innerhalb von Mitgliedsstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt und erst anschließend an einen Server von Google in den USA übertragen.<br />
        Die Kürzung der IP-Adresse stellt eine zusätzliche Maßnahme gem. Art. 25 Abs. 1 DSGVO zum Schutz der Nutzer dar, sie führt jedoch nicht dazu, dass die vollständige Datenverarbeitung anonymisiert erfolgt. So werden beim Einsatz von Google Analytics neben der IP-Adresse auch weitere Nutzungsdaten erhoben, die als personenbezogene Daten zu bewerten sind, wie z.B. Identifizierungsmerkmale der einzelnen Nutzer, die auch eine Verknüpfung beispielsweise mit einem vorhandenen Google-Account erlauben.<br />
        In unserem Auftrag wird Google die über Google Analytics erhaltenen Informationen verwenden, um Ihre Nutzung unserer Website auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Webseitennutzung und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu erbringen. Die pseudonymisierten Nutzungsprofile werden ohne eine gesondert erteilte Einwilligung nicht mit personenbezogenen Daten über den Träger des Pseudonyms zusammengeführt.<br />
        Weitere Informationen zu Google Analytics finden Sie unter:<br />
        https://support.google.com/analytics/answer/2790010?hl=de<br />
        Bitte beachten Sie, dass Google auch selbstständig Zugriff auf Ihre über Google Analytics erhobenen Daten hat und diese Daten auch für eigene Zwecke nutzen kann. So kann Google diese Daten mit anderen Daten von Ihnen wie beispielsweise dem Suchverlauf, dem persönlichen Account, den Nutzungsdaten anderer Geräte und allen anderen Daten, die Google zu Ihnen vorliegen, verknüpfen.<br />
        Die Rechtsgrundlage für unsere Verarbeitung Ihrer Daten ist Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO. Ihre entsprechende Einwilligung erteilen Sie über unseren Cookie-Banner. Bitte beachten Sie, dass es sich bei Google um ein Unternehmen aus den USA handelt. Nach einem aktuellen Urteil des Europäischen Gerichtshofs (EuGH) besteht in den USA kein angemessenes Datenschutzniveau und damit ein Risiko für den Schutz Ihrer Daten. So können z.B. unter bestimmten Voraussetzungen Ihre Daten durch US-Behörden zu Kontroll- und Überwachungszwecken verarbeitet werden. Als geeignete Garantien zur Gewährleistung eines angemessenen Schutzniveaus bei der Datenübermittlung wurden die neuen EU-Standarddatenschutzklauseln vereinbart.<br />
        <br />
        <br />
        4.3. Google Tag Manager<br />
        Wir verwenden den Google Tag Manager. Durch diesen Dienst von Google können Website-Tags über eine Oberfläche verwaltet werden. Der Google Tag Manager implementiert allerdings lediglich Tags. Insofern werden keine Cookies eingesetzt und es werden keine personenbezogenen Daten erfasst. Der Google Tool Manager löst lediglich andere Tags aus, die wiederum ggf. Daten erfassen. Jedoch greift der Google Tag Manager nicht auf diese Daten zu. Eine Auswertung der Daten erfolgt ausschließlich im jeweiligen Tool (siehe hierzu im Einzelnen die vorgenannten Erläuterungen in Ziff. 4).<br />
        <br />
        <br />
        4.4. Hotjar<br />
        Unsere Website nutzt Hotjar, eine Analysesoftware der Hotjar Ltd., Dragonara Business Centre, 5th Floor, Dragonara Road, Paceville St Julian’s STJ 3141, Malta („Hotjar“), um die Bedürfnisse unserer Nutzer besser zu verstehen und das Angebot auf dieser Website zu optimieren. Mit der Technologie von Hotjar bekommen wir ein besseres Verständnis von den Erfahrungen unserer Nutzer (z.B. wieviel Zeit Nutzer auf welchen Seiten verbringen, welche Links sie anklicken, was sie mögen und was nicht etc.) und das hilft uns, unser Angebot am Feedback unserer Nutzer auszurichten. Hotjar arbeitet mit Cookies und anderen Technologien, um Informationen über das Verhalten unserer Nutzer und über ihre Endgeräte zu sammeln, insbesondere Bildschirmgröße, Gerätetyp (Unique Device Identifiers), Informationen über den verwendeten Browser, Standort (nur Land), zum Anzeigen unserer Website bevorzugte Sprache. Hotjar speichert diese Informationen in einem pseudonymisierten Nutzerprofil. Die Informationen werden weder von Hotjar noch von uns zur Identifizierung einzelner Nutzer verwendet oder mit weiteren Daten über einzelne Nutzer zusammengeführt. Weitere Informationen finden Sie in Hotjars Datenschutzerklärung (https://www.hotjar.com/legal/policies/privacy).<br />
        Unsere Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO. Ihre entsprechende Einwilligung erteilen Sie über unseren Cookie-Banner.<br />
        Sie können die Speicherung eines Nutzerprofils und von Informationen über Ihren Besuch auf unserer Website durch Hotjar sowie das Setzen von Hotjar Tracking Cookies auf anderen Websites verhindern, indem Sie die „Do Not Track“-Einstellung in Ihrem Browser aktivieren. Eine Anleitung hierzu stellt Hotjar unter dem nachfolgenden Link bereit: https://www.hotjar.com/de/legal/policies/do-not-track/.<br />
        <br />
        <br />
        4.5. Heyflow<br />
        Zur Verbesserung unseres Angebotes nutzen wir den Dienst der Heyflow GmbH, Jungfernstieg 49, 20354 Hamburg, Germany („Heyflow“). Heyflow hilft uns, das Internetangebot für Sie interessanter zu gestalten und die Nutzererfahrung zu verbessern. Auch ermöglicht Heyflow, Online-Formulare zu erstellen und sie auf unserer Website einzubinden. Hierbei werden Daten über die Nutzung unserer Website in pseudonymen Nutzerprofilen gespeichert. Zudem können Daten von verschiedenen Geräten, Sitzungen und Interaktionen mit einer sogenannten „User ID“ verknüpft werden. Die Informationen werden dann auf den Servern unseres Softwarepartners Heyflow gespeichert. Im Zuge der Erbringung des Dienstes werden zudem Cookies gesetzt.<br />
        Die Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Art. 6 Abs. 1 lit. f DSGVO aufgrund eines berechtigten Interesse, sofern die Verwendung nur die Funktionalität des Online-Formulars gewährleistet. Die Rechtsgrundlage für die übrige Verarbeitung Ihrer Daten ist Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO. Ihre entsprechende Einwilligung erteilen Sie über unseren Cookie-Banner. Weitere Informationen finden Sie in Heyflow Datenschutzerklärung (https://heyflow.app/de/datenschutz).<br />
        <br />
        <br />
        4.6. Meta Custom Audience über das Pixel-Verfahren (Standardversion)<br />
        Wir nutzen das von Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland (nachfolgend „Meta“), angebotene Produkt „Meta Custom Audience“ über das Pixel-Verfahren (Standardversion). Bei diesem Verfahren werden Cookies verwendet (siehe Ziff. 4). Unsere Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO. Ihre entsprechende Einwilligung erteilen Sie über unseren Cookie-Banner. Bitte beachten Sie, dass es sich bei Meta um ein Unternehmen aus den USA handelt. Nach einem aktuellen Urteil des Europäischen Gerichtshofs (EuGH) besteht in den USA kein angemessenes Datenschutzniveau und damit ein Risiko für den Schutz Ihrer Daten. So können z.B. unter bestimmten Voraussetzungen Ihre Daten durch US-Behörden zu Kontroll- und Überwachungszwecken verarbeitet werden. Wenn Sie dennoch in die Verwendung dieses Tools einwilligen möchten, können Sie dies über den Cookie-Banner auswählen. Nach Umsetzung der neuen EU-Standarddatenschutzklauseln werden diese die Rechtsgrundlage für die Datenübermittlung in Drittländer darstellen.<br />
        Meta erhebt und speichert Nutzungsdaten in pseudonymen Profilen zum Zweck der Webanalyse bzw. um interessenorientierte Werbung zu ermöglichen. Dadurch können wir die Aktionen von Nutzern nachverfolgen, nachdem diese eine Meta-Werbeanzeige gesehen oder geklickt haben. So können wir die Wirksamkeit der Meta-Werbeanzeigen für statistische Zwecke und Marktforschungszwecke erfassen. Die so erfassten Daten sind für uns anonym, das heißt wir sehen nicht die personenbezogenen Daten einzelner Nutzer. Diese Daten werden jedoch von Meta gespeichert und verarbeitet, worüber wir Sie entsprechend unserem Kenntnisstand unterrichten. Meta kann diese Daten mit Ihrem Meta-Konto verbinden und auch für eigene Werbezwecke entsprechend Metas Datenverwendungsrichtlinie verwenden.<br />
        Verantwortlich für die Datenverarbeitung ist neben uns auch Meta selbst. Die Verarbeitung der Daten durch Meta erfolgt nach Maßgabe der Datenverwendungsrichtlinie von Meta. Einzelheiten hierzu finden Sie in der Datenverwendungsrichtlinie von Meta. Spezielle Informationen und Details zum Meta-Pixel und seiner Funktionsweise finden Sie im Hilfebereich von Meta.<br />
        Insofern sind wir mit Meta gemeinsam i.S.d. Art. 26 DSGVO für die Verarbeitung Ihrer personenbezogenen Daten verantwortlich. In diesem Fall können Sie Ihre Rechte (siehe Ziff. 11) grundsätzlich sowohl gegenüber uns als auch gegenüber Meta geltend machen. Als erste Anlaufstelle dient allerdings Meta. Wir haben mit Meta eine Vereinbarung über die gemeinsame Verantwortlichkeit zur Verarbeitung personenbezogener Daten geschlossen. Diese können Sie unter folgendem Link einsehen: https://www.facebook.com/legal/controller_addendum.<br />
        <br />
        <br />
        4.7. Hetzner<br />
        Die Website nutzt die Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen („Hetzner“) zum Zwecke des Hostings und somit zum Zwecke der Nutzung der Nutzung von Server für die Unterbringung der Website. Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers umfasst. Unter der nachstehenden Internetadresse erhalten Sie weitere Informationen über die Datenschutzbestimmungen von Hetzner: https://www.hetzner.com/de/legal/privacy-policy<br />
        <br />
        <br />
        4.8. All-Inkl. Webhosting<br />
        Die Website nutzt die ALL-INKL.COM - Neue Medien Münnich, Inhaber: René Münnich, Hauptstraße 68, 02742 Friedersdorf („All-Inkl. Webhosting“) zum Zwecke des Hostings und somit zum Zwecke der Nutzung der Nutzung von Server für die Unterbringung der Website. Die Verwendung von All-Inkl. Webhosting erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers umfasst. Unter der nachstehenden Internetadresse erhalten Sie weitere Informationen über die Datenschutzbestimmungen von All-Inkl. Webhosting: https://all-inkl.com/info/datenschutzinformationen/<br />
        <br />
        <br />
        <br />
        <br />
        5. Social Media Auftritte<br />
        <br />
        <br />
        5.1. Datenverarbeitung durch Rechteplus und Rechtsgrundlage<br />
        Unsere Social-Media-Auftritte dienen dem Zweck, Sie über Rechteplus sowie zu neuen Entwicklungen und Services von uns zu informieren. Je nach Angebot der jeweiligen Anbieter haben Sie z.B. die Möglichkeit zu unterschiedlicher Interaktion (Kommentierung, Empfehlung etc.) z.B. im Zusammenhang mit unserem Social-Media-Auftritt. Die Interaktion der Nutzer ist für uns ein wichtiges Kriterium, um ein zielgerichtetes Marketing zu betreiben. So können wir z.B. ermitteln, welche Beiträge bevorzugt gelesen werden. Die diesbezüglich von den Anbietern ermittelten Statistiken nutzen wir daher auch für eigene Zwecke. Sofern wir dabei personenbezogene Daten der Nutzer verarbeiten, ist die Rechtsgrundlage hierfür Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht dann insbesondere in einer zielgerichteten Information / Werbung. Über die Rechtsgrundlage, auf deren Basis die Anbieter Ihre Daten zu eigenen Zwecken verarbeiten, werden Sie von den Anbietern gesondert informiert.<br />
        <br />
        <br />
        5.2. Gemeinsame Verantwortung<br />
        In einzelnen Fällen sind wir mit den Social-Media-Anbietern gemeinsam für die Verarbeitung Ihrer personenbezogenen Daten verantwortlich. In diesem Fall können Sie Ihre Rechte (hierzu unter Ziff. 11) grds. sowohl ggü. uns als auch ggü. dem Social-Media-Anbieter geltend machen. Als erste Anlaufstelle dient allerdings der Social-Media-Anbieter.<br />
        Wir haben mit Meta eine Vereinbarung über die gemeinsame Verantwortlichkeit zur Verarbeitung personenbezogener Daten geschlossen. Diese gilt in Bezug auf die Verarbeitung sog. „Insights-Daten“. Dabei handelt es sich um Seitenstatistiken insbesondere zu den Interaktionen der Meta-Nutzer. Einzelheiten zu den Insights-Daten finden Sie hier: https://www.facebook.com/business/pages/manage#page_insights. Unsere Vereinbarung mit Meta können Sie unter folgendem Link einsehen: www.facebook.com/legal/terms/page_controller_addendum.<br />
        Mit der LinkedIn Irland haben wir in Bezug auf sog. „Seiten-Insights“ ebenfalls eine Vereinbarung über die gemeinsame Verantwortung geschlossen. Mit den Seiten-Insights stellt uns LinkedIn Irland keine personenbezogenen, sondern lediglich aggregierte Daten von Ihnen zur Verfügung. Es ist uns nicht möglich, über die Informationen der Seiten-Insights Rückschlüsse zu einzelnen Nutzern zu ziehen. Einzelheiten zu den Seiten-Insights sowie unsere Vereinbarung mit LinkedIn Irland können Sie unter folgendem Link einsehen: https://legal.linkedin.com/pages-joint-controller-addendum.<br />
        Bitte beachten Sie, dass Meta und LinkedIn Ihre Daten auch außerhalb der EU/des EWR verarbeitet. Nach einem aktuellen Urteil des Europäischen Gerichtshofs (EuGH) besteht in den USA kein angemessenes Datenschutzniveau und damit ein Risiko für den Schutz Ihrer Daten. So können z.B. unter bestimmten Voraussetzungen Ihre Daten durch US-Behörden zu Kontroll- und Überwachungszwecken verarbeitet werden.<br />
        In Bezug auf die Speicherdauer der von uns zu eigenen Zwecken von Ihnen verarbeiteten Daten verweisen wir auf unsere Ausführungen unter Ziff. 9. Im Übrigen beachten Sie bitte die Datenschutzbestimmungen des jeweiligen Social-Media-Anbieters.<br />
        <br />
        6. Datenverarbeitung im Zusammenhang mit der Leistungserbringung<br />
        <br />
        <br />
        Wenn Sie uns mit der Leistungserbringung beauftragen, erheben wir von Ihnen die durch „*“ kenntlich gemachten Pflichtangaben (z.B. Vorname, Name, E-Mail-Adresse, Wohnsitzland). Die weiteren Eingabemöglichkeiten zu Ihrer Person sind freiwillig. Wir benötigen neben den genannten Pflichtangaben auch Ihre Daten zu XXX (z.B. XXX). Diese Daten sind für die Erfüllung Ihres Vertrags gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO erforderlich.<br />
        <br />
        <br />
        Sofern besondere Kategorien personenbezogener Daten betroffen sind, richtet sich die Verarbeitung insbesondere nach Art. 9 DSGVO und § 22 BDSG. „Besondere Kategorien“ personenbezogener Daten sind gemäß Art. 9 Abs. 1 DSGVO Daten, aus denen die rassische und ethnische Herkunft, politische Meinungen, religiöse oder weltanschauliche Überzeugungen oder die Gewerkschaftszugehörigkeit hervorgehen, sowie die Verarbeitung von genetischen Daten, biometrischen Daten zur eindeutigen Identifizierung einer natürlichen Person, Gesundheitsdaten oder Daten zum Sexualleben oder der sexuellen Orientierung einer natürlichen Person. Die Verarbeitung dieser Daten durch uns erfolgt auf Basis Ihrer Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO und zur Geltendmachung, Ausübung oder Verteidigung Ihrer Rechtsansprüche Art. 9 Abs. 2 lit. f DSGVO.<br />
        <br />
        <br />
        7. Datenübermittlung<br />
        <br />
        <br />
        Wir geben Ihre personenbezogenen Daten nur an Dritte oder sonstige Empfänger weiter, wenn dies zur Leistungserbringung erforderlich ist, Sie Ihre Einwilligung erteilt haben, eine gesetzliche besteht oder die Datenweitergabe aufgrund einer sonstigen gesetzlichen Grundlage zulässig ist. Soweit erforderlich, haben wir mit den Empfängern Ihrer Daten Vereinbarungen über die Auftragsverarbeitung nach Maßgabe von Art. 28 DSGVO getroffen.<br />
        <br />
        <br />
        8. Datenübermittlung in Staaten außerhalb der EU<br />
        <br />
        <br />
        Soweit für unsere Zwecke erforderlich, übermitteln wir Ihre Daten auch an Empfänger außerhalb der EU, wenn Sie Ihre Einwilligung erteilt haben, eine gesetzliche Verpflichtung besteht oder die Datenweitergabe aufgrund einer sonstigen gesetzlichen Grundlage zulässig ist. So werden Ihre Daten im Rahmen der Datenverarbeitung auch an Empfänger übermittelt, die ihren Sitz in den USA haben. Bitte beachten Sie, dass nach einem Urteil des Europäischen Gerichtshofs (EuGH) besteht in den USA im Allgemeinen kein angemessenes Datenschutzniveau und damit ein Risiko für den Schutz Ihrer Daten. So können z.B. unter bestimmten Voraussetzungen Ihre Daten durch US-Behörden zu Kontroll- und Überwachungszwecken verarbeitet werden. Nach dem Angemessenheitsbeschluss zum EU-U.S. Data Privacy Framework können Unternehmen sich jedoch beim U.S. Department of Commerce zertifizieren, um ein angemessenes Datenschutzniveau herzustellen. Im Übrigen verweisen wir hinsichtlich der Rechtsgrundlage für die Datenübermittlung zunächst noch auf Art. 49 DSGVO. Ein angemessenes Datenschutzniveau ist zukünftig durch den Abschluss der neuen sog. EU-Standarddatenschutzklauseln oder durch Zertifizierung nach dem Angemessenheitsbeschluss sichergestellt.<br />
        <br />
        9. Dauer, für die personenbezogene Daten gespeichert werden / Kriterien für die Festlegung der Dauer<br />
        <br />
        <br />
        Ihre personenbezogenen Daten werden von uns so lange gespeichert, wie es für die vorgenannten Zwecke der Verarbeitung erforderlich ist, im Falle eines Widerspruchs keine zwingenden schutzwürdigen Gründe von Rechteplus entgegenstehen oder im Falle eines Widerrufs keine sonstige Rechtsgrundlage für die Datenverarbeitung besteht. In bestimmten Fällen, z.B. wenn eine gesetzliche Aufbewahrungspflicht besteht, werden Ihre personenbezogenen Daten jedoch nicht unmittelbar gelöscht, sondern zunächst gesperrt.<br />
        Die im Rahmen des Vertragsverhältnisses von uns erhobenen und verarbeiteten personenbezogenen Daten werden bis zum Ablauf der Regelverjährungsfrist (3 Jahre nach Ablauf des Kalenderjahres, in dem der Vertrag beendet wurde) gespeichert und danach gelöscht, es sei denn, dass wir nach Artikel 6 Abs. 1 S. 1 lit. c DSGVO aufgrund von Aufbewahrungs- und Dokumentationspflichten (insb. aus HGB oder AO) zu einer längeren Speicherung verpflichtet sind. Ihre Vertragsdaten und die dazugehörigen Dokumente speichern wir für 10 Jahre (§147 Abs.3 AO), sonstige Handels- und Geschäftsbriefe für 6 Jahre (§ 257 Abs. 4 HGB).<br />
        <br />
        10. Sicherheitsmaßnahmen zum Schutz Ihrer personenbezogenen Daten<br />
        <br />
        <br />
        Wir schützen Ihre Daten durch technische und organisatorische Maßnahmen vor unberechtigtem Zugriff, Verlust oder Zerstörung. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert. Unsere Mitarbeiter und alle an der Datenverarbeitung beteiligten Personen sind zur Einhaltung datenschutzrelevanter Gesetze und dem vertraulichen Umgang mit personenbezogenen Daten verpflichtet. Unsere Mitarbeiter sind entsprechend geschult.<br />
        Zum Schutz Ihrer personenbezogenen Daten auf dieser Website benutzen wir ein sicheres Online-Übertragungsverfahren, die so genannte „Secure Socket Layer“ (SSL) Übertragung. Sie erkennen dies daran, dass an dem Adressbestandteil https:// ein geschlossenes Schloss-Symbol angezeigt wird. Durch Anklicken des Symbols erhalten Sie Informationen über das verwendete SSL-Zertifikat. Die Darstellung des Symbols ist abhängig von der von Ihnen eingesetzten Browserversion. Die SSL-Verschlüsselung gewährleistet die verschlüsselte und vollständige Übertragung Ihrer Daten.<br />
        <br />
        <br />
        11. Ihre Rechte<br />
        <br />
        <br />
        Im Rahmen der gesetzlichen Vorgaben haben Sie gegenüber Rechteplus grundsätzlich Anspruch auf<br />
        Bestätigung, ob Sie betreffende personenbezogene Daten durch Rechteplus verarbeitet werden,<br />
        Auskunft über diese Daten und die Umstände der Verarbeitung,<br />
        Berichtigung, soweit diese Daten unrichtig sind,<br />
        Löschung, soweit für die Verarbeitung keine Rechtfertigung und keine Pflicht zur Aufbewahrung (mehr) besteht,<br />
        Einschränkung der Verarbeitung in besonderen gesetzlich bestimmten Fällen,<br />
        Widerspruch im Falle einer Datenverarbeitung auf Basis von Art. 6 Abs. 1 S. 1 lit. f. DSGVO und<br />
        Übermittlung Ihrer personenbezogenen Daten – soweit Sie diese bereitgestellt haben – an Sie oder einen Dritten in einem strukturierten, gängigen und maschinenlesbaren Format.<br />
        <br />
        <br />
        Soweit die Verarbeitung Ihrer personenbezogenen Daten auf Ihrer Einwilligung beruht, haben Sie das Recht, die Einwilligung jederzeit zu widerrufen, mit der Folge, dass die Verarbeitung Ihrer personenbezogenen Daten für die Zukunft unzulässig wird. Dies berührt die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung jedoch nicht.<br />
        Ihr konkretes Begehren richten Sie bitte schriftlich oder per E-Mail unter eindeutiger Identifizierungsmöglichkeit Ihrer Person an unseren Datenschutzbeauftragten.<br />
        <br />
        <br />
        Soweit wir Ihre Daten in gemeinsamer Verantwortlichkeit i.S.d. Art. 26 DSGVO mit Dritten verarbeiten, ist der Dritte zentral für die Wahrnehmung aller Betroffenenrechte zuständig. Allerdings bleibt es Ihnen unbenommen, Ihre Rechte auch gegenüber uns geltend zu machen.<br />
        Schließlich möchten wir Sie auf Ihr Beschwerderecht bei der Aufsichtsbehörde (Aufsichtsbehörde in Berlin: https://www.datenschutz-berlin.de/) hinweisen.<br />
        <br />
        <br />
        12. Widerspruchsrecht<br />
        <br />
        <br />
        DIE BETROFFENE PERSON HAT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, JEDERZEIT GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN, DIE AUFGRUND VON ARTIKEL 6 ABSATZ 1 BUCHSTABEN E ODER F ERFOLGT, WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DER VERANTWORTLICHE VERARBEITET DIE PERSONENBEZOGENEN DATEN NICHT MEHR, ES SEI DENN, ER KANN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE DIE INTERESSEN, RECHTE UND FREIHEITEN DER BETROFFENEN PERSON ÜBERWIEGEN, ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN.<br />
        <br />
        <br />
        WERDEN PERSONENBEZOGENE DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HAT DIE BETROFFENE PERSON DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.<br />
        <br />
        <br />
        <br />
        13. Keine automatisierte Einzelentscheidung<br />
        Wir verwenden Ihre personenbezogenen Daten nicht für automatisierte Einzelentscheidungen.<br />
        <br />
        14. Änderung der Datenschutzerklärung<br />
        Neue rechtliche Vorgaben, unternehmerische Entscheidungen oder die technische Entwicklung erfordern gegebenenfalls Änderungen in unserer Datenschutzerklärung. Die Datenschutzerklärung wird dann entsprechend angepasst. Die aktuelle Version finden Sie immer auf unserer Website.



      </Modal>
    </>
  );
};
