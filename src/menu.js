import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import React from "react";

//Open view
export const menu = [
  {
    icon: <HomeOutlinedIcon />,
    title: "Home",
    to: "/home",
  },
  {
    icon: "",
    title: "Application",
    items: [
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Application Analysis",
        to: "/application/analysis",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Detailed Repost",
        to: "/application/detailed-report",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Quickscreen Detailed Report",
        to: "/application/analysis",
      },
    ]
  },
  {
    icon: "",
    title: "Transaction",
    items: [
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Sales/Transaction Analysis",
        to: "/transaction/sales",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Detailed Report",
        to: "/transaction/delatiled-report",
      },
    ]
  },
  {
    icon: "",
    title: "Funded",
    items: [
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Summary Report",
        to: "/funded/sales",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Detailed Report",
        to: "/funded/delatiled-report",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Account Holder Profile",
        to: "/funded/account-header-profile",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Website User Activity",
        to: "/funded/website-user-activity",
      },
    ]
  },
];



//Closed view
export const closedMenu = [
  {
    icon: <HomeOutlinedIcon />,
    title: "Home",
    to: "/home",
    items: [],
  },
  {
    icon: <HomeOutlinedIcon />,
    title: "Application",
    to: "/application",
    items: [
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Application Analysis",
        to: "/application/analysis",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Detailed Repost",
        to: "/application/detailed-report",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Quickscreen Detailed Report",
        to: "/application/analysis",
      },
    ]
  },
  {
    icon: <TrendingUpOutlinedIcon />,
    title: "Transaction",
    to: "/transaction",
    items: [
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Sales/Transaction Analysis",
        to: "/transaction/sales",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Detailed Report",
        to: "/transaction/delatiled-report",
      },
    ]
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Funded",
    to: "/funded",
    items: [
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Summary Report",
        to: "/funded/sales",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Detailed Report",
        to: "/funded/delatiled-report",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Account Holder Profile",
        to: "/funded/account-header-profile",
      },
      {
        icon: <LocalLibraryOutlinedIcon />,
        title: "Website User Activity",
        to: "/funded/website-user-activity",
      },
    ]
  },
];
