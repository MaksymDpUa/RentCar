import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SideBar } from "../../components/SideBar/SideBar";
import { fetchAdverts } from "../../redux/adverts/advertsOperations";
import { selectAdverts } from "../../redux/adverts/advertsSelectors";

const Catalog = () => {
  const dispatch = useDispatch();
  //   const [adv, setAdv] = useState([]);
  useEffect(() => {
    dispatch(fetchAdverts());
  }, []);
  //   const adva = fetchAdverts();
  //   console.log(adva);
  const catalog = useSelector(selectAdverts);
  console.log(catalog);
  //   console.log(adv);

  return (
    <>
      <h1>Catalog</h1>
      <SideBar />
    </>
  );
};
export default Catalog;
