import {
	type Icon,
	IconDots,
	IconFolder,
	IconShare3,
	IconTrash,
} from "@tabler/icons-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { useTranslation } from "react-i18next";

export function NavDocuments({
	items,
}: {
	items: {
		name: string;
		url: string;
		icon: Icon;
	}[];
}) {
	const { isMobile } = useSidebar();
	const { t } = useTranslation("dashboard", {
		keyPrefix: "dashboard",
	});
	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel>Documents</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => {
					return (
						<SidebarMenuItem key={item.name}>
							<SidebarMenuButton asChild>
								<a href={item.url}>
									<item.icon />
									<span>{t(`documents.${item.name}`)}</span>
								</a>
							</SidebarMenuButton>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuAction
										showOnHover
										className="data-[state=open]:bg-accent rounded-sm"
									>
										<IconDots />
										<span className="sr-only">More</span>
									</SidebarMenuAction>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className="w-24 rounded-lg"
									side={isMobile ? "bottom" : "right"}
									align={isMobile ? "end" : "start"}
								>
									<DropdownMenuItem>
										<IconFolder />
										<span>{t("open")}</span>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<IconShare3 />
										<span>{t("share")}</span>
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem variant="destructive">
										<IconTrash />
										<span>{t("delete")}</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</SidebarMenuItem>
					);
				})}
				<SidebarMenuItem>
					<SidebarMenuButton className="text-sidebar-foreground/70">
						<IconDots className="text-sidebar-foreground/70" />
						<span>{t("more")}</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarGroup>
	);
}
