import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

export default function Faq() {
	return (
		<div className="flex flex-col items-center justify-center gap-6 py-10">
			<div className="flex flex-col items-center justify-center gap-2 max-w-md">
				<h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
					Frequently Asked Questions
				</h2>
				<p className="sm:text-base text-sm text-muted-foreground text-center">
					Everything you need to know about our platform. Still have questions? Contact us.
				</p>
			</div>
			<div className="w-full max-w-lg">
				<Accordion
					type="single"
					collapsible
					className="w-full flex flex-col gap-4"
				>
					<AccordionItem value="item-1">
						<AccordionTrigger className="hover:no-underline">
							What is included in the subscription plan?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Your subscription includes access to all core features, regular updates, priority support, and unlimited usage across your team.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger className="hover:no-underline">
							Can I use this service for client projects?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Absolutely! You can use our platform to manage and deliver client work, white-labeling features are also available on higher tiers.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger className="hover:no-underline">
							Do you offer a free trial?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							No, we do not offer a free trial.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4">
						<AccordionTrigger className="hover:no-underline">
							How do I cancel my subscription?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							You can cancel anytime from your dashboard under the billing section. Once canceled, you will retain access until the end of your billing cycle.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-5">
						<AccordionTrigger className="hover:no-underline">
							Is my data secure?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Yes, we use industry-standard encryption and security protocols. All your data is stored securely and regularly backed up.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
