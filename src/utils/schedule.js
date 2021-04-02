const sampleData = [
	{
		id: '2021-04-01 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Physical',
				secondTask: 'Social'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-04-02 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Fitness & Health'
			}
		]
	},
	{
		id: '2021-04-03 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-04-04 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Fitness & Health'
			},
			{
				firstTask: 'Social',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Fitness & Health'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Chores'
			}
		]
	},
	{
		id: '2021-10-14 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Chores',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-10-15 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Spiritual'
			}
		]
	},
	{
		id: '2021-10-16 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-10-17 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Physical',
				secondTask: 'Social'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-10-18 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Fitness & Health'
			}
		]
	},
	{
		id: '2021-10-19 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-10-20 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Fitness & Health'
			},
			{
				firstTask: 'Social',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Fitness & Health'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Chores'
			}
		]
	},
	{
		id: '2021-10-21 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Chores',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-10-22 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Spiritual'
			}
		]
	},
	{
		id: '2021-10-23 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-10-24 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Physical',
				secondTask: 'Social'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-10-25 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Fitness & Health'
			}
		]
	},
	{
		id: '2021-10-26 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-10-27 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Fitness & Health'
			},
			{
				firstTask: 'Social',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Fitness & Health'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Chores'
			}
		]
	},
	{
		id: '2021-10-28 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Chores',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-10-29 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Spiritual'
			}
		]
	},
	{
		id: '2021-10-30 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-10-31 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Physical',
				secondTask: 'Social'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-11-01 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Fitness & Health'
			}
		]
	},
	{
		id: '2021-11-02 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-11-03 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Fitness & Health'
			},
			{
				firstTask: 'Social',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Fitness & Health'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Chores'
			}
		]
	},
	{
		id: '2021-11-04 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Chores',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-11-05 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Spiritual'
			}
		]
	},
	{
		id: '2021-11-06 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-11-07 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Physical',
				secondTask: 'Social'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-11-08 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Social',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Spiritual',
				secondTask: 'Errands'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Fitness & Health'
			}
		]
	},
	{
		id: '2021-11-09 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Intellecual',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Chores'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Physical'
			}
		]
	},
	{
		id: '2021-11-10 00:00:00',
		date: new Date().toISOString(),
		time: [
			{
				firstTask: 'Errands',
				secondTask: 'Fitness & Health'
			},
			{
				firstTask: 'Social',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Physical',
				secondTask: 'Spiritual'
			},
			{
				firstTask: 'Errands',
				secondTask: 'Physical'
			},
			{
				firstTask: 'Chores',
				secondTask: 'Fitness & Health'
			},
			{
				firstTask: 'Fitness & Health',
				secondTask: 'Chores'
			}
		]
	}
];

export default sampleData;