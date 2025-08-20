"use client";

import type { Zitat } from "../quiz";
import ZitateQuiz from "../quiz";

// bald aus csv laden
const Zitate: Zitat[] = [
	{
		text: "Habe ich schon mal erzählt, dass ich gute Verbindungen in die Bayrischen Steuerämter habe",
		isTrue: true,
	},
	{ text: "Ich glaube das ist falsch", isTrue: false },
	{ text: "Ich glaube das ist richtig", isTrue: true },
	{ text: "Eine Promotion lohnt sich immer", isTrue: false },
	{
		text: "Darf ich sie nochmal dran erinnern, mir Fragen zu stellen",
		isTrue: true,
	},
	{ text: "Benutzen sie nicht Javascript", isTrue: true },
	{ text: "Dann wünsch ich ihnen Zuhörern allen ein Hallo", isTrue: true },
	{
		text: "wenn man nur den bachelor hat hat man dokumentiert, dass man den master nicht hat",
		isTrue: true,
	},
	{
		text: "Unteranderem auch die bayrische Steuerverwaltung zu denen ich sehr gute Kontakte habe",
		isTrue: true,
	},
	{ text: "Habe ich schonmal erwähnt...?", isTrue: true },
	{ text: "Ich will keine Werbung machen, aber...", isTrue: true },
	{ text: "Ein ehemaliger Student von mir...", isTrue: true },
	{ text: "Ich kann hacken. Ich weiß, wie das geht.", isTrue: true },
	{ text: "Von der Physik bis zur Physik", isTrue: true },
	{
		text: "Ich habe ein Bild bei mir von nem Clown, der einen Clown malt",
		isTrue: true,
	},
	{ text: "For exam... äh, Beispiel", isTrue: true },
	{
		text: "Ich weiß nicht, ob ich das Ihnen schon einmal erzählt habe [...]",
		isTrue: true,
	},
	{ text: "Ich bin Bayer, ich kenne mich mit sowas aus", isTrue: true },
	{
		text: "und damit höre ich jetzt auch auf werbung zu machen... also ich brauch ja keine werbung zu machen...",
		isTrue: true,
	},
	{ text: "Haben Sie schonmal vom Porsche Stipendium gehört?", isTrue: false },
	{ text: "Ich liebe C++", isTrue: false },
	{
		text: "Heute muss ich mich etwas beeilen, denn wir haben viel vor",
		isTrue: false,
	},
	{
		text: "Wer unter ihnen hat den schonmal Brainfuck verwendet?",
		isTrue: false,
	},
	{
		text: "Studieren sie lieber nicht, sondern machen sie möglichst viel praktisches für mehr Geld.",
		isTrue: false,
	},
	{
		text: "Wenn sie einen Scheißprozess digitalisieren, dann haben sie einen scheiß digitalen Prozess.",
		isTrue: true,
	},
	{
		text: "Ich bin immer bereit, für eine gute Diskussion - vorausgesetzt, es geht um Autos und Geld.",
		isTrue: false,
	},
	{
		text: 'Ein kluger Mann sagte einmal: "Wer nicht programmieren kann, ist ein Analphabet in der digitalen Welt."',
		isTrue: false,
	},
	{
		text: "Ich habe ein paar Freunde bei Mercedes - ich kann Ihnen einen guten Preis für ein neues Auto machen.",
		isTrue: false,
	},
	{
		text: "Wenn Sie ein Mann sind und in meinem Fachgebiet arbeiten wollen, dann sollten Sie besser bereit sein, hart zu arbeiten und Ihre Meinungen für sich zu behalten.",
		isTrue: false,
	},
	{
		text: "Ich bin ein Mann, der weiß, was er will und ich bekomme es auch.",
		isTrue: false,
	},
	{
		text: "Ich bin Professor für Softwaretechnik, aber ich bin auch ein Mann mit Stil - ich trage gerne teure Anzüge und fahre nur die besten Autos.",
		isTrue: false,
	},
	{
		text: "Ich denke nicht, dass Frauen in der Technikbranche gut genug sind, aber ich bin bereit, mich irren zu lassen - vorausgesetzt, sie können beweisen, dass sie genauso gut sind wie ich.",
		isTrue: false,
	},
];

export default function RumpeQuiz({ zitat }: { zitat: Zitat }) {
	return (
		<ZitateQuiz profName="Rumpe" zitatList={Zitate} zitat={zitat}></ZitateQuiz>
	);
}
