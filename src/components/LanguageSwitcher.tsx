import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { LANGUAGES } from "@/constant";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const changeLang = (value: string) => {
		i18n.changeLanguage(value);
		localStorage.setItem("lang", value);
	};
	return (
		<Select
			defaultValue={localStorage.getItem("lang") || "en"}
			onValueChange={changeLang}
		>
			<SelectTrigger className="shadow-none">
				<SelectValue placeholder="Language" />
			</SelectTrigger>
			<SelectContent>
				{LANGUAGES.map(({ label, code, flag }) => (
					<SelectItem key={code} value={code}>
						<ReactCountryFlag svg className="emojiFlag" countryCode={flag} />
						{label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
