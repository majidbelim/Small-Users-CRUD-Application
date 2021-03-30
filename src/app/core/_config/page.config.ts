export class PageConfig {
	public defaults: any = {
		dashboard: {
			page: {
				title: 'Dashboard',
				desc: 'Latest updates and statistic charts'
			},
		},
		'my-page': { // <= add page URL
			page: { title: 'My page', desc: 'My page desc' } // <= Page name and description
		},
		members: {
			page: { title: 'Members', desc: 'Members' }
		},
		forms: {
			page: { title: 'Forms', desc: '' }
		},
		ecommerce: {
			customers: {
				page: { title: 'Customers', desc: '' }
			},
			products: {
				edit: {
					page: { title: 'Edit product', desc: '' }
				},
				add: {
					page: { title: 'Create product', desc: '' }
				}
			},
			orders: {
				page: { title: 'Orders', desc: '' }
			}
		},
		'user-management': {
			users: {
				page: { title: 'Users', desc: '' }
			},
			roles: {
				page: { title: 'Roles', desc: '' }
			}
		},
		builder: {
			page: { title: 'Layout Builder', desc: '' }
		},
		header: {
			actions: {
				page: { title: 'Actions', desc: 'Actions example page' }
			}
		},
		profile: {
			page: { title: 'User Profile', desc: '' }
		},
		error: {
			404: {
				page: { title: '404 Not Found', desc: '', subheader: false }
			},
			403: {
				page: { title: '403 Access Forbidden', desc: '', subheader: false }
			}
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
