import { nanoid } from "nanoid";
import {
  FieldLabel,
  InputsThumb,
  SearchBtn,
  SideBarFilters,
  ShevronBtn,
  Input,
} from "./SideBar.styled";
import shewron from "../../asset/shevron.svg";
import { IoIosArrowDown } from "react-icons/io";

export const SideBar = () => {
  const inputModelId = nanoid();
  const inputPriceId = nanoid();
  const inputMileageId = nanoid();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form.name);
  };

  return (
    <aside>
      <SideBarFilters onSubmit={onSubmit}>
        <FieldLabel htmlFor={inputModelId}>
          Car brand
          <Input
            id={inputModelId}
            type="text"
            name="brand"
            placeholder="Enter the text"
          ></Input>
          <ShevronBtn type="button">
            <IoIosArrowDown />
          </ShevronBtn>
        </FieldLabel>

        <FieldLabel htmlFor={inputPriceId}>
          Price/ 1 hour
          <Input
            id={inputPriceId}
            type="text"
            name="price"
            placeholder="To $"
          ></Input>
        </FieldLabel>

        <FieldLabel htmlFor={inputMileageId}>
          Сar mileage / km
          <InputsThumb>
            <Input id={inputMileageId} type="text" name="from">
              {/* From */}
            </Input>
            <Input id={inputMileageId} type="text" name="to">
              {/* To */}
            </Input>
          </InputsThumb>
        </FieldLabel>

        <SearchBtn type="submit">Search</SearchBtn>
      </SideBarFilters>
    </aside>
  );
};
