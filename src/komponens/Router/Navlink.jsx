import { faHomeUser, faDashboard } from "@fortawesome/free-solid-svg-icons";
import FormHooks from "../FormValidation/formHooks";
import FetchHooks from "../hooks";
import BootstrapStyle from "../kedua_Styling/boostrap";
import FetchData from "../LifeCycleFetch/fetch";
import Redux from "../redux";

const NavlinkBar = [
  { index: 1, link: "/", name: "dashboard", icon: faDashboard }, //function:<Dashboard/>},
  { index: 2, link: "/bootstrap", name: "Bootstrap", icon: faHomeUser }, //function:<Bootstrap/>},
  {
    index: 3,
    link: "/FormValidation",
    name: "Form Validasi",
    icon: faHomeUser,
  }, //function:<FormValidation/>},
  {
    index: 4,
    link: "/LifeCycleComponent",
    name: "LifeCycleComponent",
    icon: faHomeUser,
  }, //function:<LifeCycleComponent/>},
  { index: 5, link: "/Hooks", name: "Hooks", icon: faHomeUser }, //function:<Hooks/>}
  { index: 6, link: "/redux", name: "Redux", icon: faHomeUser },
];


const Dashboard = () => {
  return <h1>Dashboard</h1>;
};
const FormValidation = () => {
  return <FormHooks />;
};
const LifeCycleComponent = () => {
  return <FetchData />;
};
const Hooks = () => {
  return <FetchHooks />;
};
const Reduxs = () => {
  return <Redux />;
};
const Bootstrap = () => {
  return (
      <BootstrapStyle />
  );
};

export {
  Dashboard,
  Bootstrap,
  FormValidation,
  NavlinkBar,
  LifeCycleComponent,
  Hooks,
  Reduxs,
};
