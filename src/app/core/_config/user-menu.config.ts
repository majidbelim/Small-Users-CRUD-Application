export class UserMenuConfig {
	public defaults: any = {
		header: {},
		aside: {
			self: {},
			items: [
				// {
				// 	title: "Home",
				// 	desc: "Home",
				// 	icon: "flaticon-home-1",
				// 	page: "/dashboard",
				// },
				{
					title: "User Management",
					desc: "User Management",
					icon: "flaticon-user-settings",
					page: "/users",
				
				},
			],
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
