import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
export default function Header() {
	const { t } = useTranslation();

	return (
		<header className="p-2 flex gap-2 bg-white text-black justify-between">
			<nav className="flex flex-row">
				<div className="px-2 font-bold">
					<Link to="/">{t("home")}</Link>
					<Link to="/about">{t("about")}</Link>
				</div>
				<LanguageSwitcher />
			</nav>
		</header>
	);
}
