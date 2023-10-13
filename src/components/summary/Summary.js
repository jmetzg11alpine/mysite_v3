import ProjectList from "./PorjectList";

const Summary = () => {
  const projects = [
    {
      id: 1,
      title: "03/2023 Onboarding and starting dashboard with D3.js",
      details: [
        "Learning about the Logistic Industry",
        "Becoming familiar with the core applicatioin built with Django Rest API and React",
        "Started a dashboard to show key KPIs with D3.js",
      ],
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
    },
    {
      id: 3,
      title: "05/2023 Pricing Model and Accounting",
      details: [
        "Trained ML model for price predicting. Key features where start, end, skids, weight, vehicle type, and duration. Used CatBoost from Yandex",
        "Prepared financial data to move from Quickbooks to Sage",
        "Added new field to of 'scheduled pickup' and incorporated it to various parts of the application",
      ],
    },
    {
      id: 4,
      title: "06/2023 Started Warehouse application",
      details: [
        "Started a tool that warehouse associates can track order with",
        "Meeting to find pain points for warehouse associates",
        "Built a UI that shows incoming and outgoing order with the ability to mark loaded or unloaded",
        "Added to new fields to the database to reflect new functionality",
      ],
    },
    {
      id: 5,
      title: "07/2023 Extra Features added to the Warehouse applicaiton",
      details: [
        "Orders are now grouped by bus and can be expanded to see individual orders",
        "User can now take photos of orders",
        "User can now print labels for the orders",
        "User can now scan order QR codes with iPad",
        "Three new data tables added and created file storage management stystem on the server to store the files",
      ],
    },
    {
      id: 6,
      title: "08/2023 Dashboard for sales teams and user history",
      details: [
        "some details",
        "some other details",
        "some other details that take up a lot more space",
      ],
    },
    {
      id: 7,
      title: "09/2023 arcGIS map",
      details: [
        "some details",
        "some other details",
        "some other details that take up a lot more space",
      ],
    },
    {
      id: 8,
      title: "10/2023 something",
      details: ["something cools something cools"],
    },
  ];
  return <ProjectList projects={projects} />;
};

export default Summary;
