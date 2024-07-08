import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "1000px",
  backgroundColor: "seagreen",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  margin: "auto",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "center",
  marginTop: "50px",
});

export const title = style({
  fontSize: "30px",
  fontWeight: "bold",
  margin: "auto",
});

export const closeButton = style({
  fontSize: "30px",
  marginLeft: "-50px",
  marginRight: "20px",
  opacity: "0.5",
  ":hover": {
    opacity: 1.0,
  },
});

export const tableWrapper = style({
  backgroundColor: "beige",
  borderCollapse: "collapse",
  margin: "50px",
  width: "auto",
  height: "auto",
});

export const tableHeader = style({
  color: "#D5DDE5",
  backgroundColor: "darkgreen",
  borderBottom: "4px solid pink",
  fontSize: "15px",
});

export const tableBody = style({
  textAlign: "center",
});

export const tableRow = style({
  color: "#666B85",
  borderBottom: "1px solid pink",
  ":hover": {
    backgroundColor: "coral",
    color: "#FFFFFF",
    borderBottom: "1px solid black",
  },
});
