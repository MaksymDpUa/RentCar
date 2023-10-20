import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdvertList } from "../../components/AdvertList/AdvertList";
import { SideBar } from "../../components/SideBar/SideBar";
import { fetchAdverts } from "../../redux/adverts/advertsOperations";
import { selectAdverts } from "../../redux/adverts/advertsSelectors";

const volvo = async () => {
  return await axios.get("/adverts?filter=volvo");
};

const Catalog = () => {
  const dispatch = useDispatch();
  const es = volvo();
  console.log(es);
  //   const [adv, setAdv] = useState([]);
  useEffect(() => {
    dispatch(fetchAdverts());
  }, []);
  //   const adva = fetchAdverts();
  //   console.log(adva);
  const catalog = useSelector(selectAdverts);

  //   console.log(adv);

  return (
    <>
      <h1>Catalog</h1>
      <SideBar />
      <AdvertList />
    </>
  );
};
export default Catalog;
