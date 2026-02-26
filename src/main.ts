import { homework } from "./homework/homework";
import { Validations } from "./namespaces/validations";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div>
    <h1>Namespaces</h1>
  </div>
`;

console.log(Validations.validateText("Lalo"));
homework();
