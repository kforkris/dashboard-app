import { getDashboardData } from "@/store/Dashboard/action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDashboardData());
  // }, []);

  // const { dashboardData } = useSelector((state) => state.dashboardData) || {};

  // console.log(dashboardData);

  return <div>index</div>;
};

export default index;
