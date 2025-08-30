import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { LanguageSwitcher } from "./LanguageSwitcher";
export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const LoginUser = (e?: React.FormEvent) => {
		e?.preventDefault();
		toast.success(t("common.loggedIn"), {
			closeButton: true,
		});
		return navigate({
			to: "/dashboard",
		});
	};
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card className="overflow-hidden p-0">
				<CardContent className="grid p-0 md:grid-cols-2">
					<div>
						<div className="flex justify-end pt-4 px-6">
							<LanguageSwitcher />
						</div>
						<form className="p-6" onSubmit={LoginUser}>
							<div className="flex flex-col gap-6">
								<div className="flex flex-col items-center text-center">
									<h1 className="text-2xl font-bold">{t("login.title")}</h1>
									<p className="text-muted-foreground text-balance">
										{t("login.subtitle")}
									</p>
								</div>
								<div className="grid gap-3">
									<Label htmlFor="email">{t("common.email")}</Label>
									<Input
										id="email"
										type="email"
										placeholder={t("common.emailPlaceholder")}
										required
										defaultValue="test@gmail.com"
									/>
								</div>
								<div className="grid gap-3">
									<div className="flex items-center">
										<Label htmlFor="password">Password</Label>
										<a
											href="#"
											className="ml-auto text-sm underline-offset-2 hover:underline"
										>
											{t("login.forgotPassword")}
										</a>
									</div>
									<Input
										id="password"
										type="password"
										placeholder={t("common.passwordPlaceholder")}
										required
										defaultValue="password"
									/>
								</div>
								<Button type="submit" className="w-full cursor-pointer">
									{t("common.login")}
								</Button>
								<div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
									<span className="bg-card text-muted-foreground relative z-10 px-2">
										{t("login.socialLogin")}
									</span>
								</div>
								<div className="grid">
									<Button
										variant="outline"
										type="button"
										className="w-full"
										onClick={LoginUser}
									>
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 256 262"
											xmlns="http://www.w3.org/2000/svg"
											preserveAspectRatio="xMidYMid"
										>
											<title>Login With Google</title>
											<path
												d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
												fill="#4285F4"
											/>
											<path
												d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
												fill="#34A853"
											/>
											<path
												d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
												fill="#FBBC05"
											/>
											<path
												d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
												fill="#EB4335"
											/>
										</svg>
										<span className="sr-only">Login with Google</span>
									</Button>
								</div>
								<p className="text-sm text-center">
									{t("login.registerPrompt")}{" "}
									<a href="#" className="underline underline-offset-4">
										{t("common.register")}
									</a>
								</p>
							</div>
						</form>
					</div>
					<div className="bg-muted relative hidden md:block">
						<img
							src="https://images.unsplash.com/photo-1572253765558-ed6413a68da5?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							// src="https://images.unsplash.com/photo-1529733905113-027ed85d7e33?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Login background"
							className="absolute object-center object-cover dark:brightness-[0.2] dark:grayscale"
						/>
					</div>
				</CardContent>
			</Card>
			<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
				{t("login.footer")}
			</div>
		</div>
	);
}
