import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

function About() {
	const { t } = useTranslation();
	return (
		<section>
			<h1>About {t("title")}</h1>
		</section>
	);
}
export const Route = createFileRoute("/about")({
	component: About,
});
