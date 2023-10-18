import { nanoid } from "nanoid";
export const SideBar = () => {
  const inputModelId = nanoid();
  const inputPriceId = nanoid();
  const inputMileageId = nanoid();

  return (
    <aside>
      <form>
        <label htmlFor={inputModelId}>Car brand</label>
        <input id={inputModelId} type="text"></input>
        <label htmlFor={inputPriceId}>Price/ 1 hour</label>
        <input id={inputPriceId} type="text"></input>
        <label htmlFor={inputMileageId}>Сar mileage / km</label>
        <input id={inputMileageId} type="text"></input>
        <input id={inputMileageId} type="text"></input>
        <button type="submit">Search</button>
      </form>
    </aside>
  );
};
