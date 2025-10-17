"use client";

import { Slot } from "@radix-ui/react-slot";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CircleChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import {
	type ComponentProps,
	type ComponentPropsWithoutRef,
	useEffect,
	useState,
} from "react";
import { cn } from "@/lib/utils";
import { DialogDescription } from "../ui/dialog";
import { Sheet, SheetTitle, SheetTrigger } from "../ui/sheet";
import { FacultiesDesktopNav } from "./desktop";
import { FacultiesMobileNav } from "./mobile";
import { FacultiesSheetContent } from "./sheet";

type AsChildProps<DefaultElementProps> =
	| ({ asChild?: false } & DefaultElementProps)
	| { asChild: true; children: React.ReactNode };

type ButtonProps = AsChildProps<ComponentPropsWithoutRef<"button">>;

export function FacultiesButton({ asChild, ...props }: ButtonProps) {
	const Component = asChild ? Slot : "button";
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	// biome-ignore lint/correctness/useExhaustiveDependencies: Effect should run on pathname change
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<Sheet open={open} onOpenChange={(x) => setOpen(x)}>
			<SheetTrigger asChild title="Fakultätsübersicht">
				<Component {...props} />
			</SheetTrigger>
			<FacultiesSheetContent title="Fakultätsübersicht">
				<VisuallyHidden>
					<SheetTitle>Fakultätsübersicht</SheetTitle>
					<DialogDescription></DialogDescription>
				</VisuallyHidden>
				<FacultiesDesktopNav />
				<FacultiesMobileNav />
			</FacultiesSheetContent>
		</Sheet>
	);
}

export function StyledFacultiesButton({
	className,
	...props
}: ComponentProps<"button">) {
	return (
		<FacultiesButton
			className={cn("flex flex-row items-center", className)}
			{...props}
		>
			Menü <CircleChevronDown className="ml-2 size-4" />
		</FacultiesButton>
	);
}
