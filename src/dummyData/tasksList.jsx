const tasksList = [
    {
        title: "Processing documents for signing the deal",
        actions: [
            {
                title: "Approve SMB documents",
                description: "We need to approve the SMB documents before we even get started with the deal.",
                status: 'completed',
                type: 'secure',
                due: '12-9-2023',
                comments: 0
            },
            {
                title: "Check on email open rate and follow-up with their CEO about campaign results",
                description: "Analyze the email open rate data and initiate a conversation with their CEO regarding the campaign performance.",
                status: 'noStatus',
                type: 'business',
                due: '11-9-2023',
                comments: 3
            },
            {
                title: "Champion has departed and needs actions",
                description: "Reach out to the departing champion to ensure a smooth transition and identify any pending actions.",
                status: 'rejected',
                type: 'email',
                due: '20-9-2023',
                comments: 0
            },
            {
                title: "This is an in-progress one",
                description: "Review the current progress and update the task status accordingly.",
                status: 'scheduled',
                type: 'none',
                due: '15-9-2023',
                comments: 0
            },
        ],
    },
    {
        title: "Market Research for New Product Launch",
        actions: [
            {
                title: "Conduct competitor analysis",
                description: "Research and compile information about our competitors in the market.",
                status: 'completed',
                type: 'business',
                due: '8-9-2023',
                comments: 0
            },
            {
                title: "Define target audience demographics",
                description: "Identify the key demographics for our target audience to refine our marketing strategy.",
                status: 'noStatus',
                type: 'business',
                due: '12-9-2023',
                comments: 0
            },
            {
                title: "Create a SWOT analysis",
                description: "Analyze our product's strengths, weaknesses, opportunities, and threats to develop a comprehensive strategy.",
                status: 'rejected',
                type: 'secure',
                due: '12-9-2023',
                comments: 0
            },
            {
                title: "Survey potential customers",
                description: "Design and launch a survey to gather feedback from potential customers.",
                status: 'scheduled',
                type: 'business',
                due: '9-9-2023',
                comments: 3
            },
        ],
    },
    {
        title: "Website Redesign",
        actions: [
            {
                title: "Review current website design",
                description: "Examine our existing website design to identify areas that need improvement.",
                status: 'noStatus',
                type: 'email',
                due: '13-9-2023',
                comments: 3
            },
            {
                title: "Develop wireframes for new design",
                description: "Create wireframes for the updated website layout.",
                status: 'completed',
                type: 'email',
                due: '14-9-2023',
                comments: 3
            },
            {
                title: "Content audit",
                description: "Evaluate the existing website content and determine what needs to be updated or replaced.",
                status: 'rejected',
                type: 'secure',
                due: '10-9-2023',
                comments: 0
            },
            {
                title: "Mobile responsiveness testing",
                description: "Test the website's performance and responsiveness on various mobile devices.",
                status: 'noStatus',
                type: 'secure',
                due: '15-9-2023',
                comments: 0
            },
        ],
    },
    {
        title: "Employee Training Program",
        actions: [
            {
                title: "Identify training needs",
                description: "Conduct a needs assessment to determine the training requirements of employees.",
                status: 'completed',
                type: 'secure',
                due: '7-9-2023',
                comments: 1
            },
            {
                title: "Design training modules",
                description: "Develop training modules and materials based on identified needs.",
                status: 'scheduled',
                type: 'email',
                due: '10-9-2023',
                comments: 0
            },
            {
                title: "Schedule training sessions",
                description: "Coordinate and schedule training sessions for employees.",
                status: 'noStatus',
                type: 'email',
                due: '12-9-2023',
                comments: 2
            },
            {
                title: "Evaluate training effectiveness",
                description: "Measure the impact of training on employee performance and make adjustments as necessary.",
                status: 'completed',
                type: 'none',
                due: '12-9-2023',
                comments: 0
            },
        ],
    },
    {
        title: "Product Launch Preparation",
        actions: [
            {
                title: "Develop marketing collateral",
                description: "Create marketing materials such as brochures, flyers, and promotional videos.",
                status: 'scheduled',
                type: 'business',
                due: '13-9-2023',
                comments: 0
            },
            {
                title: "Plan launch event",
                description: "Coordinate the details of the product launch event, including venue, date, and invitations.",
                status: 'completed',
                type: 'email',
                due: '12-9-2023',
                comments: 1
            },
            {
                title: "Social media promotion",
                description: "Create a social media campaign to generate buzz around the upcoming product launch.",
                status: 'completed',
                type: 'business',
                due: '11-9-2023',
                comments: 3
            },
            {
                title: "Monitor inventory",
                description: "Ensure that there is sufficient product inventory for the launch date.",
                status: 'rejected',
                type: 'secure',
                due: '12-9-2023',
                comments: 0
            },
        ],
    },
];

export default tasksList;