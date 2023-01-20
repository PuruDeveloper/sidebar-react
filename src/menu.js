import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import React from "react";

export const menu = [
  {
    icon: "",
    title: "Home"
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
