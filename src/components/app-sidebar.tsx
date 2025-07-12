import {
	IconCamera,
	IconChartBar,
	IconDashboard,
	IconDatabase,
	IconFileAi,
	IconFileDescription,
	IconFileWord,
	IconFolder,
	IconHelp,
	IconInnerShadowTop,
	IconListDetails,
	IconReport,
	IconSearch,
	IconSettings,
	IconUsers,
} from "@tabler/icons-react";
import type * as React from "react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "dashboard",
			url: "#",
			icon: IconDashboard,
		},
		{
			title: "lifecycle",
			url: "#",
			icon: IconListDetails,
		},
		{
			title: "analytics",
			url: "#",
			icon: IconChartBar,
		},
		{
			title: "projects",
			url: "#",
			icon: IconFolder,
		},
		{
			title: "team",
			url: "#",
			icon: IconUsers,
		},
	],
	navClouds: [
		{
			title: "capture",
			icon: IconCamera,
			isActive: true,
			url: "#",
			items: [
				{
					title: "activeProposals",
					url: "#",
				},
				{
					title: "archived",
					url: "#",
				},
			],
		},
		{
			title: "proposal",
			icon: IconFileDescription,
			url: "#",
			items: [
				{
					title: "activeProposals",
					url: "#",
				},
				{
					title: "archived",
					url: "#",
				},
			],
		},
		{
			title: "prompts",
			icon: IconFileAi,
			url: "#",
			items: [
				{
					title: "activeProposals",
					url: "#",
				},
				{
					title: "archived",
					url: "#",
				},
			],
		},
	],
	navSecondary: [
		{
			title: "settings",
			url: "#",
			icon: IconSettings,
		},
		{
			title: "getHelp",
			url: "#",
			icon: IconHelp,
		},
		{
			title: "search",
			url: "#",
			icon: IconSearch,
		},
	],
	documents: [
		{
			name: "dataLibrary",
			url: "#",
			icon: IconDatabase,
		},
		{
			name: "reports",
			url: "#",
			icon: IconReport,
		},
		{
			name: "wordAssistant",
			url: "#",
			icon: IconFileWord,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<a href="#">
								<IconInnerShadowTop className="!size-5" />
								<span className="text-base font-semibold">Acme Inc.</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavDocuments items={data.documents} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
