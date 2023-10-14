import ProjectList from "./PorjectList";

const Summary = () => {
  const projects = [
    {
      id: 1,
      title: "03/2023 Onboarding and starting dashboard with D3.js",
      details: [
        "Learning about the Logistic Industry",
        "Becoming familiar with the core applicatioin built with Django Rest framework and React",
        "Started a dashboard to show key KPIs with D3.js",
      ],
      result: "Became with logistics industry and new company",
    },
    {
      id: 2,
      title: "04/2023 Finsished D3.js dashboard",
      details: [
        "Shows buses incoming and outgoing by terminals",
        "Show orders incoming and outgoing by terminals",
        "Show skid counts by terminals",
        "Added a time filter and terminal filter",
        "Add tooltip for hover",
      ],
      result:
        "User can get a quick understand of status through visual representations",
    },
    {
      id: 3,
      title: "05/2023 Pricing Model and Accounting",
      details: [
        "Trained ML model for price predicting. Key features where start, end, skids, weight, vehicle type, and duration. Used CatBoost from Yandex",
        "Added new field of 'scheduled pickup' and incorporated it to various parts of the application",
        "Created new input fields on various forms to insure data consistency",
      ],
      result:
        "Users can now automatically get range for appropriate prices for new orders. The scheduled pickup time saves users from a manual calculation. Data is now more reliable.",
    },
    {
      id: 4,
      title: "06/2023 Started Warehouse application",
      details: [
        "A dashboard made with D3.js current orders for each warehouse",
        "A new UI that shows incoming and outgoing order by warehouse",
        "User can mark orders as loaded or unloaded",
        "Added a notes field where operators can leave special messages",
        "Added to new fields to the database to reflect new functionality",
      ],
      result:
        "There is more transparency between warehouse associates and operators. Operators can give accucurate and real time updates to customers",
    },
    {
      id: 5,
      title: "07/2023 Extra Features added to the Warehouse applicaiton",
      details: [
        "Orders are now grouped by bus and can be expanded to see individual orders",
        "User can now take photos of orders",
        "User can now print labels for the orders",
        "User can now scan order QR codes with an iPad",
        "Three new data tables added and created file storage management stystem on the server to store the files",
        "Functionality can be done on the bus level to quicken work flow",
      ],
      result:
        "Processes that used to be done on various tools are done with one tool which improved efficiency and reliability",
    },
    {
      id: 6,
      title: "08/2023 Dashboard for sales teams and user history",
      details: [
        "Automated data gathering from Insightly",
        "Data displayed in a custom format to reveal KPIs to management",
        "Every action that changes data related to an order is now recorded to a new data table that shows who, when and what was changed to an order",
      ],
      result:
        "Management can now clearly see KPIs related to sales in one place. More transparency and accountability for data changes related to orders.",
    },
    {
      id: 7,
      title: "09/2023 arcGIS map and warehouse applicaiton improvements",
      details: [
        "Through Google Maps api, the longitude and latitude of every pickup and delivery was recorded in a new data table",
        "Through arcGIS every active order is displayed on a map",
        "In the UI of the warehouse application certain columns and rows are highlight different colors",
      ],
      result:
        "User now have a geographic view of current orders. Users can quickly identify pressing issues on the warehouse applicaitons due to color highlights",
    },
    {
      id: 8,
      title: "10/2023 Improvments on map and worked on bus application",
      details: [
        "Users can now make custome routes on the map",
        "Tooptip added to the map to show order numbers, duration, dirver information, and date and times",
        "The form on the bus sheet has stricter inputs",
      ],
      result:
        "User can now use the map to compare potential new orders with current orders. Data is now more reliable in the bus application \
      and user can fill in the form quicker",
    },
  ];
  return <ProjectList projects={projects} />;
};

export default Summary;
