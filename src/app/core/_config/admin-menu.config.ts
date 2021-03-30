import { Location } from '@angular/common';
export class AdminMenuConfig {
	public defaults: any = {
		header: {},
		aside: {
			self: {},
			items: [
				{
					title: "Home",
					desc: "Home",
					icon: "flaticon-home-1",
					page: "/dashboard",
				},
				{
					title: "User",
					desc: "User",
					icon: "flaticon-rotate",
					page: "/users",
					// submenu: [
						// {
						// 	title: "Users",
						// 	desc: "Users",
						// 	root: true,
						// 	page: "/users",
						// 	icon: "flaticon-users",
						// }
					// ],
				},
				{
					title: "Company",
					desc: "Company",
					icon: "flaticon-buildings",
					page: "/companies",
					// submenu: [
						// {
						// 	title: "Companies",
						// 	desc: "Companies",
						// 	root: true,
						// 	page: "/companies",
						// 	icon: "flaticon-signs-1",
						// }
					// ],
				},
				{
					title: "Role",
					desc: "Role",
					icon: "flaticon-buildings",
				
					submenu: [
						{
							title: "Function UM",
							desc: "Function UM",
							root: true,
							page: "/function-um",
							icon: "flaticon-signs-1",
						}
					],
				},
				{
					title: "Work Order Type",
					desc: "Work Order Type",
					icon: "flaticon-map",
					submenu: [
						{
							title: "Work Order Types",
							desc: "Work Order Types",
							root: true,
							page: "/wo-types",
							icon: "flaticon-signs-1",
						}
					],
				},
				{
					title: "Work Order",
					desc: "Work Order",
					icon: "flaticon-time-2",
					submenu: [
						{
							title: "Work Orders",
							desc: "Work Orders",
							root: true,
							page: "/work-orders",
							icon: "flaticon-signs-1",
						}
					],
				},
				{
					title: "Location",
					desc: "Location",
					icon: "flaticon-location",
					submenu: [
						{
							title: "Countries",
							desc: "Countries",
							root: true,
							page: "/location/countries",
							icon: "flaticon-earth-globe",
						},
						{
							title: "States",
							desc: "States",
							root: true,
							page: "/location/states",
							icon: "flaticon2-pin-1",
						},
						{
							title: "Cities",
							desc: "Cities",
							root: true,
							page: "/location/cities",
							icon: "flaticon-placeholder-3",
						}
					],
				},
				{
					title: "Schedule Job",
					desc: "Schedule Job",
					icon: "flaticon-squares-4",
					submenu: [
						{
							title: "Job Configuration",
							desc: "Job Configuration",
							icon: "flaticon-interface",
							root: true,
							page: "/job-config",
						}
					]
				},
				{
					title: "Master",
					desc: "Master",
					icon: "flaticon-graph",
					submenu: [
						{
							title: "Set Of Books",
							desc: "Set Of Books",
							root: true,
							page: "/set-books",
							icon: "flaticon-signs-1",
						},
						{
							title: "Business Segments",
							desc: "Business Segments",
							root: true,
							page: "/business-segment",
							icon: "flaticon-business",
						},
						{
							title: "Functional Class",
							desc: "Functional Class",
							root: true,
							page: "/functional-class",
							icon: "flaticon-folder",
						},
						{
							title: "Property Groups",
							desc: "Property Groups",
							root: true,
							page: "/property-groups",
							icon: "flaticon2-group",
						},
						{
							title: "Work Order Groups",
							desc: "Work Order Groups",
							root: true,
							page: "/wo-groups",
							icon: "flaticon-signs-1",
						},
						{
							title: "RWIP Type",
							desc: "RWIP Type",
							root: true,
							page: "/rwip-type",
							icon: "flaticon-share",
						},
						{
							title: "Revision",
							desc: "Revision",
							root: true,
							page: "/revision",
							icon: "flaticon-edit-1",
						},
						{
							title: "AFUDC Status",
							desc: "AFUDC Status",
							root: true,
							page: "/afudc-status",
							icon: "flaticon2-dashboard",
						},
						{
							title: "Department",
							desc: "Department",
							root: true,
							page: "/department",
							icon: "flaticon-users",
						},
						{
							title: "Closing Options",
							desc: "Closing Options",
							root: true,
							page: "/closing-option",
							icon: "flaticon2-cross",
						},
						{
							title: "Location Type",
							desc: "Location Type",
							root: true,
							page: "/location-type",
							icon: "flaticon-pin",
						},
						{
							title: "Account Type",
							desc: "Account Type",
							root: true,
							page: "/account-type",
							icon: "flaticon-user-settings",
						},
						{
							title: "Funding Project Type",
							desc: "Funding Project Type",
							root: true,
							page: "/funding-project-type",
							icon: "flaticon-open-box",
						},
				    	{
							title: "Charge Types",
							desc: "Charge Types",
							root: true,
							page: "/charge-types",
							icon: "flaticon-signs-1",
						},
						{
							title: "REIMB Types",
							desc: "REIMB Types",
							root: true,
							page: "/reimb-type",
							icon: "flaticon-signs-1",
						},
						{
							title: "AUMaster Element",
							desc: "AUMaster Element",
							root: true,
							page: "/aumaster-element",
							icon: "flaticon-interface",
						},
						{
							title: "Class Code",
							desc: "Class Code",
							root: true,
							page: "/class-code",
							icon: "flaticon-interface-10",
						}
					],
				},
				{
					title: "Property Tax",
					desc: "Property Tax",
					icon: "flaticon-home",
					submenu: [
						{
							title: "Parcel Type",
							desc: "Parcel Type",
							root: true,
							page: "/parcel-type",
							icon: "flaticon-truck",
						},
						{
							title: "Allocation Type",
							desc: "Allocation Type",
							root: true,
							page: "/allocation-type",
							icon: "flaticon-edit",
						},
						{
							title: "Tax Auth Type",
							desc: "Tax Auth Type",
							root: true,
							page: "/tax",
							icon: "flaticon-signs-1",
						},
						{
							title: "Allocation Method",
							desc: "Allocation Type",
							root: true,
							page: "/allocation-method",
							icon: "flaticon-list-1",
						},
						{
							title: "Allocation",
							desc: "Allocation",
							root: true,
							page: "/admin-allocation",
							icon: "flaticon-interface-11",
						},
						{
							title: "Weekend Method",
							desc: "Weekend Method",
							root: true,
							page: "/weekend-method",
							icon: "flaticon-time-3",
						},
						{
							title: "Case Type",
							desc: "Case Type",
							root: true,
							page: "/case-type",
							icon: "flaticon-list-2",
						},
						{
							title: "Payment Status",
							desc: "Payment Status",
							root: true,
							page: "/payment-status",
							icon: "flaticon-time",
						},
						{
							title: "Assessment Group",
							desc: "Assessment Group",
							root: true,
							page: "/assessment-group",
							icon: "flaticon-map",
						},
						{
							title: "Type Code",
							desc: "Type Code",
							root: true,
							page: "/type-code",
							icon: "flaticon-tool",
						},
						{
							title: "Appeal Status",
							desc: "Appeal Status",
							root: true,
							page: "/appeal-status",
							icon: "flaticon2-dashboard",
						},
						{
							title: "PT Process Status",
							desc: "PT Process Status",
							root: true,
							page: "/pt-process-status",
							icon: "flaticon2-dashboard",
						},
						{
							title: "Escalated Value Type",
							desc: "Escalated Value Type",
							root: true,
							page: "/escalated-value-type",
							icon: "flaticon-share",
						},
						{
							title: "Property Method",
							desc: "Property Method",
							root: true,
							page: "/property-method",
							icon: "flaticon-more-v5",
						},
						{
							title: "PT Process Type",
							desc: "PT Process Type",
							root: true,
							page: "/pt-process-type",
							icon: "flaticon-more-v4",
						},
						{
							title: "Installment Type",
							desc: "Installment Type",
							root: true,
							page: "/installment-type",
							icon: "flaticon-squares-4",
						},
						{
							title: "EQFactor Type",
							desc: "EQFactor Type",
							root: true,
							page: "/eq-factor-type",
							icon: "flaticon-share",
						},
						{
							title: "Reserve Factor Type",
							desc: "Reserve Factor Type",
							root: true,
							page: "/reserve-factor-type",
							icon: "flaticon-more-v4",
						},
						{
							title: "Rate Type",
							desc: "Rate Type",
							root: true,
							page: "/rate-type",
							icon: "flaticon-signs-1",
						},
						{
							title: "Rate",
							desc: "Rate",
							root: true,
							page: "/rate",
							icon: "flaticon-tool",
						},
						{
							title: "Query Type",
							desc: "Query Type",
							root: true,
							page: "/query-type",
							icon: "flaticon-list-2",
						},
						{
						
							title: "Adjust Type",
							desc: "Adjust Type",
							root: true,
							page: "/adjust-type",
							icon: "flaticon-squares-4",
						},
						{
							title: "Adjust",
							desc: "Adjust",
							root: true,
							page: "/adjust",
							icon: "flaticon-lifebuoy",
						},
						{
							title: "Vintage Option",
							desc: "Vintage Option",
							root: true,
							page: "/vintage-option",
							icon: "flaticon-more-v5",
						},
						{
							title: "Reserve Factor",
							desc: "Reserve Factor",
							root: true,
							page: "/reserve-factor",
							icon: "flaticon-refresh",
						},
						{
							title: "Reserve Method",
							desc: "Reserve Method",
							root: true,
							page: "/reserve-method",
							icon: "flaticon-more-v5",
						},
						{
							title: "Levy Class",
							desc: "Levy Class",
							root: true,
							page: "/levy-class",
							icon: "flaticon-more-v5",
						},
					]
				},
				{
					title: "Help",
					desc: "Help",
					icon: "flaticon-questions-circular-button",
					submenu: [
						{
							title: "FAQ",
							desc: "FAQ",
							root: true,
							page: "/faq",
							icon: "flaticon-list-2",
						},
					]
				},
				{
					title: "Access Management",
					desc: "Access Management",
					icon: "flaticon-rotate",
					page: "/authorities",
					submenu: [
						{
							title: "Authorities",
							desc: "Authorities",
							root: true,
							page: "/authorities",
							icon: "flaticon-users",
						},
						{
							title: "Module",
							desc: "Module",
							root: true,
							page: "/module",
							icon: "flaticon-users",
						}
					],
				},
						]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}